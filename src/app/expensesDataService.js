(function(){
    'use strict';

    angular.module('app')
        .factory('expensesDataService', ['$http', expensesDataService]);   


    function expensesDataService($http) {
        var service = {
            getExpenses: getExpenses,
            persistExpenses: persistExpenses
        };

        return service;

        function getExpenses() {
            return [
                new ExpenseItem('Taxi', 'blah', 89.95),
                new ExpenseItem('Lunch', 'foods', 15.40),
                new ExpenseItem('Coffee', 'tree fitty', 3.50),
            ];
        }

        function persistExpenses(reportExpenses) {
            // do imaginary work

            var success = true;
            if (success) {
                reportExpenses();
            }
        }
    }
})();
