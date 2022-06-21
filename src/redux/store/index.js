import {createStore, applyMiddleware} from 'redux';
import {allreducer} from '../reducer/allreducer';
import thunk from 'redux-thunk';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const allMiddlewares = applyMiddleware(thunk);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, allreducer);

export const store = createStore(persistedReducer, {}, allMiddlewares);
export const persistor = persistStore(store);
