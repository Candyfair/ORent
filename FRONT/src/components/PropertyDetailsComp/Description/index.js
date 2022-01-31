/* eslint-disable linebreak-style */
// IMPORTS
import { makeStyles } from '@mui/styles';
import { Stack, Typography, Divider } from '@mui/material/';

// MUI STYLES
const useStyles = makeStyles((theme) => ({
  description: {
    width: '70%',
    paddingRight: theme.spacing(5),
  },
}));

// COMPONENT
const Description = () => {
  const classes = useStyles();

  return (
    <Stack
      spacing={2}
      className={classes.description}
    >
      <Typography variant="h5">
        [Type] - [Country] - Host : [Username]
      </Typography>
      <Typography variant="subtitle1">
        [Nb Guests] guests - [Nb bedrooms] bedrooms - [Nb beds] beds - [Nb bathrooms] bathrooms
      </Typography>

      <Divider />

      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
    </Stack>
  );
};

export default Description;
