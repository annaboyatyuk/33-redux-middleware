import uuid from 'uuid/v4';

export const categoryCreate = category => {
  category.id = uuid();
  category.timeStamp = new Date();
  category.editing = false;
  return {
    type: 'CATEGORY_CREATE',
    payload: category,
  };
};

export const categoryUpdate = category => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
});

export const categoryDestroy = category => ({
  type: 'CATEGORY_DESTROY',
  payload: category,
});

export const categoryReset = () => ({
  type: 'CATEGORY_RESET',
});

