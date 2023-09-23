import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import appReducer from './redux/reducer.ts';
import 'normalize.css';
import './styles/globals.scss';
import App from './App.tsx'

const store = configureStore({
  reducer: appReducer
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
