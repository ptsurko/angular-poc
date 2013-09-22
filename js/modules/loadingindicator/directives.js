
angular.module('poc')
	.directive('loadingIndicator', ['$timeout', function($timeout) {					
		return {
			link: function($scope, $element, $attributes, $controller) {
				var loadingIndicator = angular.element("<div class=\"loading-indicator\"><div class=\"spinner\"></div></div>"),
				watching = false;

				var unregister = $scope.$watch($attributes.loadingIndicator, function(newVal, oldVal) {
					if(newVal === true && !watching) {
						$element.css("position", "relative");
						$element.append(loadingIndicator);
					} else if(newVal === false && watching) {
						loadingIndicator.remove();
					}
					watching = newVal;
				});
			}
		}
	}]);