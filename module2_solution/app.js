(function () 
{
	'use strict';

	angular.module('ShoppingListApp', [])
	.controller('ShoppingList1Controller', ShoppingList1Controller)
	.controller('ShoppingList2Controller', ShoppingList2Controller)
	.provider('ShoppingListService', ShoppingListServiceProvider)
	.config(Config);

	Config.$inject = ['ShoppingListServiceProvider'];
	function Config(ShoppingListServiceProvider) 
	{
	}

	ShoppingList1Controller.$inject = ['ShoppingListService'];
	function ShoppingList1Controller(ShoppingListService) 
	{
		var viewModel = this;

		viewModel.items = ShoppingListService.getItemsToBuy();

		viewModel.buyItem = function (index) 
		{
			ShoppingListService.buyItem(index);
		};
	}

	ShoppingList2Controller.$inject = ['ShoppingListService'];
	function ShoppingList2Controller(ShoppingListService) 
	{
		var viewModel = this;

		viewModel.items = ShoppingListService.getItemsBought();
	}
	
	// If not specified, maxItems assumed unlimited
	function ShoppingListService(prefill) 
	{
		var service = this;

		var itemsToBuy = prefill;
		var itemsBought = [];

		service.buyItem = function (index) 
		{
			itemsBought.push(itemsToBuy[index]);
			itemsToBuy.splice(index, 1);
		};

		service.getItemsToBuy = function () 
		{
			return itemsToBuy;
		};
		
		service.getItemsBought = function ()
		{
			return itemsBought;
		};
	}


	function ShoppingListServiceProvider() 
	{
		var provider = this;

		provider.defaults = 
		{
			prefill: 
			[
				{name: "apples", quantity: 5},
				{name: "bananas", quantity: 3},
				{name: "cucumbers", quantity: 2},
				{name: "doritos", quantity: 5},
				{name: "eggs", quantity: 6}
			]
		};

		provider.$get = function () 
		{
			var shoppingList = new ShoppingListService(provider.defaults.prefill);
			return shoppingList;
		};
	}
})();
