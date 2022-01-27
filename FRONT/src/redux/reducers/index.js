import { combineReducers } from 'redux';
import modalsReducer from './modals';
import userCurrentReducer from './userCurrent';
import userCreateReducer from './userCreate';
import displayOptionsReducer from './displayOptions';
import formErrorsReducer from './formErrors';
import propertyCreateReducer from './propertyCreate';

const rootReducer = combineReducers({
  modals: modalsReducer,
  userCurrent: userCurrentReducer,
  userCreate: userCreateReducer,
  displayOptions: displayOptionsReducer,
  formErrors: formErrorsReducer,
  propertyCreate: propertyCreateReducer,
});

export default rootReducer;
