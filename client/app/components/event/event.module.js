angular.module('components.event', [
  'ui.router'
]);

require('./event.service');

require('./event.component');

require('./list-event/list-event.component');
require('./add-event/add-event.component');
require('./edit-event/edit-event.component');
require('./event-form/event-form.component');