function EventService($log, $firebaseArray, $firebaseObject, $q, AuthService, ProfileService) {
  var refEventList = firebase.database().ref().child('events'),
    refEventAttendees = firebase.database().ref().child('eventAttendees'),
    list = $firebaseArray(refEventList),
    obj,
    profilesRef = firebase.database().ref().child('profiles')
  service = {
    add: add,
    getByKey: getByKey,
    list: getList,
    addAttendeeToEvent: addAttendeeToEvent,
    update: update,
    getEventAttendees: getEventAttendees,
    addAttendeeToEvent: addAttendeeToEvent,
    confirmInscription: confirmInscription
  };

  return service;

  function add(event) {
    $log.info('[EventService]', 'add event', event);
    var deferred = $q.defer();
    list.$add(event).then(function (refEventList) {
      deferred.resolve(refEventList);
    }, function (error) {
      deferred.reject(error);
    });

    return deferred.promise;
  }

  function getByKey(key) {
    var deferred = $q.defer();

    obj = $firebaseObject(refEventList.child(key));
    obj.$loaded().then(function (response) {
      deferred.resolve(response);
    }, function (error) {
      deferred.reject(error);
    });

    return deferred.promise;
  }

  function update(event) {
    var deferred = $q.defer();

    event.$save().then(function (ref) {
      deferred.resolve(ref);
    }, function (error) {
      deferred.reject(error);
    });

    return deferred.promise;
  }

  function getList() {
    return $firebaseArray(refEventList);
  }

  function getEventAttendees(eventUID) {
    var attendeesInscriptions = {};
    refEventAttendees.child(eventUID).on('child_added', function (attendee) {
      var profileRef = profilesRef.child(attendee.key);
      var profileFirebaseObject = $firebaseObject(profileRef);
      if (!attendeesInscriptions[attendee.key]) {
        attendeesInscriptions[attendee.key] = {};
      }
      attendeesInscriptions[attendee.key]['profile'] = $firebaseObject(profileRef);
    });
    var eventAttendees = $firebaseArray(refEventAttendees.child(eventUID));
    var deferred = $q.defer();
    eventAttendees.$loaded().then(function (attendees) {
      
      attendees.forEach(function (attendee, key) {
        if (!attendeesInscriptions[attendee.$id]) {
          attendeesInscriptions[attendee.$id] = {};
        }
        attendeesInscriptions[attendee.$id]['attendee'] = attendee;
        if (attendee.confirmed_by) {
          attendeesInscriptions[attendee.$id]['confirmed_by'] = $firebaseObject(profilesRef.child(attendee.confirmed_by));
        }
      });
      deferred.resolve(attendeesInscriptions);
    }, function (error) {
      deferred.reject(error);
    });
    return deferred.promise;
  }

  /**
   * Add an Attendee to an Event
   *
   * This function could be implemented in a controller like this.
   * EventService.addAttendeeToEvent('-KcAdnjmc9KUI8j2qDG0', '7FFO5VnuygMVW9nxRtBJEbdJ2O13');
   *
   * @param {string} uidEvent - UID of event.
   * @param {string} uidAttendee - UID of Attendee.
   * @return {void}
   */
  function addAttendeeToEvent(uidEvent, uidAttendee) {
    // Create a firebase object using the reference eventAttendees collection and Event UID.
    var attende = $firebaseObject(refEventAttendees.child(uidEvent));
    // Add attendee to the attende object
    // We could use here something like this: attende[uidAttendee] = { resources: 1, assisted: 1 }
    attende[uidAttendee] = {status: 'pending'};
    // Save attendee informartion
    attende.$save();
  }

  function confirmInscription(uidEvent, uidAttendee) {
    var attendee = $firebaseObject(refEventAttendees.child(uidEvent).child(uidAttendee));
    attendee.status = 'confirmed';
    attendee.confirmed_by = AuthService, ProfileService.getUserData().uid;
    return attendee.$save();
  }

  function getAllProfiles() {
    return ProfileService.getList();
  }
}

angular
  .module('components.event')
  .factory('EventService', EventService);