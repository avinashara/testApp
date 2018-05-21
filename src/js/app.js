//Initialise the application with required dependencies
var app = angular.module('testApp', ['ngRoute', 'ngTagsInput']);
//Config for application route
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/main.html'
        , controller: 'mainController'
        , controllerAs: 'maniCtrl'
    }).when('/summary', {
        templateUrl: 'views/summary.html'
        , controller: 'summaryController'
        , controllerAs: 'smCtrl'
    }).otherwise({
        redirectTo: '/'
    });
}]);