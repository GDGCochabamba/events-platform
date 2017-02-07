var eventList = {
  templateUrl: 'list-event.html',
  controller: 'EventListController'
};

angular
  .module('components.event')
  .component('eventList', eventList)
  .config(function($stateProvider) {
    $stateProvider
      .state('event.eventList', {
        url: '^/events',
        component: 'eventList'
      });
  });

require('./list-event.controller');
