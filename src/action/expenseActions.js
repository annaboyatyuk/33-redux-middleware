import uuid from 'uuid/v4';


export const expenseCreate = expense => {
  expense.id = uuid();
  expense.timeStamp = new Date();
  expense.editing = false;
  return {
    type: 'EXPENSE_CREATE',
    payload: expense,
    meta: {delay: 1000},
  };
};

export const expenseUpdate = expense => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
});

export const expenseDelete = expense => ({
  type: 'EXPENSE_DELETE',
  payload: expense,
});


