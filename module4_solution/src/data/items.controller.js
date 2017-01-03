(function ()
{
    'use strict';

    angular.module('data')
    .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['items'];
    function ItemsController(menuItems)
    {
        var items = this;

        items.menuitems = menuItems.data.menu_items;
    }
})();
