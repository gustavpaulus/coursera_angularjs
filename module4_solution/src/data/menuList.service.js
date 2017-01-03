(function ()
{
    'use strict';

    angular.module('MenuApp')
    .service('MenuListService', MenuListService)
    .constant('ApiBasePath', ""); //http://davids-restaurant.herokuapp.com/

    MenuListService.$inject = ['$http', 'ApiBasePath'];
    function MenuListService($http, ApiBasePath)
    {
        var service = this;

        var items = [];

        service.getItems = function ()
        {
            if (items.length === 0)
            {
                items = $http
                ({
                    method: 'GET',
                    url: ApiBasePath + 'menu_items.json'
                });
            }

            return items;
        };
    }
})();
