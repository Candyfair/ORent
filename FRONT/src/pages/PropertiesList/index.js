import { makeStyles } from '@mui/styles';
import { Stack, Box } from '@mui/material/';
import PropertiesCards from '../../components/PropertiesCards';
import PropertiesMap from '../../components/PropertiesMap';

const useStyles = makeStyles((theme) => ({
  propertiesList: {
    padding: `${theme.spacing(2)} 0`,
    width: '100%',
  },
  cards: {
    width: '50%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  map: {
    width: '50%',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));
const PropertiesList = () => {
  const classes = useStyles();
  return (
    <Stack
      className={classes.propertiesList}
      flexDirection="row"
    >
      <Box className={classes.cards}>
        <PropertiesCards />
      </Box>
      <Box className={classes.map}>
        <PropertiesMap />
      </Box>
    </Stack>
  );
};

export default PropertiesList;
