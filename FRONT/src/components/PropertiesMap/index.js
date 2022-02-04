/* eslint-disable linebreak-style */
// === React imports
import { useNavigate } from 'react-router';

import PropTypes from 'prop-types';

// === Leaflet imports
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';

// === Material-UI imports
import { makeStyles } from '@mui/styles';
import { Stack, Button, Typography } from '@mui/material/';

// === Internal module imports
import getMapCenter from '../../utils/utils';

// === Styles
const useStyles = makeStyles((theme) => ({
  propertiesMap: {
    width: '100%',
    position: 'fixed',
  },
  map: {
    width: '100%',
    height: '85vh',
  },
  popup: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
  },
}));

// === Code
const PropertiesMap = ({ cards }) => {
  const classes = useStyles();

  const navigate = useNavigate();

  const centerCoordinates = getMapCenter(cards);

  return (
    <Stack
      className={classes.propertiesMap}
    >
      <MapContainer
        className={classes.map}
        center={centerCoordinates}
        zoom={6}
        scrollWheelZoom
        draggable
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {
          cards.map(
            (card) => (
              <Marker key={card.id} position={[card.latitude, card.longitude]}>
                <Popup className={classes.popup}>
                  <Typography
                    variant="subtitle1"
                  >
                    {card.name}
                  </Typography>
                  <Typography
                    variant="body1"
                  >
                    {card.weekprice} €/week
                  </Typography>
                  <Button
                    className={classes.button}
                    size="small"
                    color="primary"
                    onClick={() => navigate(`/homes/${card.slug}/${card.id}`)}
                  >
                    More details
                  </Button>

                </Popup>
              </Marker>
            ),
          )
        }
      </MapContainer>
    </Stack>
  );
};

// === propTypes
PropertiesMap.propTypes = {
  // validation des éléments du tableau + forme des éléments du tableau
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    slug: PropTypes.string,
    description: PropTypes.string,
    capacity: PropTypes.number,
    bedroomsCount: PropTypes.number,
    bedsCount: PropTypes.number,
    bathrooms_count: PropTypes.number,
    type: PropTypes.string,
    streetNumber: PropTypes.number,
    streetName: PropTypes.string,
    zipCode: PropTypes.number,
    city: PropTypes.string,
    country: PropTypes.string,
    weekprice: PropTypes.number,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    images: PropTypes.array,
    user_id: PropTypes.number,
  })).isRequired,
};

export default PropertiesMap;
