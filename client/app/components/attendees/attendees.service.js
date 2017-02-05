function AttendeesService($firebaseArray) {
  this.getList = function() {
    return [{name:'John', lastname:'Doe'}, {name:'Mr.', lastname:'Mister'}];
  }
}

angular
  .module('components.attendees')
  .service('AttendeesService', AttendeesService);
