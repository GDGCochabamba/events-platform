function AttendeesListController(EventService, $stateParams) {
  var ctrl = this;
  ctrl.attendees = [];
  ctrl.$onInit = onInit;
  ctrl.getList = getList;
  function getList() {
    var attendees = EventService.getEventAttendees(ctrl.key).then(function (attendeeProfiles) {
      ctrl.profiles = attendeeProfiles;
    }, function (error) {
      console.log(error);
    });
  }

  function onInit() {
    console.log(ctrl.key);
    ctrl.getList();
  }
}

angular
  .module('components.event')
  .controller('AttendeesListController', AttendeesListController);