var createAttendees = {
  bindings: {
  },
  templateUrl: 'create-attendees.html',
  controller: 'CreateAttendeesController'
}

angular
  .module('components.event')
  .component('createAttendees', createAttendees);


require('./create-attendees.controller');