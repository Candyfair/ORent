/* eslint-disable linebreak-style */
// === IMPORTS
import { useNavigate } from 'react-router';
import { Stack, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

// === MUI
const useStyles = makeStyles(() => ({
  footerFields: {
    fontSize: '0.8rem',
    margin: '16px 0',
  },
}));

// === COMPONENT
const Footer = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <footer>
      <Stack
        flexDirection="row"
        justifyContent="center"
        gap={20}
      >
        <Typography
          className={classes.footerFields}
          variant="h6"
          align="center"
        >
          &copy; 2022 - O'RENT
        </Typography>
        <Typography
          className={classes.footerFields}
          variant="h6"
          align="center"
          onClick={() => navigate('/terms-of-use')}
        >
          Terms
        </Typography>
        <Typography
          className={classes.footerFields}
          variant="h6"
          align="center"
          onClick={() => navigate('/privacy-policy')}
        >
          Privacy Policy
        </Typography>
        <Typography
          className={classes.footerFields}
          variant="h6"
          align="center"
          onClick={() => navigate('/about')}
        >
          About
        </Typography>
        <Typography
          className={classes.footerFields}
          variant="h6"
          align="center"
          onClick={() => navigate('/faq')}
        >
          FAQ
        </Typography>
      </Stack>
    </footer>

  );
};

export default Footer;
