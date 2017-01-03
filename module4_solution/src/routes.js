(function () {
'use strict';

    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  // Category list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/data/templates/categories.template.html',
    controller: 'CategoriesController as categories',
    resolve: 
    { 
        categories: ['MenuDataService', function (MenuDataService)
        {
            return MenuDataService.getAllCategories();
        }]
    }
  })

  // Category menu
  .state('categories.items', {
    url: '/category/{category}',
    templateUrl: 'src/data/templates/items.template.html',
    controller: 'ItemsController as items',
    resolve: 
    {
        items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService)
        {
            return MenuDataService.getItemsForCategory($stateParams.category);
        }]
    }
  });

}

})();
