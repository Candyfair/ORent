import { useNavigate } from 'react-router';
import { makeStyles } from '@mui/styles';
import { Stack, Button, Typography } from '@mui/material/';

import imageDesktop from '../../assets/images/homepage.jpg';
import imageMobile from '../../assets/images/homepage-mobile.jpg';

// MaterialUI theme import
const useStyles = makeStyles((theme) => ({
  title: {
    textShadow: '1px 1px 2px #000',
    fontSize: '50px',
    fontWeight: '600',
    [theme.breakpoints.down('md')]: {
      fontSize: '40px',
    },
  },
  button: {
    boxShadow: theme.custom.shadow.primary,
    textDecoration: 'underline',
    '&:hover': {
      backgroundColor: theme.palette.common.white,
    },
  },
  globalContainer: {
    position: 'relative',
    textAlign: 'center',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  imageDesktopClass: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  imgDesktop: {
    height: '86vh',
    width: '100%',
  },
  imageMobileClass: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  centeredBlock: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: theme.palette.common.white,
    maxWidth: '90%',
  },
  btexplore: {
    padding: theme.spacing(1),
    color: theme.palette.common.white,
    fontSize: '1rem',
    width: '400px',
    [theme.breakpoints.down('md')]: {
      maxWidth: '90%',
    },
  },
}));

// Exported component
const HomeComp = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    // Global container
    <Stack
      className={classes.globalContainer}
    >
      {/* Image Desktop */}
      <Stack
        className={classes.imageDesktopClass}
      >
        <img src={imageDesktop} alt="Find inspiration for your next vacation" className={classes.imgDesktop} />
      </Stack>

      {/* Image Mobile */}
      <Stack
        className={classes.imageMobileClass}
      >
        <img src={imageMobile} alt="Find inspiration for your next vacation" />
      </Stack>

      {/* Text and button container */}
      <Stack
        spacing={4}
        className={classes.centeredBlock}
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
        >
          Explore
        </Button>

      </Stack>
    </Stack>

  );
};

export default HomeComp;
