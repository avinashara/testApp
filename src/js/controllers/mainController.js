angular.module('testApp').controller('mainController', function ($location, dataStore) {
    var me = this;
    me.skillArray = dataStore.getSkills();
    me.sourceArray = dataStore.getSource();
    me.cityArray = dataStore.getCity();
    me.tags = [];
    me.submit = function () {
        dataStore.setUserData(me.skills, me.source, me.city);
        $location.path('/summary');
    }
});