/* eslint-disable linebreak-style */
// IMPORTS
import { makeStyles } from '@mui/styles';
import {
  Stack, Typography, TextField, FormControl, Button, InputAdornment, InputBase, Input,
} from '@mui/material/';
import PhotoIcon from '@mui/icons-material/Photo';

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
  btsave: {
    width: '50%',
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
            required
            id="name"
            label="Name of your property"
            variant="outlined"
          />

          <TextField
            accept="image/*"
            id="upload"
            label="Upload photos"
            variant="outlined"
            multiple
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PhotoIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
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
            required
            id="city"
            label="City"
          />
          <TextField
            required
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
              required
              id="capacity"
              label="Capacity"
              variant="outlined"
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
            multiline
            minRows={4}
          />
        </Stack>

        {/* Price */}
        <Stack
          spacing={1}
        >
          <Typography variant="h5">Price</Typography>
          <TextField
            required
            id="price"
            label="Price"
            InputProps={{
              startAdornment: <InputAdornment position="start">€</InputAdornment>,
            }}
          />
        </Stack>
        <Stack
          justifyContent="center"
          alignItems="center"
        >
          <Button
            variant="contained"
            className={classes.btsave}
          >
            Save & Publish
          </Button>
        </Stack>
      </Stack>

    </form>
  );
};

export default PropertyFormComp;
