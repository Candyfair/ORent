/* eslint-disable linebreak-style */
// === IMPORTS
import { useNavigate } from 'react-router';
import { Stack, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CopyrightIcon from '@mui/icons-material/Copyright';
// === MUI
const useStyles = makeStyles((theme) => ({
  footer: {
    boxShadow: '2px -12px 30px rgba(88, 88, 88, 0.13)',
    padding: `${theme.spacing(2)} 0`,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    }
  },
  copyright: {
    color: theme.palette.text.secondary,
    fontSize: '12px',
  },
  links: {
    fontSize: '12px',
    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer',
    }
  }
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
            variant="body2"
            align="center"
            color="text.secondary"
            className={classes.links}
            onClick={() => navigate('/terms-of-use')}
          >
            Terms
          </Typography>
          <Typography
            variant="body2"
            align="center"
            color="text.secondary"
            className={classes.links}
            onClick={() => navigate('/privacy-policy')}
          >
            Privacy Policy
          </Typography>
          <Typography
            variant="body2"
            align="center"
            color="text.secondary"
            className={classes.links}
            onClick={() => navigate('/about')}
          >
            About
          </Typography>
          <Typography
            variant="body2"
            align="center"
            color="text.secondary"
            className={classes.links}
            onClick={() => navigate('/faq')}
          >
            FAQ
          </Typography>
          <Typography
            variant="body2"
            align="center"
            color="text.secondary"
            sx={{fontSize: '12px'}}
            onClick={() => navigate('/faq')}
          >
            -
          </Typography>
          <Stack
            direction='row'
            justifyContent='center'
            alignItems='center'
            gap={1}
            className={classes.copyright}
          >
            <CopyrightIcon 
              sx={{fontSize: '16px'}} 
            />
            <Typography
              variant="body2"
              align="center"
              color="text.secondary"
              sx={{fontSize: '12px'}}
            >
              2022 O'Rent
            </Typography>
          </Stack>

        </Stack>
    </footer>

  );
};

export default Footer;
