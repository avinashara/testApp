describe('myservice', function () {
    var myserv, $controller, rows;
    beforeEach(function () {
        module('testApp');
        inject(function (_dataStore_) {
            myserv = _dataStore_;
        });
    });
    beforeEach(angular.mock.inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it('rowDataCheck', function () {
        rows = myserv.getData();
        expect(rows.length).toEqual(8);
    });
    it('checkReturnedRow', function () {
        var $scope = {};
        var ctrl = $controller('mainController', {
            $scope: $scope
        });
        $scope.skills = 'angular js';
        $scope.source = "linkedin";
        $scope.city= 'bangalore';
        ctrl.submit();
        expect(localStorage.length).toEqual(3);
    });
});