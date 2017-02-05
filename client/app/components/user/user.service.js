function UserService($log, $firebaseArray, $q) {
  var ref = firebase.database().ref().child('users'),
      list = $firebaseArray(ref);
      service = {
          add: add
      };

      return service;

      function add(user) {
        $log.info('[UserService]', 'add user', user);
        var deferred = $q.defer();
        list.$add(user).then(function(ref) {
            deferred.resolve(ref);
        }, function(error){
            deferred.reject(error);
        });

        return deferred.promise;
      }
}

angular
  .module('components.auth')
  .factory('UserService', UserService);