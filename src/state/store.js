import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import reducers from './reducer/';
import middlewares from './middlewares/';


const composeEnhancers = composeWithDevTools({});

export default createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(...middlewares)
  )
);
