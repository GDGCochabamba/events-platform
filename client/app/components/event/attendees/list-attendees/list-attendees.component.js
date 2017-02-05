var attendeesList = {
  templateUrl: 'list-attendees.html',
  controller: 'AttendeesListController'
};

angular
  .module('components.event')
  .component('attendeesList', attendeesList)
  .config(function($stateProvider) {
    $stateProvider
      .state('attendeesList', {
        url: '/events/:id',
        component: 'attendeesList'
      });
  });

require('./list-attendees.controller');
