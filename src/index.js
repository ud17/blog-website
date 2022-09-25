import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* wrapping the App Component inside of Provider means every single component of App will have
      access to the store variable */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
