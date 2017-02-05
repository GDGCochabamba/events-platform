angular.module('components.event', [
    'ui.router'
]);

require('./event.service');
require('./add-event/add-event.component');
require('./edit-event/edit-event.component');
require('./event-form/event-form.component');