import { createStore, applyMiddleware, compose } from 'redux'
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

import rootReducer from './reducer/RootReducer';

const persistConfig ={
    key: 'root',
    storage,
    stateReconciler: hardSet,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default () => {
//     let store = createStore(persistedReducer);
//     let persistor = persistStore(store);
//     return(store , persistor)
// }

export default () => {
    let store = createStore(persistedReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    
    )
    let persistor = persistStore(store)
    return { store, persistor }
  }