import { setLoading } from '../redux/actions/displayOptions';

import { addPropertyImage, ADD_PROPERTY, changeNewPropertyField, changeNewPropertyImages, UPLOAD_IMAGE } from '../redux/actions/propertyCreate';

import { FETCH_PROPERTIES, FETCH_PROPERTY, savePropertiesList, savePropertyDetails } from '../redux/actions/propertiesFetch';

import api from './api';

const propertyMiddleware = (store) => (next) => (action) => {
  switch (action.type) {

    case ADD_PROPERTY : {

      const { images, name, description, capacity, number, street, type, zipcode, city, country, bedrooms, beds, bathrooms, price} = store.getState().propertyCreate;
      const { id } = store.getState().userCurrent

      store.dispatch(setLoading(true));

      const newProperty = {
        name: name,
        description: description,
        capacity: capacity,
        bedrooms_count: bedrooms,
        beds_count: beds,
        bathrooms_count: bathrooms,
        type: type,
        street_number: number,
        street_name: street,
        zip_code: zipcode,
        city: city,
        country: country,
        week_price: price,
        user_id: id,
      }

      console.log('propertyInfos : ', newProperty)

      api.post('/properties', {
        ...newProperty,
      })
        .then(
          (response) => {
            console.log(`Retour positif, la propriété a été créée :`, response)
            console.log('les images avant de faire addPropertyImage : ', images)
            
            store.dispatch(addPropertyImage(images[0], name, response.data.id))
            
            
          }
        ).catch((error) => {
          console.log('error sur la route POST /properties : ', error)
          store.dispatch(setLoading(false));
        });
        next(action);
        break;
    }

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
    
    case FETCH_PROPERTIES: {
      console.log('Je suis bien dans le properties middleware sur la route GET /properties');
      store.dispatch(setLoading(true));
      api.get(
        '/properties',
      )
        .then(
          (response) => {
            console.log('Fetch properties réussi : ', response);
            store.dispatch(savePropertiesList(response.data));
            store.dispatch(setLoading(false));
          },
        )
        .catch(
          (error) => {
            console.log('Error Fetch properties: ', error);
            store.dispatch(setLoading(false));
          },
        );
      next(action);
      break;
    }

    case FETCH_PROPERTY: {
      console.log(`Je suis bien dans le properties middleware sur la route GET /properties/${action.id}`);
      store.dispatch(setLoading(true));
      api.get(
        `/properties/${action.id}`,
      )
        .then(
          (response) => {
            console.log('Fetch property details réussi : ', response);
            store.dispatch(savePropertyDetails(response.data));
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

export default propertyMiddleware;
