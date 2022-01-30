/* eslint-disable linebreak-style */
import { Stack, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  footerFields: {
    textDecoration: 'underline',
    fontSize: '0.7rem',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer>
      {/* <Typography variant="h6" align="center" gutterBottom>
        Terms
      </Typography> */}
      <Stack
        flexDirection="row"
        justifyContent="center"
        gap={1}
      >
        <Button
          className={classes.footerFields}
          variant="h6"
          align="center"
          onClick={() => console.log('Go to the Terms page !')}
        >
          Terms
        </Button>
        <Button
          className={classes.footerFields}
          variant="h6"
          align="center"
          onClick={() => console.log('Go to the Privacy Policy page !')}
        >
          Privacy Policy
        </Button>
        <Button
          className={classes.footerFields}
          variant="h6"
          align="center"
          onClick={() => console.log('Go to the About page !')}
        >
          About
        </Button>
        <Button
          className={classes.footerFields}
          variant="h6"
          align="center"
          onClick={() => console.log('Go to the FAQs page !')}
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
