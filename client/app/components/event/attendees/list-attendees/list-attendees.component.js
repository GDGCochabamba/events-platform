var attendeesList = {
  templateUrl: 'list-attendees.html',
  controller: 'AttendeesListController',
  bindings: {
    key: '='
  }
};

angular
  .module('components.event')
  .component('attendeesList', attendeesList)
  ;

require('./list-attendees.controller');
