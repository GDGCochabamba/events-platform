function CreateAttendeesController($log, $state, $stateParams, EventService) {
  var ctrl = this;

  ctrl.$onInit  = onInit;  
  
  function onInit() {
    console.log('init controller createAttendees');
      ctrl.key = $stateParams.keyEvent;
      ctrl.getProfiles();
  }
  
  function getProfiles() {
    ctrl.profiles = EventService.getAllProfiles();
  }
  
  function createAttendees() {

  }


}

angular
  .module('components.event')
  .controller('CreateAttendeesController', CreateAttendeesController);
