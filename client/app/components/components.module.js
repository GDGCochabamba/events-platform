angular
  .module('components', [
    'components.auth',
    'components.event',
    'components.attendees',
    'components.profile'
  ]);

require('./auth/auth.module');
require('./attendees/attendees.module');
require('./event/event.module');
require('./profile/profile.module');
