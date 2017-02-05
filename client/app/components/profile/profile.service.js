function ProfileService($log, $firebaseArray, $q) {
  var ref = firebase.database().ref().child('profiles'),
      list = $firebaseArray(ref);
      service = {
          add: add
      };

      return service;

      function add(profile) {
        $log.info('[ProfielService]', 'add profile', profile);
        var deferred = $q.defer();
        list.$add(profile).then(function(ref) {
            deferred.resolve(ref);
        }, function(error){
            deferred.reject(error);
        });

        return deferred.promise;
      }
}

angular
  .module('components.auth')
  .factory('ProfileService', ProfileService);