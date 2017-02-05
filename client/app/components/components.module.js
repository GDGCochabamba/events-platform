angular
  .module('components', [
    'components.auth',
    'components.events',
    'components.attendees',
    'components.event'
  ]);

require('./auth/auth.module');
require('./events/event.module');
require('./attendees/attendees.module');
require('./event/event.module');
