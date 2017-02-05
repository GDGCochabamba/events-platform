function EventsService($firebaseArray) {
  this.getList = function() {
    return [
      {name:'Dummy Fest', description:'Just a dummy day.'},
      {name:'Example Day 2017', description:'Another example day.'}
    ];
  }
}

angular
  .module('components.events')
  .service('EventsService', EventsService);
