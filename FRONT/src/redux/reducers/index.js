import { combineReducers } from 'redux';
import modalsReducer from './modals';
import userCurrentReducer from './userCurrent';
import userCreateReducer from './userCreate';
import userUpdateReducer from './userUpdate';
import displayOptionsReducer from './displayOptions';
import formErrorsReducer from './formErrors';
import propertyCurrentReducer from './propertyCurrent';
import propertyCreateReducer from './propertyCreate';

const rootReducer = combineReducers({
  modals: modalsReducer,
  userCurrent: userCurrentReducer,
  userCreate: userCreateReducer,
  userUpdate: userUpdateReducer,
  displayOptions: displayOptionsReducer,
  formErrors: formErrorsReducer,
  propertyCurrent: propertyCurrentReducer,
  propertyCreate: propertyCreateReducer,
});

export default rootReducer;
