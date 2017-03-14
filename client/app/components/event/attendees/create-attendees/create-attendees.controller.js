function CreateAttendeesController($log, $state, $stateParams, EventService) {
  var ctrl = this;

  ctrl.$onInit = onInit;
  ctrl.addToEvent = addToEvent;

  function onInit() {
    ctrl.key = $stateParams.keyEvent;
    EventService.getProfilesForEvent(ctrl.key)
      .then(function (profileInscriptionInfo) {
        ctrl.profiles = profileInscriptionInfo
      }).catch(function (error) {
        console.log(error);
      });
  }

  function addToEvent(profileKey) {
    console.log(profileKey);
    EventService.addAttendeeToEvent(ctrl.key, profileKey)
      .then(function (result) {
        console.log(result);
      }).catch(function (error) {
        console.log(error);
      });
  }
}

angular
  .module('components.event')
  .controller('CreateAttendeesController', CreateAttendeesController);