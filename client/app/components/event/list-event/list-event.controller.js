function EventListController($log, $state, EventService) {
  var ctrl = this;
  ctrl.$onInit  = onInit;
  ctrl.edit = edit;
  ctrl.viewEvent = viewEvent;

  function edit(event) {
    $log.info('Going to edit event', event);
  }

  function onInit() {
    ctrl.list = EventService.list();
  }

  function viewEvent(event) {
    $state.go('attendeesList', {
      id: event.$id
    });
  }
}

angular
  .module('components.event')
  .controller('EventListController', EventListController);