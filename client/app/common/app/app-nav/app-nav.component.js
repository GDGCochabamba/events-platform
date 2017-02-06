var appNav = {
  templateUrl: 'app-nav.html',
  controller: 'AppNavController'
}

angular
  .module('common.app')
  .component('appNav', appNav);

require('./app-nav.controller');