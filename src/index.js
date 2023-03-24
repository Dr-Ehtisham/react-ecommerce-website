import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { store, persistor } from './redux/store';
import { PersistGate } from "redux-persist/integration/react";
import { app } from './firebase.config';
import { HashRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} app={app}>
    <PersistGate loading={'loading'} persistor={persistor}>
    {/* <HashRouter> */}
    <App />
    {/* </HashRouter> */}
    </PersistGate>
    </Provider>
  </React.StrictMode>
);


