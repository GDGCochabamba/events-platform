function EventService($log, $firebaseArray, $firebaseObject, $q) {
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
          addAttendeeToEvent: addAttendeeToEvent
      };

      return service;

      function add(event) {
        $log.info('[EventService]', 'add event', event);
        var deferred = $q.defer();
        list.$add(event).then(function(refEventList) {
            deferred.resolve(refEventList);
        }, function(error){
            deferred.reject(error);
        });

        return deferred.promise;
      }

      function getByKey(key) {
        var deferred = $q.defer();

        obj = $firebaseObject(refEventList.child(key));
        obj.$loaded().then(function(response) {
            deferred.resolve(response);
        }, function(error){
            deferred.reject(error);
        });

        return deferred.promise;
      }

      function update(event) {
        var deferred = $q.defer();

        event.$save().then(function(ref){
          deferred.resolve(ref);
        }, function(error){
          deferred.reject(error);
        });

        return deferred.promise;
      }

      function getList() {
        return $firebaseArray(refEventList);
  }

  function getEventAttendees(eventUID) {
    var profiles = [];
    refEventAttendees.child(eventUID).on('child_added', function(attendee){
        var profileRef = profilesRef.child(attendee.key);
        var profileFirebaseObject = $firebaseObject(profileRef);
           profiles.push(profileFirebaseObject);
    });
    var eventAttendees = $firebaseObject(refEventAttendees.child(eventUID));
    var deferred = $q.defer();
    eventAttendees.$loaded().then(function (attendees) {
      deferred.resolve(profiles);
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
    attende[uidAttendee] = true;
    // Save attendee informartion
    attende.$save();
  }
}

angular
  .module('components.event')
  .factory('EventService', EventService);