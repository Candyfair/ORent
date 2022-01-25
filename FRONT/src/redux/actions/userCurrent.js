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
