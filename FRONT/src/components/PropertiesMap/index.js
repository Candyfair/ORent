/* eslint-disable linebreak-style */
// === Leaflet imports
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';

// === React imports
import { useNavigate } from 'react-router';

// === Material-UI imports
import { makeStyles } from '@mui/styles';
import { Stack, Button, Typography } from '@mui/material/';

// === Internal module imports
import cards from '../../data/fakeCards';
import getMapCenter from '../../utils/utils';

const useStyles = makeStyles((theme) => ({
  propertiesMap: {
    width: '100%',
  },
  map: {
    height: '96.5vh',
  },
  popup: {
    display: 'flex',
    flexDirectino: 'column',
    gap: theme.spacing(1),
  },
}));

const PropertiesMap = () => {
  // right side : propertiesMap display
  const classes = useStyles();

  const navigate = useNavigate();

  const centerCoordinates = getMapCenter(cards);
  return (
    <Stack
      className={classes.propertiesMap}
    >
      <MapContainer
        className={classes.map}
        center={centerCoordinates} // [51.505, -0.09]
        zoom={6}
        scrollWheelZoom
        dragging
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
                    {card.weekPrice} €/week
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

export default PropertiesMap;
