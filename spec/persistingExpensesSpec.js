'use strict';

describe('persisting expenses', function() {

    beforeEach(module('app'));

    describe('spy call backs', function() {
        it('should call back when persisted', inject(function(expensesDataService) {
            var spyCallback = jasmine.createSpy('callbackSpy');
            expensesDataService.persistExpenses(spyCallback);
            expect(spyCallback).toHaveBeenCalled();
        }));
    });

    describe('spy on property', function() {
        it('should spy on persistExpenses', inject(function(expensesDataService) {
            var spy = spyOn(expensesDataService, 'persistExpenses');
            expensesDataService.persistExpenses();
            expect(spy).toHaveBeenCalled();
        }));

        it('should spy on persistExpenses and fake a reply', inject(function(expensesDataService) {
            var spy = spyOn(expensesDataService, 'persistExpenses').and.callFake(function() {
                return 3;
            });
            var numRecordsPersisted = expensesDataService.persistExpenses();
            expect(numRecordsPersisted).toEqual(3);
        }));
    });
});