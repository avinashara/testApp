angular.module('testApp').directive('testHeader', function ($location, dataStore) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/views/header.html',
        scope: {},
        link: function (scope, element) {
            scope.logout=function(){
                alert("Logout functionality implementation is in progress!!");
            }
        }
    };
});