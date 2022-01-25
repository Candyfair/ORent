import { setModal } from '../redux/actions/modals';
import { REGISTER, resetNewUserFields } from '../redux/actions/userCreate';
import axios from 'axios';

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

            store.dispatch(setModal(false, 'none'));
            store.dispatch(resetNewUserFields()); // empty fields
          },
        )
        .catch(
          (error) => console.log('Error register: ', error),
        );
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default authMiddleware;
