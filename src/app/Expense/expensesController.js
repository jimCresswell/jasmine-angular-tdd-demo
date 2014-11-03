(function(){
    'use strict';

    angular.module('app').controller('expensesController', [expensesController]);

    function expensesController() {

        var vm = this;

        vm.activate = activate;
        vm.expenseItems = [];

        activate();

        function activate(){
            return vm.expenseItems = [
                {title: 'Taxi', description: 'blah', amount: 89.95},
                {title: 'Lunch', description: 'foods', amount: 15.40},
                {title: 'Coffee', description: 'tree fitty', amount: 3.50},
            ];
        }
    };
})();