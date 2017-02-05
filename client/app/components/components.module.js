angular
  .module('components', [
    'components.auth',
    'components.events'
  ]);

require('./auth/auth.module');
require('./events/event.module');
