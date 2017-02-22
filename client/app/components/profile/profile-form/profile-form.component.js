var profileForm = {
	bindings: {
	    progfile: '<',
	    submitText: '@',
	    onAction: '&'
	},
	templateUrl: 'profile-form.html',
	controller: 'ProfileFormController'
}

angular
  .module('components.profile')
  .component('profileForm', profileForm);


require('./profile-form.controller');