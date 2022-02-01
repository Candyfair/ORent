/* eslint-disable linebreak-style */
// IMPORTS
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@mui/styles';
import {
  FormHelperText, Stack, Typography, TextField, Button, InputAdornment, Select, MenuItem, FormControl, InputLabel, RadioGroup, Box, FormControlLabel, FormLabel, Radio
} from '@mui/material/';

import { useState } from 'react';
import { addProperty, changeNewPropertyField } from '../../redux/actions/propertyCreate';

import UploadImageForm from './UploadImageForm';
import { slugify } from '../../utils/utils';
import { useNavigate } from 'react-router';


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
    color: theme.palette.common.white,
    fontWeight: 700,
    width: '50%',
  },
  country: {
    textAlign: 'left',
  },
  type: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  upload: {
    marginBottom: theme.spacing(2),
  }
  // price: {
  //   '&> .MuiOutlinedInput-input': {
  //     '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
  //       '-webkit-appearance': 'none',
  //     },
  //   },
  // },
}));

// COMPONENT
const PropertyFormComp = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  // Dispatch functions
  const dispatch = useDispatch();

  const [imageStatus, setImageStatus] = useState(false);

  const {
    name, number, street, zipcode, city,
    capacity, bedrooms, beds, bathrooms, country,
    description, price, uploadFile, type, images
  } = useSelector((state) => state.propertyCreate);

  const handlePropertyFormSubmit = (event) => {
    event.preventDefault();
    // if (images.length > 0) dispatch(addProperty())
    // else console.log('il faut ajouter une image pour créer une propriété')
    if(images.length > 0) {
      dispatch(addProperty());
      setImageStatus(false);
      navigate('/properties');
    }
    else setImageStatus(true)
  };

  return (
    <Stack 
      className={classes.propertyContainer}
      spacing={2}
    >  
      <UploadImageForm />
      { imageStatus && (
        <FormHelperText error={true}>You need to upload at lest 1 image to add a property</FormHelperText>
      )}
      <form
        autoComplete="off"
        onSubmit={handlePropertyFormSubmit}
      >
        <Stack
          spacing={3}
        >
          {/* Property name & photo upload */}
          <Stack
            spacing={2}
          >   
            <TextField
              required
              id="propertyname"
              value={name}
              label="Name of your property"
              variant="outlined"
              onChange={(e) => dispatch(changeNewPropertyField(e.target.value, 'name'))}
            />

            <FormControl
              required
            >
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={type}
                onChange={(e) => dispatch(changeNewPropertyField(e.target.value, 'type'))}
                className={classes.type}
              >
                <FormControlLabel value="house" control={<Radio />} label="House" />
                <FormControlLabel value="appartment" control={<Radio />} label="Appartment" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>

          </Stack>

          {/* ADDRESS */}
          <Stack
            spacing={2}
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
            spacing={2}
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
            spacing={2}
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
            spacing={2}
          >
            <Typography variant="h5">Price</Typography>
            <TextField
              required
              id="price"
              value={price}
              onChange={(e) => dispatch(changeNewPropertyField(e.target.value, 'price'))}
              label="Price per week"
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
              disableElevation
              className={classes.btsave}
            >
              Save & Publish
            </Button>
          </Stack>
        </Stack>

      </form>
    </Stack>
  );
};

export default PropertyFormComp;
