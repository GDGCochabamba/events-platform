angular
  .module('components', [
    'components.auth',
    'components.event',
    'components.user'
  ]);

require('./auth/auth.module');
require('./event/event.module');
require('./user/user.module');