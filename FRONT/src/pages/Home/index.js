import { useNavigate } from 'react-router';
import { makeStyles } from '@mui/styles';
import { Stack, Button, Typography, CardMedia } from '@mui/material/';

import imageDesktop from '../../assets/images/homepage.jpg';
import imageMobile from '../../assets/images/homepage-mobile.jpg';

import ExploreIcon from '@mui/icons-material/Explore';

// MUI STYLES
const useStyles = makeStyles((theme) => ({
  home: {
    backgroundImage: `url(${imageDesktop})`,
    backgroundSize: 'cover',
    height: 'calc(100vh - 66px - 49px)',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${imageMobile})`,
      height: 'calc(100vh - 88px)'
    },
  },
  centeredBlock: {
    color: theme.palette.common.white,
    maxWidth: '90%',
    marginBottom: theme.spacing(10)
  },
  title: {
    textShadow: '1px 1px 2px #000',
    textAlign: 'center',
    fontSize: '50px',
    fontWeight: '600',
    [theme.breakpoints.down('md')]: {
      fontSize: '40px',
    },
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
const Home = () => {
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
        justifyContent='center'
        alignItems='center'
      >
        <Typography
          paragraph
          className={classes.title}
        >
          Find inspiration for your next vacation
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
    </Stack>
  );
};

export default Home;
