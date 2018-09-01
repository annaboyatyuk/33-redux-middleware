import {createStore, combineReducers, applyMiddleware} from 'redux';
import categoryState from '../reducer/category';
import expenseState from '../reducer/expense';
import logger from '../reducer/redux-logger';
import timeoutScheduler from '../reducer/timeoutScheduler';
import zeroValidation from '../reducer/validation.js';


const rootReducer = combineReducers({
  categoryState,
  expenseState,
});

export default () => createStore(rootReducer, applyMiddleware(timeoutScheduler, logger, zeroValidation));

// export default () => createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

