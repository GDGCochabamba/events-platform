function AddEventController($log, EventService) {
  var ctrl = this;

  ctrl.$onInit  = onInit;
  ctrl.add = add;

  function add() {
    EventService.add(ctrl.event).then(function(ref){
      var id = ref.key;
      $log.info('[AddEventController]', 'added record with id:', id);
    });
  }

  function onInit() {
    ctrl.event = {
      name: 'Event name 1'
    };
  }
}

angular
  .module('components.event')
  .controller('AddEventController', AddEventController);
