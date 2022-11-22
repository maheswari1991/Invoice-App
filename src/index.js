import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import * as serviceWorker from "./serviceWorker";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducer/RootReducer';
import App from './App';
// import Dashboard from './component/Dashboard/Dashboard';
// import Tax from './component/Tax/Tax';
// import Main from './component/Main/Main';
import { Provider as AlertProvider, positions } from 'react-alert'
import AlertTemplate from './AlertTemplate';
// import PrivateRoutes from './component/PrivateRoutes/PrivateRoutes.js';
import createHistory from 'history/createBrowserHistory';
import configureStore from "./configureStore.js";
import { PersistGate } from "redux-persist/integration/react";

// const store = createStore(rootReducer);
const { store, persistor } = configureStore();

const history = createHistory()



// const options = {
//   timeout: 5000,
//   position: positions.TOP_RIGHT,
//   containerStyle: { color: 'white' }	
// }

ReactDOM.render(
  <AlertProvider template={AlertTemplate}  >
  <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>

  <React.StrictMode>
    <Router history={history}>
  <Switch>
      <Route exact path="/" component={App} />

      {/* <Route path="/Main" component={PrivateRoutes} /> */}

     
    </Switch>
    {/* <App /> */}
    </Router>
  </React.StrictMode>
  </PersistGate>
  </Provider>
  </AlertProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
