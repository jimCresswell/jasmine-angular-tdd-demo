describe('expensesDataService', function() {

    beforeEach(module('app'));

    it('Should return three expense items', inject(function(expensesDataService) {
        expect(expensesDataService.getExpenses().length).toBe(3);
    }));

    it('Should return a taxi expense', inject(function(expensesDataService) {
       var expenseItems = expensesDataService.getExpenses();

       // Argh, magic values... Mocks to come later.
       var testExpenseItem = new ExpenseItem('Taxi', 'blah', 89.95);
       expect(expenseItems).toContain(testExpenseItem);
    }));

});