function AttendeesListController(EventService, $stateParams) {
  var ctrl = this;
  ctrl.attendees = [];
  ctrl.$onInit = onInit;
  ctrl.getList = getList;

  function getList() {
    var attendees = EventService.getEventAttendees($stateParams.id).then(function (attendees) {
      ctrl.attendees = attendees;
    }, function (error) {
      console.log(error);
    });
  }

  function onInit() {
    ctrl.getList();
  }
}

angular
  .module('components.event')
  .controller('AttendeesListController', AttendeesListController);