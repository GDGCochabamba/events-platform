function CreateAttendeesController($log, $state, $stateParams, EventService) {
  var ctrl = this;

  ctrl.$onInit  = onInit;  
  
  function onInit() {
    console.log('init controller createAttendees');
    ctrl.key = $stateParams.keyEvent;      
    ctrl.profiles = EventService.getAllProfiles();
    console.log('ctrl.profiles');
    console.log(ctrl.profiles);
  }
  
  function createAttendees(profile) {
    EventService.addAttendeeToEvent(ctrl.key, profile.$id);
  }


}

angular
  .module('components.event')
  .controller('CreateAttendeesController', CreateAttendeesController);
