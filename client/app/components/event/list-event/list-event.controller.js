function EventListController($log, $state, EventService) {
  var ctrl = this;
  ctrl.$onInit  = onInit;
  ctrl.viewEvent = viewEvent;

  function onInit() {
    ctrl.list = EventService.list();
  }

  function viewEvent(event) {
    $state.href('attendeesList', {
      id: event.$id
    });
  }
}

angular
  .module('components.event')
  .controller('EventListController', EventListController);