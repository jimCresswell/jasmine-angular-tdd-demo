describe("Expense objects", function() {
    it("Should be of type ExpenseItem", function() {
        var expenseItem = new ExpenseItem();
        var expense = new Expense(expenseItem);
        expect(expense.expenseItem).toBe(expenseItem);
    });
});