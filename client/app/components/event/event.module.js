angular.module('components.event', [
    'ui.router'
]);

require('./event.service');
require('./add-event/add-event.component');
require('./list-event/list-event.component');
require('./attendees/list-attendees/list-attendees.component');