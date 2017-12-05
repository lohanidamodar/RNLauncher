import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import RootReducer from './RootReducers';

const config = {
  key: 'passportNepal',
  storage,
};

const reducer = persistReducer(config, RootReducer);
const middleware = applyMiddleware(thunk);

export default (data) => {
  const store = createStore(reducer, data, middleware);
  const persistor = persistStore(store);
  return { persistor, store };
};
