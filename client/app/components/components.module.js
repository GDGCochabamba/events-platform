angular
  .module('components', [
    'components.auth',
    'components.events',
    'components.attendees'
  ]);

require('./auth/auth.module');
require('./events/event.module');
require('./attendees/attendees.module');
