describe("Expense objects", function() {

    var expenseItem, expense;

    beforeEach(function() {
        expenseItem = new ExpenseItem(100);
        expense = new Expense(expenseItem);
    });

    it("Should be of type ExpenseItem", function() {
        expect(expense.expenseItem).toBe(expenseItem);
    });

    it("Should have the correct expense amount", function() {
        expect(expense.expenseItem.amount).toEqual(100);
    });
});