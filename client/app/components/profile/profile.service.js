function ProfileService($log, $firebaseArray, $firebaseObject, $firebaseAuth, $q) {
  var ref = firebase.database().ref().child('profiles'),
      list = $firebaseArray(ref);

      service = {
          add: add,
          createProfile: createProfile
      };

      return service;

     function add(profile, user) {
        var deferred = $q.defer();
        var user = $firebaseAuth().$createUserWithEmailAndPassword(user.email, user.password).then(function (authData) {
            console.log(authData.uid); //should log new uid.
            var fprofile = $firebaseObject(ref.child(authData.uid));
            fprofile.firstName = profile.firstName;
            fprofile.lastName = profile.lastName;
            fprofile.birthDate = profile.birthDate;
            fprofile.phone = profile.phone;
            fprofile.gender = profile.gender;
            fprofile.$save().then(function (result) {
                deferred.resolve(result);
            }).catch(function (err) {
                deferred.reject(profile);
            });
        });
        return deferred.promise;
    }

      function createProfile(user, authData){        
        var profileRef = $firebase(ref.child('profile'));
        return profileRef.$set(authData.uid, user);
      };
}

angular
  .module('components.auth')
  .factory('ProfileService', ProfileService);