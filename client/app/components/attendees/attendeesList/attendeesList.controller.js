function AttendeesListController(AttendeesService) {
  var ctrl = this;
  ctrl.getList = AttendeesService.getList();
}

angular
  .module('components.attendees')
  .controller('AttendeesListController', AttendeesListController);
