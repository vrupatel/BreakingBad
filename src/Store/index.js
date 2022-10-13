import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore} from 'redux-persist';
import rootSaga from './Sagas';
import {rootReducer} from './Reducers';

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
const persistor = persistStore(store);
sagaMiddleWare.run(rootSaga);

export {store, persistor};
