import logger from 'redux-logger';
import thunk from 'redux-thunk';
import auth from './auth';

export const isProductionMode = () => process.env.NODE_ENV === 'production';

const middlewares = [
  ...auth,
  thunk,
];

if (!isProductionMode()) {
  middlewares.push(logger);
}

export default middlewares;

