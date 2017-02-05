function LoginController(AuthService, $state) {
    var ctrl = this;
    var provider = new firebase.auth.FacebookAuthProvider();

    ctrl.$onInit = function() {
        ctrl.userData = {
            email: '',
            password: ''
        };
    }

    ctrl.login = function(event) {
        AuthService
            .login(event.userData.email, event.userData.password)
            .then(function(e) {
                $state.go('app');
            })
    }

    ctrl.facebookLogin = function() {
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;

            $state.go('app');
            // ...
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            console.log(errorCode);
        });
    }
}

angular
    .module('components.auth')
    .controller('LoginController', LoginController);