(function () 
{
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope) 
	{
		$scope.message = "";
		$scope.messageColor = "";
		$scope.lunchList = "";

		$scope.checkLunch = function () 
		{
			if ($scope.lunchList.length == 0)
			{
				$scope.message = 'Please enter data first';
				$scope.messageColor = 'red';
			}
			else
			{
				if ($scope.lunchList.split(',').length <= 3)
					$scope.message = 'Enjoy!';
				else
					$scope.message = 'Too much!';
				$scope.messageColor = 'green';
			}
		}
	};
})();
