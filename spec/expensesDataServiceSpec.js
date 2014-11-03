describe('expensesDataService', function() {

    beforeEach(module('app'));

    it('Should return three expense items', inject(function(expensesDataService) {
        expect(expensesDataService.getExpenses().length).toBe(3);
    }));

});