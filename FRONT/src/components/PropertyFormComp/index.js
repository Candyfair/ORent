/* eslint-disable linebreak-style */
// IMPORTS
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@mui/styles';
import {
  Stack, Typography, TextField, Button, InputAdornment, Select, MenuItem, FormControl, InputLabel,
} from '@mui/material/';

import { useState } from 'react';
import UploadFormComp from './UploadFormComp';
import { changeNewPropertyField } from '../../redux/actions/propertyCreate';

// MUI STYLES
const useStyles = makeStyles((theme) => ({
  propertyContainer: {
    // textAlign: 'left',
    maxWidth: '500px',
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
  country: {
    textAlign: 'left',
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

// COMPONENT
const PropertyFormComp = () => {
  const classes = useStyles();

  // Dispatch functions
  const dispatch = useDispatch();

  const {
    propertyname, number, street, zipcode, city,
    capacity, bedrooms, beds, bathrooms, country,
    description, price,
  } = useSelector((state) => state.propertyCreate);

  const handlePropertyFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handlePropertyFormSubmit}
    >

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
            value={propertyname}
            label="Name of your property"
            variant="outlined"
            onChange={(e) => dispatch(changeNewPropertyField(e.target.value, 'propertyname'))}
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
            value={number}
            onChange={(e) => dispatch(changeNewPropertyField(e.target.value, 'number'))}

          />
          <TextField
            required
            id="street"
            label="Street"
            value={street}
            onChange={(e) => dispatch(changeNewPropertyField(e.target.value, 'street'))}
          />
          <TextField
            required
            id="zipcode"
            label="Zip code"
            value={zipcode}
            onChange={(e) => dispatch(changeNewPropertyField(e.target.value, 'zipcode'))}
          />
          <TextField
            required
            id="city"
            label="City"
            value={city}
            onChange={(e) => dispatch(changeNewPropertyField(e.target.value, 'city'))}
          />
          {/* Country select field */}
          <FormControl>
            <InputLabel id="country-label">Country *</InputLabel>
            <Select
              required
              id="country"
              label="Country"
              labelId="country-label"
              value={country}
              className={classes.country}
              onChange={(e) => dispatch(changeNewPropertyField(e.target.value, 'country'))}
            >
              <MenuItem value="France">France</MenuItem>
              <MenuItem value="Italy">Italy</MenuItem>
              <MenuItem value="Greece">Greece</MenuItem>
              <MenuItem value="Spain">Spain</MenuItem>
              <MenuItem value="United Kingdom">United Kingdom</MenuItem>

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
              value={capacity}
              onChange={(e) => dispatch(changeNewPropertyField(e.target.value, 'capacity'))}
              label="Capacity"
              variant="outlined"
              className={classes.featuresItem}
            />
            <TextField
              required
              type="number"
              id="bedrooms"
              value={bedrooms}
              onChange={(e) => dispatch(changeNewPropertyField(e.target.value, 'bedrooms'))}
              label="Bedrooms"
              className={classes.featuresItem}
            />
            <TextField
              required
              type="number"
              id="beds"
              value={beds}
              onChange={(e) => dispatch(changeNewPropertyField(e.target.value, 'beds'))}
              label="Beds"
              className={classes.featuresItem}
            />
            <TextField
              required
              type="number"
              id="bathrooms"
              value={bathrooms}
              onChange={(e) => dispatch(changeNewPropertyField(e.target.value, 'bathrooms'))}
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
            value={description}
            onChange={(e) => dispatch(changeNewPropertyField(e.target.value, 'description'))}
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
            value={price}
            onChange={(e) => dispatch(changeNewPropertyField(e.target.value, 'price'))}
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
            type="submit"
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
