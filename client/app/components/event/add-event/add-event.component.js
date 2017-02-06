var addEvent = {
  bindings: {
  },
  templateUrl: 'add-event.html',
  controller: 'AddEventController'
}

angular
  .module('components.event')
  .component('addEvent', addEvent)
  .config(function($stateProvider) {
    $stateProvider
      .state('event.addEvent', {
        url: '^/add-event',
        component: 'addEvent',
        data: {
          requiredAuth: true
        }
      });
  });


require('./add-event.controller');