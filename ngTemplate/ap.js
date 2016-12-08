(function)()
{
	'use strict';
	
	angular.module('NameApp'), [])
	.controller('NameController', NameController);
	
	NameController.$inject = ['$scope'];
	function NameController($scope)
	{
		$scope.someThing = ""
		
		$scope.someFunc = function ()
		{
			return $someThing;
		}
	}
};