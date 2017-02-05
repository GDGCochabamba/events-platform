function EventService($log, $firebaseArray, $firebaseObject, $q) {
  var ref = firebase.database().ref().child('events'),
      refEventAttendees = firebase.database().ref().child('eventAttendees'),
      list = $firebaseArray(ref);
      service = {
          add: add,
          list: getList,
          addAttendeeToEvent: addAttendeeToEvent
      };

      return service;

      function add(event) {
        $log.info('[EventService]', 'add event', event);
        var deferred = $q.defer();
        list.$add(event).then(function(ref) {
            deferred.resolve(ref);
        }, function(error){
            deferred.reject(error);
        });

        return deferred.promise;
      }

      function getList() {
        return [{
            name: 'The Event',
            start_date: '2017-02-05T00:03:31.622Z',
            end_date: '2017-02-06T00:03:31.622Z',
            location: 'Somewere over the rainbow.',
            description: 'Just a dummy day.',
            attendees: [],
            cost: '1 gazillion dollars',
            event_images: [],
            speakers: [],
            resources: [],
            schedule: {},
            social_media: '',
            organizers: [],
            sponsors: [],
            status: ''
            },
            {
            name: 'Crocodille Fest',
            start_date: '2017-02-05T00:03:31.622Z',
            end_date: '2017-02-06T00:03:31.622Z',
            location: 'Neverland',
            description: 'The croc rules.',
            attendees: [],
            cost: '10bs',
            event_images: [],
            speakers: [],
            resources: [],
            schedule: {},
            social_media: '',
            organizers: [],
            sponsors: [],
            status: ''
            }
        ];
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