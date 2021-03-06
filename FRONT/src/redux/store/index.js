import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers/index';
import authMiddleware from '../../middleware/authMiddleware';
import propertyMiddleware from '../../middleware/propertyMiddleware';
import propertyImageMiddleware from '../../middleware/propertyImageMiddleware';
import userMiddleware from '../../middleware/userMiddleware';
import vacancyMiddleware from '../../middleware/vacancyMiddleware';
import bookingMiddleware from '../../middleware/bookingMiddleware';

const initalState = {

};

const middlewares = [
  authMiddleware,
  propertyMiddleware,
  propertyImageMiddleware,
  userMiddleware,
  vacancyMiddleware,
  bookingMiddleware,
];

const store = createStore(
  rootReducer, initalState, composeWithDevTools(applyMiddleware(...middlewares)),
);

export default store;
