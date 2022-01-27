/* eslint-disable linebreak-style */
// IMPORTS
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@mui/styles';
import {
  Stack, Typography, TextField, Button, InputAdornment, Select, MenuItem, FormControl, InputLabel,
} from '@mui/material/';

import { useState } from 'react';
import UploadFormComp from './UploadFormComp';

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
  // price: {
  //   '&> .MuiOutlinedInput-input': {
  //     '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
  //       '-webkit-appearance': 'none',
  //     },
  //   },
  // },
  // price: {
  //   '&> input[type=number]::-webkit-inner-spin-button': {
  //     '-webkit-appearance': 'none',
  //     'margin': 0,
  //   },
  // },

}));

const PropertyFormComp = () => {
  const classes = useStyles();

  const {
    propertyname, number, street, zipcode, city, countryId,
    capacity, bedrooms, beds, bathrooms,
    description, price,
  } = useSelector((state) => state.propertyCreate);

  const [country, setCountry] = useState('');
  const handleChange = (event) => {
    setCountry(event.target.value);
  };

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
            id="propertyname"
            label="Name of your property"
            variant="outlined"
          />

          {/* Upload photos */}
          <UploadFormComp />

        </Stack>

        {/* ADDRESS */}
        <Stack
          spacing={1}
        >
          <Typography variant="h5">Address</Typography>

          <TextField
            id="number"
            label="Number"
          />
          <TextField
            required
            id="street"
            label="Street"
          />
          <TextField
            required
            id="zipcode"
            label="Zip code"
          />
          <TextField
            required
            id="city"
            label="City"
          />
          {/* Country select field */}
          <FormControl>
            <InputLabel id="country-label">Country *</InputLabel>
            <Select
              required
              id="countryId"
              label="Country"
              labelId="country-label"
              value={country}
              onChange={handleChange}
            >
              <MenuItem value={1}>France</MenuItem>
              <MenuItem value={2}>Italy</MenuItem>
              <MenuItem value={3}>Greece</MenuItem>
              <MenuItem value={5}>Spain</MenuItem>
              <MenuItem value={6}>United Kingdom</MenuItem>

            </Select>
          </FormControl>
        </Stack>

        {/* FEATURES */}
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
              type="number"
              id="capacity"
              label="Capacity"
              variant="outlined"
              className={classes.featuresItem}
            />
            <TextField
              required
              type="number"
              id="bedrooms"
              label="Bedrooms"
              className={classes.featuresItem}
            />
            <TextField
              required
              type="number"
              id="beds"
              label="Beds"
              className={classes.featuresItem}
            />
            <TextField
              required
              type="number"
              id="bathrooms"
              label="Bathrooms"
              className={classes.featuresItem}
            />
          </Stack>
        </Stack>

        {/* DESCRIPTION */}
        <Stack
          spacing={1}
        >
          <Typography variant="h5">Description</Typography>
          <TextField
            required
            id="description"
            label="Enter a description of your property"
            multiline
            minRows={4}
          />
        </Stack>

        {/* PRICE */}
        <Stack
          spacing={1}
        >
          <Typography variant="h5">Price</Typography>
          <TextField
            required
            id="price"
            label="Price per night"
            type="tel"
            // className={classes.price}
            InputProps={{
              startAdornment: <InputAdornment position="start">€</InputAdornment>,
            }}
          />
        </Stack>

        {/* Save & Publish button */}
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
