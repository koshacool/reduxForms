import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import Logger from 'redux-logger';
// import logo from './logo.svg';
import './App.css';
import { PaymentPage } from './pages/';

const initState = {
  isLoggedIn: false,
  isChecked: false,
  onLoginRedirect: false,
};
export const AUTH_LOGGED_IN_SUCCESS = '[AUTH] - Logged in success';
export const AUTH_LOGGED_IN_FAIL = '[AUTH] - Logged in fail';
const authReducer = (state = initState, { type, payload = { onLoginRedirect: false } }) => {
  switch (type) {
    case AUTH_LOGGED_IN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isChecked: true,
        onLoginRedirect: payload.onLoginRedirect,
      };

    case AUTH_LOGGED_IN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        isChecked: true,
      };

    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    auth: authReducer,
    form: formReducer,
  }),
  applyMiddleware(Logger)
);


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PaymentPage />
      </div>
    </Provider>
  );
}

export default App;
