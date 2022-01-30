/* eslint-disable linebreak-style */
// === IMPORTS
import { useNavigate } from 'react-router';
import { Stack, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

// === MUI
const useStyles = makeStyles(() => ({
  footerFields: {
    fontSize: '0.7rem',
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
        gap={1}
      >
        <Button
          className={classes.footerFields}
          variant="h6"
          align="center"
          onClick={() => navigate('/terms-of-use')}
        >
          Terms
        </Button>
        <Button
          className={classes.footerFields}
          variant="h6"
          align="center"
          onClick={() => navigate('/privacy-policy')}
        >
          Privacy Policy
        </Button>
        <Button
          className={classes.footerFields}
          variant="h6"
          align="center"
          onClick={() => navigate('/about')}
        >
          About
        </Button>
        <Button
          className={classes.footerFields}
          variant="h6"
          align="center"
          onClick={() => navigate('/faq')}
        >
          FAQs
        </Button>
      </Stack>
      <Typography variant="subtitle1" align="center" color="textSecondary" fontSize="0.8rem">
        &copy; 2022 O'RENT
      </Typography>
    </footer>

  );
};

export default Footer;
