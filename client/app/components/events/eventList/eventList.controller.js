function EventListController(EventsService) {
  var ctrl = this;
  ctrl.getList = EventsService.getList();
}

angular
  .module('components.events')
  .controller('EventListController', EventListController);
