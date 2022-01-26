/* eslint-disable linebreak-style */
// IMPORTS
import { makeStyles } from '@mui/styles';
import { Stack, Typography, TextField } from '@mui/material/';

// MUI STYLES
const useStyles = makeStyles((theme) => ({
  propertyContainer: {
    textAlign: 'left',
    width: '50%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    spacing: theme.spacing(2),
  },
  features: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featuresItem: {
    width: '48%',
  },
}));

const PropertyFormComp = () => {
  const classes = useStyles();

  return (
    <form>
      <Stack
        className={classes.propertyContainer}
        spacing={3}
      >
        {/* Property name & photo upload */}
        <Stack
          spacing={1}
        >
          <TextField
            id="name"
            label="Name of your property *"
          />

          <TextField
            id="upload-photo"
            label="Upload photo"
          />
        </Stack>

        {/* Address */}
        <Stack
          spacing={1}
        >
          <Typography variant="h5">Address</Typography>

          <TextField
            id="number"
            label="Number"
          />
          <TextField
            id="street"
            label="Street"
          />
          <TextField
            id="zipcode"
            label="Zip code"
          />
          <TextField
            id="city"
            label="City"
          />
          <TextField
            id="country"
            label="Country"
          />
        </Stack>

        {/* Features */}
        <Stack
          spacing={1}
        >
          <Typography variant="h5">Features</Typography>
          <Stack
            flexDirection="row"
            className={classes.features}
            gap={2}

          >
            <TextField
              id="capacity"
              label="Capacity"
              className={classes.featuresItem}
            />
            <TextField
              id="bedrooms"
              label="Bedrooms"
              className={classes.featuresItem}
            />
            <TextField
              id="beds"
              label="Beds"
              className={classes.featuresItem}
            />
            <TextField
              id="bathrooms"
              label="Bathrooms"
              className={classes.featuresItem}
            />
          </Stack>
        </Stack>

        {/* Description */}
        <Stack
          spacing={1}
        >
          <Typography variant="h5">Description *</Typography>
          <TextField
            id="description"
            label="Enter a description of your property"
          />
        </Stack>

        {/* Price */}
        <Stack
          spacing={1}
        >
          <Typography variant="h5">Price *</Typography>
          <TextField
            required
            id="price"
            label="Price per night"
          />
        </Stack>
      </Stack>
    </form>
  );
};

export default PropertyFormComp;
