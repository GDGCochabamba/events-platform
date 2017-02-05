function EventService($log, $firebaseArray, $firebaseObject, $q) {
  var ref = firebase.database().ref().child('events'),
      list = $firebaseArray(ref),
      obj,
      service = {
          add: add,
          getByKey: getByKey,
          list: getList
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
      
      function getByKey(key) {
        var deferred = $q.defer();

        obj = $firebaseObject(ref.child(key));
        obj.$loaded().then(function(response) {
            deferred.resolve(response);
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

}

angular
  .module('components.event')
  .factory('EventService', EventService);