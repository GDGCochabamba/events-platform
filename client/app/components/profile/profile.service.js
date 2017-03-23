function ProfileService($log, $firebaseArray, $firebaseObject, $firebaseAuth, $q) {
  var ref = firebase.database().ref().child('profiles'),
      list = $firebaseArray(ref);

      service = {
          add: add,
          createProfile: createProfile,
          getByKey: getByKey,
          list: getList
      };

      return service;

      function add(profile) {
        var deferred = $q.defer();
        var user = $firebaseAuth()
                    .$createUserWithEmailAndPassword(profile.email, profile.password)
                    .then(function (authData) {
                        console.log(authData.uid); //should log new uid.
                        var fprofile = $firebaseObject(ref.child(authData.uid));
                        fprofile.firstName = profile.firstName;
                        fprofile.lastName = profile.lastName;
                        fprofile.birthDate = profile.birthDate;
                        fprofile.phone = profile.phone;
                        fprofile.gender = profile.gender;
                        fprofile.email = profile.email;
                        fprofile.$save().then(function (result) {
                            deferred.resolve(result);
                        }).catch(function (err) {
                            deferred.reject(profile);
                        });
                    })
                    .catch(function(error) {
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
        return $firebaseArray(ref);
      }

      function createProfile(user, authData){        
        var profileRef = $firebase(ref.child('profile'));
        return profileRef.$set(authData.uid, user);
      };
}

angular
  .module('components.auth')
  .factory('ProfileService', ProfileService);