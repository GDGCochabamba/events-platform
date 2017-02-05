function EventListController(EventService) {
  var ctrl = this;
  ctrl.$onInit  = onInit;
  function onInit() {
      ctrl.list = EventService.list();
      console.log(ctrl);
  }
}

angular
  .module('components.event')
  .controller('EventListController', EventListController);