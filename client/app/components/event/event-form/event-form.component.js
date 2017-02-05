var eventForm = {
  bindings: {
      event: '<',
      submitText: '@',
      onAction: '&'
  },
  templateUrl: 'event-form.html',
  controller: 'EventFormController'
}

angular
  .module('components.event')
  .component('eventForm', eventForm);


require('./event-form.controller');