import React from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import '../src/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes';
import history from './services/history';

import { store, persistor } from './store';


function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
        <Routes />
        <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
