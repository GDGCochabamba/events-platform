function EditEventController($log, $state, $stateParams, EventService) {
  var ctrl = this;

  ctrl.$onInit  = onInit;
  ctrl.edit = edit;

  function edit() {
      $log.info('Going to edit event', ctrl.event);
      EventService.update(ctrl.event).then(function(ref){
        $log.info('[EditEventController]', 'Update process was successful');
        $state.go('event.eventList');
      });
  }

  function onInit() {
      var key = $stateParams.keyEvent;

      EventService.getByKey(key).then(function(event){
        $log.info('[EditEventController]', 'event on init: ', event);
        ctrl.event = event;
      });
  }
}

angular
  .module('components.event')
  .controller('EditEventController', EditEventController);
