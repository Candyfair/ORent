import { combineReducers } from 'redux';
import modalsReducer from './modals';
import userCurrentReducer from './userCurrent';
import displayOptionsReducer from './displayOptions';
import formErrorsReducer from './formErrors';

const rootReducer = combineReducers({
  modals: modalsReducer,
  userCurrent: userCurrentReducer,
  displayOptions: displayOptionsReducer,
  formErrors: formErrorsReducer,
});

export default rootReducer;
