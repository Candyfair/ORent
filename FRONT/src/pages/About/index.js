/* eslint-disable max-len */
// IMPORTS
import { makeStyles } from '@mui/styles';
import {
  Stack, Typography, Card, CardMedia, CardContent,
} from '@mui/material/';
import img1 from 'src/assets/images/house1.jpg';
import img2 from 'src/assets/images/house2.jpg';
import img3 from 'src/assets/images/house3.jpg';

// MUI STYLES
const useStyles = makeStyles((theme) => ({
  content: {
    margin: '0 auto',
    paddingTop: theme.spacing(2),
    width: '45%',
    minWidth: 800,
    [theme.breakpoints.down('md')]: {
      width: '80%',
      minWidth: '80%',
      paddingTop: theme.spacing(4),
    },
  },
  bold: {
    fontWeight: 600,
  },
  cardStyle: {
    maxWidth: 250,
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  image: {
    width: 250,
    height: 250,
  },
  team: {
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));

// COMPONENT
const About = () => {
  const classes = useStyles();

  return (
    <Stack
      className={classes.content}
      spacing={2}
    >
      <Typography variant="h4">
        About us
      </Typography>

      {/* Text */}
      <Typography variant="body1">
        <span className={classes.bold}>O'Rent</span> aims to connect homeowners who want to let their properties with private individuals who are looking for authentic places they can rent while travelling.
      </Typography>
      <Typography>
        Please note that this website is for demo purpose only, and it's not currently possible to rent properties.
      </Typography>
      <Typography variant="body1">
        This site has been coded by a <span className={classes.bold}>team of 3 full-stack developers</span> as an end-of-study project:
      </Typography>

      {/* Avatars */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className={classes.team}
      >

        {/* Alexandre */}
        <Card className={classes.cardStyle}>
          <CardMedia>
            <img src={img1} alt="House" className={classes.image} />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Alexandre Demartin
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Git Master
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Technical Referent (Back)
            </Typography>
          </CardContent>
        </Card>

        {/* Candice */}
        <Card className={classes.cardStyle}>
          <CardMedia>
            <img src={img3} alt="Cottage" className={classes.image} />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Candice Fairand
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Product Owner
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Scrum Master
            </Typography>
          </CardContent>
        </Card>

        {/* Augustin */}
        <Card className={classes.cardStyle}>
          <CardMedia>
            <img src={img2} alt="Cottage" className={classes.image} />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Augustin Mbarga
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Lead Developer
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Technical Referent (Front)
            </Typography>
          </CardContent>
        </Card>
      </Stack>

      <Typography variant="caption">
        Resources: properties pictures by Unsplash and vector illustrations by Vecteezy
      </Typography>

    </Stack>
  );
};

export default About;
