export const SET_LOADING = 'SET_LOADING';
export const setLoading = (value) => (
  {
    type: SET_LOADING,
    value,
  }
);

export const SET_MODE = 'SET_MODE';
export const setMode = (value) => (
  {
    type: SET_MODE,
    value,
  }
);

export const SHOW_PASSWORD = 'SHOW_PASSWORD';
export const showPassword = (value) => (
  {
    type: SHOW_PASSWORD,
    value,
  }
);

export const SET_REDIRECT_TO_TRUE = 'SET_REDIRECT_TO_TRUE';
export const setRedirectToTrue = () => ({
  type: SET_REDIRECT_TO_TRUE,
});

export const SET_REDIRECT_TO_FALSE = 'SET_REDIRECT_TO_FALSE';
export const setRedirectToFalse = () => ({
  type: SET_REDIRECT_TO_FALSE,
});

export const SET_SNACKBAR = 'SET_SNACKBAR';
export const setSnackbar = (value, message, status) => (
  {
    type: SET_SNACKBAR,
    value,
    status,
    message,
  }
);
