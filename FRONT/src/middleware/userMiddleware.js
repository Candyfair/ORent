import { setLoading } from '../redux/actions/displayOptions';
import { setModal } from '../redux/actions/modals';
import { DELETE_ACCOUNT, logout, UPDATE_ACCOUNT } from '../redux/actions/userCurrent';
import { FETCH_USER_INFOS, saveUpdateUserInfos, saveUserInfos } from '../redux/actions/userUpdate';

import api from './api';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USER_INFOS: {
        console.log(`Je suis bien dans le user middleware sur la route GET /users/me`);
        store.dispatch(setLoading(true));
        api.get(
          `/users/me`,
        )
          .then(
            (response) => {
              console.log('Fetch user infos réussi : ', response);
              store.dispatch(saveUserInfos(response.data));
              store.dispatch(setLoading(false));
            },
          )
          .catch(
            (error) => {
              console.log('Error Fetch user infos: ', error);
              store.dispatch(setLoading(false));
            },
          );
        next(action);
        break;
      }
    
    case UPDATE_ACCOUNT: {
      console.log(`Je suis bien dans le user middleware sur la route PATCH /users/me`);

      const { username, firstname, lastname, email, password, newPassword, changePassword } = store.getState().userUpdate;
      
      let newUserInfos;

      if (changePassword) {
        newUserInfos = {
          username, firstname, lastname, email, password, newPassword
        }
      } else {
        newUserInfos = {
          username, firstname, lastname, email, password
        }
      }

      store.dispatch(setLoading(true));

      api.patch(
        `/users/me`,
        newUserInfos
      )
        .then(
          (response) => {
            console.log('Update user infos réussi : ', response);
            store.dispatch(saveUpdateUserInfos(response.data));
            store.dispatch(setLoading(false));
          },
        )
        .catch(
          (error) => {
            console.log('Error Fetch user infos: ', error);
            store.dispatch(setLoading(false));
          },
        );
      next(action);
      break;
    }

    case DELETE_ACCOUNT: {
      console.log(`Je suis bien dans le user middleware sur la route DELETE /users/me`);
      store.dispatch(setLoading(true));
      api.delete(
        `/users/me`,
      )
        .then(
          (response) => {
            console.log('Compte supprimé : ', response);
            store.dispatch(setLoading(false));
            store.dispatch(setModal(false, ''));
            store.dispatch(logout());
          },
        )
        .catch(
          (error) => {
            console.log('Error Fetch user infos: ', error);
            store.dispatch(setLoading(false));
            store.dispatch(setModal(false, ''));
          },
        );
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default userMiddleware;
