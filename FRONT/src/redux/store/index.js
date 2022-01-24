// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import rootReducer from 'src/redux/reducers';
// import logMiddleware from '../../middleware/logMiddleware';

const initalState = {

};

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    // ...logMiddleware,
  ),
);

// == Store
const store = createStore(
  rootReducer,
  initalState,
  enhancers,
);

// == Export
export default store;
