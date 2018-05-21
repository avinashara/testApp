angular.module('testApp').controller('mainController', function ($location, dataStore) {
    var me = this;
    me.submit = function () {
        dataStore.setUserData(me.skills, me.source, me.city);
        $location.path('/summary');
    }
});