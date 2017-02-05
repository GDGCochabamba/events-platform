function EventsService($firebaseArray) {
  this.getList = function() {
    return [{name:'asfd', description:'hola'}];
  }
}

angular
  .module('components.events')
  .service('EventsService', EventsService);
