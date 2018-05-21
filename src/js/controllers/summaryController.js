angular.module('testApp').controller('summaryController', function (dataStore, $location) {
    var me = this;
    me.userData = dataStore.getUserData();
    me.rows = dataStore.getSummary();
    me.change = function () {
        dataStore.setUserData(null, null, null);
        $location.path('/main');
    }
});