import { combineReducers } from 'redux';
import modalsReducer from './modals';
import userCurrentReducer from './userCurrent';
import userCreateReducer from './userCreate';
import displayOptionsReducer from './displayOptions';
import formErrorsReducer from './formErrors';
<<<<<<< HEAD
import propertyCurrentReducer from './propertyCurrent';
=======
import propertyCreateReducer from './propertyCreate';
>>>>>>> 9c7b1a529dd2a5ac968843612e5793bd0af40777

const rootReducer = combineReducers({
  modals: modalsReducer,
  userCurrent: userCurrentReducer,
  userCreate: userCreateReducer,
  displayOptions: displayOptionsReducer,
  formErrors: formErrorsReducer,
<<<<<<< HEAD
  propertyCurrent: propertyCurrentReducer,
=======
  propertyCreate: propertyCreateReducer,
>>>>>>> 9c7b1a529dd2a5ac968843612e5793bd0af40777
});

export default rootReducer;
