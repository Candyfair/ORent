import { useNavigate } from 'react-router';

// MaterialUI imports
import {
  Stack, Typography, Button
} from '@mui/material/';
import { makeStyles } from '@mui/styles';
// === Imports

import ExploreIcon from '@mui/icons-material/Explore';

const useStyles = makeStyles((theme) => ({
  noResults: {
    display: 'flex',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.custom.shadow.primary,
    height: 'calc(100vh - 66px - 49px)',
  },
  btexplore:{
    padding: theme.spacing(1),
    color: theme.palette.common.white,
    fontSize: '1rem',
    width: '400px',
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
    },
  }

}));

// Exported component
const NoResults = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Stack
        className={classes.noResults}
        justifyContent='center'
        alignItems='center'
        gap={4}
    >
        <Typography
            component='h3'
            variant='h5'
        >
            There are no results but you can try to explore our other properties !
        </Typography>
        <Button
          onClick={() => navigate('/homes')}
          variant="contained"
          color="secondary"
          className={classes.btexplore}
          startIcon={<ExploreIcon  />}
        >
          Explore
        </Button>
    </Stack>
  );
};

export default NoResults;
