angular.module('poc')
    .directive('confirmPopup', ['$document', '$http', '$compile', 'dialog', function ($document, $http, $compile, dialog) {
        var template = '<div class="{{options.modalClass}}">' +
                           '<h1>{{options.header}}</h1>' +
                           '<p>{{options.content}}</p>' +
                           '<button ng-click="cancel();">{{options.cancelButtonText}}</button>' +
                           '<button ng-click="confirm();">{{options.confirmButtonText}}</button>' +
                        '</div>';
        return {
            restrict: 'AE',
            scope: {
                isPopupOpened: "=",
                options: "=",
            },
            link: function ($scope, element, attrs) {
                $scope.options.confirmButtonText = $scope.options.confirmButtonText || "Ok";
                $scope.options.cancelButtonText = $scope.options.cancelButtonText || "Cancel";
                $scope.options.header = $scope.options.header || "Dialog";
                $scope.options.modalClass = $scope.options.modalClass || "modal";
                $scope.confirm = function() {
                    $scope.isPopupOpened = !$scope.isPopupOpened;
                    if ($scope.options.confirm) $scope.options.confirm();
                };
                $scope.cancel = function() {
                    $scope.isPopupOpened = !$scope.isPopupOpened;
                    if ($scope.options.cancel) $scope.options.cancel();
                };

                $scope.$watch('isPopupOpened', function (newVal) {
                    if (!!newVal) {
                        var html = $compile(template)($scope);
                        dialog.modal(html);
                    } else {
                        dialog.hide();
                    }
                });
            }
        };
    }]);
