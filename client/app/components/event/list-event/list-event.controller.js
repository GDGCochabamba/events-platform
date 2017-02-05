function EventListController(EventService, $state) {
  var ctrl = this;
  ctrl.$onInit = onInit;
  ctrl.viewEvent = viewEvent;

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