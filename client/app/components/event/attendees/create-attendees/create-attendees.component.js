var createAttendees = {
  bindings: {
  },
  templateUrl: 'create-attendees.html',
  controller: 'CreateAttendeesController'
}

angular
  .module('components.event')
  .component('createAttendees', createAttendees)
  .config(function($stateProvider) {
    $stateProvider
      .state('event.createAttendees', {
        url: '^/create-attendees/:keyEvent',
        component: 'event.createAttendees',
        data: {
          requiredAuth: true
        }
      });
  });


require('./create-attendees.controller');