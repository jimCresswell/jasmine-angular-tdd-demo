(function(){
    'use strict';

    angular.module('app')
        .factory('expensesDataService', ['$http', expensesDataService]);   


    function expensesDataService($http) {
        var service = {
            getExpenses: getExpenses
        };

        return service;

        function getExpenses() {
            return [
                {title: 'Taxi', description: 'blah', amount: 89.95},
                {title: 'Lunch', description: 'foods', amount: 15.40},
                {title: 'Coffee', description: 'tree fitty', amount: 3.50},
            ];
        }
    }
})();