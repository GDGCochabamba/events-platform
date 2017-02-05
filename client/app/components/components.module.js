angular
  .module('components', [
    'components.auth',
    'components.event',
    'components.attendees',
    'components.user'
  ]);

require('./auth/auth.module');
require('./attendees/attendees.module');
require('./event/event.module');
require('./user/user.module');

