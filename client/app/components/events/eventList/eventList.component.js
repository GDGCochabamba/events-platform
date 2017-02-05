var eventList = {
  templateUrl: 'eventList.html',
  controller: 'EventListController as ctrl'
};

angular
  .module('components.events')
  .component('eventList', eventList)
  .config(function($stateProvider) {
    $stateProvider
      .state('eventList', {
        url: '/events',
        component: 'eventList'
      });
  });

require('./eventList.controller');
