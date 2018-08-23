import * as actions from '../../../action/expenseActions';

import reducerExpense from '../../../reducer/expense';

describe('reducerExpense', () => {

  it('state should start as empty array', () => {
    const newState = reducerExpense([], 'aaaaaaa');
    expect(newState).toEqual([]);
  });

  it('should add expense', () => {
    let created = actions.expenseCreate({name: 'coffee'});

    let newState = reducerExpense([], created);

    expect(newState.length).toBe(1);

  });

  it('should update a note', () => {
    let created = actions.expenseCreate({
      name: 'name',
    });
    let newState = reducerExpense([], created);

    expect(newState.length).toBe(1);

    let updated = actions.expenseUpdate({
      id: newState[0].id,
      name: 'not name',
    });
    let updatedState = reducerExpense(newState, updated);

    expect(updatedState[0].name).toBe('not name');
  });


  it('should delete a expense', () => {
    let created = actions.expenseCreate({
      name: 'name',
    });
    let newState = reducerExpense([], created);

    expect(newState.length).toBe(1);

    let removed = actions.expenseDelete({
      id: newState[0].id,
    });

    let removedState = reducerExpense(newState, removed);

    expect(removedState.length).toBe(0);
  });

});