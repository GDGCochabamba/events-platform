function EventItemController($log, EventService) {
  var ctrl = this;
  ctrl.$onInit  = onInit;
  ctrl.add = add;
  ctrl.save = save;
  ctrl.remove = remove;

  function onInit() {

  }

  function add(newItem) {
  	var item = {	name: ctrl.newItem };

    if(ctrl.event[ctrl.fieldName] == undefined)
      ctrl.event[ctrl.fieldName] = [];

    ctrl.event[ctrl.fieldName].push(item);
    ctrl.newItem = "";
  }
  
  function remove(indexItem) {
    ctrl.event[ctrl.fieldName].splice(indexItem,1);
  }

  function save() {
      EventService.update(ctrl.event).then(function(ref){
        $log.info('[ItemController]', 'Update of ' + ctrl.fieldName + ' was successful');
      });
  }
  
}

angular
  .module('components.event')
  .controller('EventItemController', EventItemController);