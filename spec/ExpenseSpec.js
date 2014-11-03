describe("Expense objects", function() {
    it("Should be of type ExpenseItem", function() {
        var expenseItem = new ExpenseItem(0);
        var expense = new Expense(expenseItem);
        expect(expense.expenseItem).toBe(expenseItem);
    });

    it("Should have the correct expense amount", function() {
        var expenseItem = new ExpenseItem(100);
        var expense = new Expense(expenseItem);
        expect(expense.expenseItem.amount).toEqual(100);
    });
});