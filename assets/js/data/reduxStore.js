import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { getTransactions } from './actions/transactionsActions';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

store.dispatch(getTransactions());

export default function configureStore(intialState = {}) {
  return store;
}