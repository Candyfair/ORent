import { changeNewPropertyField, changeNewPropertyImages, UPLOAD_IMAGE } from '../redux/actions/propertyCreate';
import api from './api';

const propertyMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case UPLOAD_IMAGE: {
        const formData = new FormData()
        const {uploadFile} = store.getState().propertyCreate
        console.log(`Je suis sur l'action UPLOAD_IMAGE avec le fichier : `, uploadFile)

        formData.append('property_image', uploadFile);

        api.post('/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        })
            .then(
                (response) => {
                    console.log(`upload réussi`, response)
                    store.dispatch(changeNewPropertyField('', 'propertyImage'))
                    store.dispatch(changeNewPropertyImages(response.data.secure_url))
            }
            )
            .catch(
                (error) => console.log('upload fail ', error)
            )
    }

    default:
      next(action);
  }
};

export default propertyMiddleware;
