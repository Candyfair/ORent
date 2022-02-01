// changeCurrentUserField, login, setLogged
export const SET_LOGGED = 'SET_LOGGED';
export const setLogged = (value) => (
  {
    type: SET_LOGGED,
    value,
  }
);

export const CHANGE_CURRENT_USER_FIELD = 'CHANGE_CURRENT_USER_FIELD';
export const changeCurrentUserField = (value, fieldName) => (
  {
    type: CHANGE_CURRENT_USER_FIELD,
    value,
    fieldName,
  }
);

export const LOGIN = 'LOGIN';
export const login = () => ({
  type: LOGIN,
});

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
  type: LOGOUT,
});

export const CONNECT_USER = 'CONNECT_USER';
export const connectUser = (data) => (
  {
    type: CONNECT_USER,
    data,
  }
);

export const DISCONNECT_USER = 'DISCONNECT_USER';
export const disconnectUser = () => ({
  type: DISCONNECT_USER,
});

// Empty fields
export const RESET_CURRENT_USER_FIELDS = 'RESET_CURRENT_USER_FIELDS';
export const resetCurrentUserFields = () => (
  {
    type: RESET_CURRENT_USER_FIELDS,
  }
);

export const REFRESH_TOKEN = 'REFRESH_TOKEN';
export const refreshToken = () => (
  {
    type: REFRESH_TOKEN,
  }
);

export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';
export const deleteAccount = () => (
  {
    type: DELETE_ACCOUNT,
  }
);

export const UPDATE_ACCOUNT = 'UPDATE_ACCOUNT';
export const updateAccount = () => (
  {
    type: UPDATE_ACCOUNT,
  }
);