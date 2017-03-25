function AttendeesListController(EventService, $stateParams) {
  var ctrl = this;
  ctrl.attendees = [];
  ctrl.$onInit = onInit;
  ctrl.getList = getList;
  ctrl.confirmInscription = confirmInscription;

  ctrl.totalBank = 0;
  ctrl.totalCash = 0;
  ctrl.totalConfirmed = 0;
  // ctrl.calculate = calculate;

  // function calculate(attendee) {
  //   if ( attendee.status === 'confirmed') {
  //     ctrl.totalConfirmed += 1;
  //     if ( attendee.paymentMethod !== 'cash') {
  //       ctrl.totalBank += 1;
  //     } else {
  //       ctrl.totalCash += 1;
  //     }
  //   }
  // }

  function getList() {
    var attendees = EventService.getEventAttendees(ctrl.key).then(function (attendeeProfiles) {
      ctrl.profiles = attendeeProfiles;
    }, function (error) {
      console.log(error);
    });
  }

  function onInit() {
    ctrl.getList();
  }

  function confirmInscription(attendeeKey) {
    EventService.confirmInscription(ctrl.key, attendeeKey).then(function(){
      alert('Inscription Confirmed');
    }).catch(function(error){
      console.log(error);
      ctrl.getList();
    })
  }
}

angular
  .module('components.event')
  .controller('AttendeesListController', AttendeesListController);