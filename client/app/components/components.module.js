angular
  .module('components', [
    'components.auth',
    'components.attendees',
    'components.event'
  ]);

require('./auth/auth.module');
require('./attendees/attendees.module');
require('./event/event.module');
