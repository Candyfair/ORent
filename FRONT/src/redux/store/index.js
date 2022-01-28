import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers/index';
import authMiddleware from '../../middleware/authMiddleware';
import propertyMiddleware from '../../middleware/propertyMiddleware';

const initalState = {

};

const middlewares = [authMiddleware, propertyMiddleware];

const store = createStore(
  rootReducer, initalState, composeWithDevTools(applyMiddleware(...middlewares)),
);

export default store;

// // == Import : npm
// import { createStore, compose, applyMiddleware } from 'redux';

// // == Import : local
// import rootReducer from 'src/redux/reducers';
// import authMiddleware from '../../middleware/authMiddleware';

// const initalState = {

// };

// // == Enhancers
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const enhancers = composeEnhancers(
//   applyMiddleware(
//     authMiddleware,
//   ),
// );

// // == Store
// const store = createStore(
//   rootReducer,
//   initalState,
//   enhancers,
// );

// // == Export
// export default store;
