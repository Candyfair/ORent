/* eslint-disable linebreak-style */
// === IMPORTS
import { useNavigate } from 'react-router';
import { Stack, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

// === MUI
const useStyles = makeStyles((theme) => ({
  footer: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    }
  },
  footerFields: {
    flewWrap: 'wrap',
    marginTop: theme.spacing(2),
  },
  mobileFooter: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));

// === COMPONENT
const Footer = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <footer>
      <Stack
        className={classes.footer}
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap={4}
      >
        <Typography
          className={classes.footerFields}
          variant="body2"
          align="center"
        >
          &copy; 2022 - O'RENT
        </Typography>

        <Stack
          flexDirection="row"
          gap={4}
          className={classes.mobileFooter}
        >
          <Typography
            className={classes.footerFields}
            variant="body2"
            align="center"
            onClick={() => navigate('/terms-of-use')}
          >
            Terms
          </Typography>
          <Typography
            className={classes.footerFields}
            variant="body2"
            align="center"
            onClick={() => navigate('/privacy-policy')}
          >
            Privacy Policy
          </Typography>
          <Typography
            className={classes.footerFields}
            variant="body2"
            align="center"
            onClick={() => navigate('/about')}
          >
            About
          </Typography>
          <Typography
            className={classes.footerFields}
            variant="body2"
            align="center"
            onClick={() => navigate('/faq')}
          >
            FAQ
          </Typography>
        </Stack>

      </Stack>
    </footer>

  );
};

export default Footer;
