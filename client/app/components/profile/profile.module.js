angular.module('components.profile', [
    'ui.router'
]);

require('./profile.service');

require('./profile.component');

require('./list-profile/list-profile.component');
require('./add-profile/add-profile.component');
require('./view-profile/view-profile.component');
require('./profile-form/profile-form.component');