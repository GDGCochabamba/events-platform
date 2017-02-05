var attendeesList = {
  templateUrl: 'attendeesList.html',
  controller: 'AttendeesListController as ctrl'
};

angular
  .module('components.attendees')
  .component('attendeesList', attendeesList)
  .config(function($stateProvider) {
    $stateProvider
      .state('attendeesList', {
        url: '/events/:id',
        component: 'attendeesList'
      });
  });

require('./attendeesList.controller');
