(function ()
{
    'use strict';

    angular.module('data')
    .service('MenuDataService', MenuDataService)
    .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com/");

    MenuDataService.$inject = ['$http', 'ApiBasePath'];
    function MenuDataService($http, ApiBasePath)
    {
        var service = this;

        var items = [];

        service.getAllCategories = function ()
        {
            if (items.length === 0)
            {
                items = $http
                ({
                    method: 'GET',
                    url: ApiBasePath + 'categories.json'
                });
            }

            return items;
        };

        service.getItemsForCategory = function (categoryShortName)
        {
            return $http
            ({
                method: 'GET',
                url: ApiBasePath + 'menu_items.json?category=' + categoryShortName
            });
        };
    }
})();
