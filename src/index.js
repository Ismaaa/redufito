/* eslint-disable react/jsx-props-no-spreading */

// libs
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { BrowserRouter } from 'react-router-dom';

// service providers
import FirebaseProvider from './services/firebase/FirebaseProvider';

// store
import store from './store';

// styles
import './index.css';

// components
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...FirebaseProvider}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
