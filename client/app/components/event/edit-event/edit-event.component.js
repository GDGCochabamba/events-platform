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
      .state('event.editEvent', {
        url: '^/edit-event/:keyEvent',
        component: 'editEvent',
        data: {
          requiredAuth: true
        }
      });
  });


require('./edit-event.controller');