angular
  .module('eventsPlatform', [
    'ui.router',
    'firebase',
    'templates',
    'common',
    'components'
  ]);

require('./templates.js');

require('./root.component');

require('./common/common.module');
require('./components/components.module');
