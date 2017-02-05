function EventService($log, $firebaseArray, $q) {
  var ref = firebase.database().ref().child('events'),
    list = $firebaseArray(ref);
  service = {
    add: add,
    list: getList
  };

  return service;

  function add(event) {
    $log.info('[EventService]', 'add event', event);
    var deferred = $q.defer();
    list.$add(event).then(function (ref) {
      deferred.resolve(ref);
    }, function (error) {
      deferred.reject(error);
    });

    return deferred.promise;
  }

  function getList() {
    return $firebaseArray(ref);
  }
}

angular
  .module('components.event')
  .factory('EventService', EventService);