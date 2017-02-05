var editEvent = {
  bindings: {
  },
  templateUrl: 'edit-event.html',
  controller: 'EditEventController'
}

angular
  .module('components.event')
  .component('editEvent', editEvent)
  .config(function($stateProvider) {
    $stateProvider
      .state('editEvent', {
        url: '/edit-event/:keyEvent',
        component: 'editEvent',
        data: {
          requiredAuth: true
        }
      });
  });


require('./edit-event.controller');