import { useNavigate } from 'react-router';
import { makeStyles } from '@mui/styles';
import { Stack, Button, Typography } from '@mui/material/';

import ExploreIcon from '@mui/icons-material/Explore';

import imgError from '../../assets/images/404image.jpg';

// MUI STYLES
const useStyles = makeStyles((theme) => ({
  home: {
    backgroundImage: `url(${imgError})`,
    backgroundSize: 'cover',
    height: 'calc(100vh - 66px - 49px)',
    [theme.breakpoints.down('md')]: {
      height: 'calc(100vh - 88px)',
    },
  },
  centeredBlock: {
    color: theme.palette.common.white,
    maxWidth: '90%',
    marginBottom: theme.spacing(10),
  },
  title: {
    textShadow: '2px 2px 2px #4C4C4C',
    textAlign: 'center',
    fontSize: '50px',
    fontWeight: '600',
    [theme.breakpoints.down('md')]: {
      fontSize: '40px',
    },
  },
  subtitle: {
    textShadow: '2px 2px 2px #4C4C4C',
    textAlign: 'center',
  },
  btexplore: {
    padding: theme.spacing(1),
    color: theme.palette.common.white,
    fontSize: '1rem',
    width: '400px',
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
    },
  },
}));

// COMPONENT
const ErrorPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Stack
      flexDirection="column"
      spacing={5}
      className={classes.home}
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        spacing={4}
        className={classes.centeredBlock}
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          paragraph
          className={classes.title}
        >
          Oh no... you got lost!
        </Typography>
        <Typography
          variant="h5"
          className={classes.subtitle}
        >
          What don't you explore our other properties?
        </Typography>
        <Button
          onClick={() => navigate('/homes')}
          variant="contained"
          color="secondary"
          className={classes.btexplore}
          startIcon={<ExploreIcon />}
        >
          Explore
        </Button>
      </Stack>
    </Stack>
  );
};

export default ErrorPage;
