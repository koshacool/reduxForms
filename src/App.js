import React from 'react';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

import { PaymentPage } from './pages/';
import { store } from './state/';
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ReduxToastr
          timeOut={4000}
          newestOnTop
          position="top-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick
        />
        <PaymentPage />
      </div>
    </Provider>
  );
}

export default App;
