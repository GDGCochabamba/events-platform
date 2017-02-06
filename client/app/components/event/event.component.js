var event = {
  templateUrl: 'event.html'
}

angular
  .module('components.event')
  .component('event', event)
  .config(function($stateProvider) {
    $stateProvider
      .state('event', {
        parent: 'app',
        redirectTo: 'event.eventList',
        url: '/event',
        component: 'event'
      });
  });