var app = {
  templateUrl: 'app.html'
}

angular
  .module('common.app')
  .component('app', app)
  .config(function($stateProvider) {
    $stateProvider
      .state('app', {
        url: '/',
        component: 'app',
        data: {
          requiredAuth: true
        },
        redirectTo: 'event.eventList',
      });
  });