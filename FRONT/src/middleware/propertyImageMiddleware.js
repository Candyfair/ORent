import { setLoading } from '../redux/actions/displayOptions';
import { ADD_PROPERTY_IMAGE, changeNewPropertyField, changeNewPropertyImages, UPLOAD_IMAGE } from '../redux/actions/propertyCreate';
import api from './api';

const propertyMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_PROPERTY_IMAGE : {

      const newImage = {
          url: action.url,
          name: action.name,
          property_id: action.propertyId,
      }

      store.dispatch(setLoading(true));

      console.log('propertyImageInfos : ', newImage)

      api.post('/properties-images', {
        ...newImage,
      })
        .then(
          (response) => {
            console.log(`Retour positif, l'image de la propriété a été créée :`, response)
            
          }
        ).catch((error) => {
          console.log('error sur la route POST /properties : ', error)
          store.dispatch(setLoading(false));
        });
        next(action);
        break;
    }

    default:
      next(action);
  }
};

export default propertyMiddleware;
