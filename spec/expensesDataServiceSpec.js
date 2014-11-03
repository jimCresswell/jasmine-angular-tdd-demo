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

    describe('reasonable expenses', function() {
        var taxi;
        var dinner;

        beforeEach(function() {
            jasmine.addMatchers(customMatchers);
        });

        beforeEach(function() {
            taxi = new ExpenseItem('Taxi', 'blah', 89.95);
            dinner = new ExpenseItem('dinner', 'dinnnner', 189.50);
        });

        it('taxi should be a reasonable price', function() {
            expect(taxi).toBeAReasonableExpense();
        })

        it('dinner should not be a reasonable price', function() {
            expect(dinner).not.toBeAReasonableExpense();
        })
    })


});