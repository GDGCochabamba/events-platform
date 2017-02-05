function EventListController($log, EventService) {
  var ctrl = this;
  ctrl.$onInit  = onInit;
  ctrl.edit = edit;

  function edit(event) {
    $log.info('event', event);
  }

  function onInit() {
      ctrl.list = EventService.list();
      $log.info('EventListController', ctrl);
  }
}

angular
  .module('components.event')
  .controller('EventListController', EventListController);