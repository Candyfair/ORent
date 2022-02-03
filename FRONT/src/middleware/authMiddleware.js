import { setSnackbar } from '../redux/actions/displayOptions';
import { setModal } from '../redux/actions/modals';
import { REGISTER, resetNewUserFields } from '../redux/actions/userCreate';
import {
  connectUser, disconnectUser, LOGIN, LOGOUT, REFRESH_TOKEN, resetCurrentUserFields,
} from '../redux/actions/userCurrent';

import api from './api';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case REGISTER: {
      const {
        firstname, lastname, username, email, password,
      } = store.getState().userCreate;

      console.log('Je suis bien dans Register');

      api.post(
        '/register',
        {
          username, firstname, lastname, email, password,
        },
      )
        .then(
          (response) => {
            console.log('Register réussi : ', response);

            localStorage.setItem('userRefreshToken', response.data.refreshToken); // store refreshToken sent by server in localStorage

            api.defaults.headers.common.Authorization = `Bearer ${response.data.accessToken}`; // store accessToken in header

            store.dispatch(setModal(false, 'none'));
            store.dispatch(resetNewUserFields()); // empty fields
            store.dispatch(connectUser(response.data.user));
            store.dispatch(setSnackbar(true, 'Your account was successfully created ! Welcome !','success'))
          },
        )
        .catch(
          (error) => {
            console.log('Error register: ', error);
            store.dispatch(setSnackbar(true, `The email or the username may already exist, try to pick another one`,'error'))
          }
        );
      next(action);
      break;
    }

    case LOGIN: {
      const { email, password } = store.getState().userCurrent;

      api.post('/login', {
        email,
        password,
      })
        .then(
          (response) => {
            console.log('Login réussi: ', response);

            localStorage.setItem('userRefreshToken', response.data.refreshToken); // store refreshToken sent by server in localStorage

            api.defaults.headers.common.Authorization = `Bearer ${response.data.accessToken}`; // store accessToken in header

            store.dispatch(setModal(false, 'none'));
            store.dispatch(resetCurrentUserFields()); // empty fields
            store.dispatch(connectUser(response.data.user));
            store.dispatch(setSnackbar(true, 'Connection success ! Welcome !','success'))
          },
        )
        .catch(
          (error) => {
            console.log('Error login: ', error);
            store.dispatch(setSnackbar(true, `The email or password is incorrect`,'error'))
          }
        );

      next(action);
      break;
    }

    case REFRESH_TOKEN: {
      const refreshToken = localStorage.getItem('userRefreshToken'); // Get the key

      api.defaults.headers.common.Authorization = `Bearer ${refreshToken}`; // Store refreshToken instead of accessToken in the header
      console.log('Je suis sur la route Refresh token et mon token est :', refreshToken);

      api.post('/refresh-token')
        .then((response) => {
          console.log('Refresh token réussi et la response est : ', response);

          localStorage.setItem('userRefreshToken', response.data.refreshToken); // store refreshToken sent by server in localStorage

          api.defaults.headers.common.Authorization = `Bearer ${response.data.accessToken}`; // store new accessToken in header

          store.dispatch(connectUser(response.data.user)); // Connects the user
        })
        .catch(
          (error) => {
            console.log('Error refresh token: ', error);
            store.dispatch(disconnectUser());
          },
        );

      next(action);
      break;
    }

    case LOGOUT: {
      localStorage.removeItem('userRefreshToken');

      store.dispatch(disconnectUser());
      store.dispatch(setSnackbar(true, 'You are disconnected. We hope to see you soon, take care !','info'))
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default authMiddleware;
