angular
  .module('eventsPlatform', [
    'ngMaterial',
    'ui.router',
    'firebase',
    'templates',    
    'common',
    'components'
  ])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('altTheme')
    .primaryPalette('blue')
    .accentPalette('blue-grey') // specify primary color, all
                            // other color intentions will be inherited
                            // from default
});

require('./templates.js');

require('./root.component');

require('./common/common.module');
require('./components/components.module');
