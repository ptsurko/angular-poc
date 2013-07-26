angular.module('TestApp')
    .controller('TestController', function ($scope) {
        $scope.popup = false;
        $scope.popup2 = false;

        $scope.confirmOptions = {
            header: "Modal Dialog",
            content: "This is a modal window."
        };

        $scope.togglePopup = function () {
            $scope.popup = !$scope.popup;
        };
        
        $scope.togglePopup2 = function () {
            $scope.popup2 = !$scope.popup2;
        };
    });