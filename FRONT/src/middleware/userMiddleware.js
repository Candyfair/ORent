import { setLoading } from '../redux/actions/displayOptions';
import { FETCH_USER_INFOS, saveUserInfos } from '../redux/actions/userUpdate';

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
              console.log('Fetch property details réussi : ', response);
              store.dispatch(saveUserInfos(response.data));
              store.dispatch(setLoading(false));
            },
          )
          .catch(
            (error) => {
              console.log('Error Fetch property details: ', error);
              store.dispatch(setLoading(false));
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
