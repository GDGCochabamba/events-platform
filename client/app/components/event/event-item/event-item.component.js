var sponsors = {
  bindings: {
  	  event: '<',
      fieldName: '@',
      titleField: '@'
  },
  templateUrl: 'event-item.html',
  controller: 'EventItemController'
}

angular
  .module('components.event')
  .component('eventItem', sponsors);


require('./event-item.controller');