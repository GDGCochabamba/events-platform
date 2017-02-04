angular
  .module('components', [
    'components.auth',
    'components.event'
  ]);

require('./auth/auth.module');
require('./event/event.module');