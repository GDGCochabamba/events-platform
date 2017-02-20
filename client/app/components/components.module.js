angular
  .module('components', [
    'components.auth',
    'components.event',
    'components.profile'
  ]);

require('./auth/auth.module');
require('./event/event.module');
require('./profile/profile.module');
