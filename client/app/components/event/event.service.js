function EventService($log, $firebaseArray, $q) {
  var ref = firebase.database().ref().child('events'),
      list = $firebaseArray(ref);
      service = {
          add: add
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
}

angular
  .module('components.auth')
  .factory('EventService', EventService);