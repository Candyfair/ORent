/* eslint-disable linebreak-style */
import { Stack, Box } from '@mui/material/';
import { makeStyles } from '@mui/styles';

// === Imports
import PropertyCard from './PropertyCard';

import cards from '../../data/fakeCards';

// === Notre tableau d'objet avec des fake data

const useStyles = makeStyles((theme) => ({
  propertiesCards: {
    width: '100%',
    height: '100vh',
  },
  box: {
    boxShadow: theme.custom.shadow.primary,
    flexGrow: 4,
  },
}));

const PropertiesCards = () => {
  const classes = useStyles();

  return (
  // <PropertyCard />
    <Stack
      className={classes.propertiesCards}
      gap={2}
    >
      {cards.map((card) => (
        <Box key={card.id} className={classes.box}>
          <PropertyCard
            name={card.name}
            image={card.images[0]}
            description={card.description}
            weekPrice={card.weekPrice}
            type={card.type}
            slug={card.slug}
            id={card.id}
          />
        </Box>
      ))}
    </Stack>
  );
};

export default PropertiesCards;
