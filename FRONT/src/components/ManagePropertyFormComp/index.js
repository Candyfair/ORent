/* eslint-disable linebreak-style */
// IMPORTS
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@mui/styles';
import {
  Stack, Typography, TextField, Button, InputAdornment,
  Select, MenuItem, FormControl, InputLabel, RadioGroup, FormControlLabel, Radio,
  ImageList, ImageListItem,
} from '@mui/material/';

import { changeCurrentPropertyField } from '../../redux/actions/propertyCreate';

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
    justifyContent: 'space-evenly',
  },
  upload: {
    marginBottom: theme.spacing(2),
  },
  PropertyImagesPreviewDisplay: {
    maxWidth: 500,
    border: `1px solid ${theme.palette.action.disabled}`,
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
  },
  textPreview: {
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.action.hover,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

// COMPONENT
const ManagePropertyFormComp = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { propertyDetails } = useSelector((state) => state.propertyCurrent);
  const { loading } = useSelector((state) => state.displayOptions);

  const handlePropertyFormSubmit = (event) => {
    event.preventDefault();
  };
  const { images } = propertyDetails;
  if (loading) return null;
  if (!images) return null;

  return (
    <Stack
      className={classes.propertyContainer}
      spacing={2}
    >
      <ImageList className={classes.PropertyImagesPreviewDisplay} cols={3} rowHeight={164}>
        {images.map((image) => (
          <ImageListItem key={image}>
            <img
              src={image}
              alt={image}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>

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
              value={propertyDetails.name}
              label="Name of your property"
              variant="outlined"
              onChange={(e) => dispatch(changeCurrentPropertyField(e.target.value, 'name'))}
            />

            <FormControl
              required
            >
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={propertyDetails.type}
                onChange={(e) => dispatch(changeCurrentPropertyField(e.target.value, 'type'))}
                className={classes.type}
              >
                <FormControlLabel value="House" control={<Radio />} label="House" />
                <FormControlLabel value="Appartment" control={<Radio />} label="Appartment" />
                <FormControlLabel value="Other" control={<Radio />} label="Other" />
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
              value={propertyDetails.streetnumber}
              onChange={(e) => dispatch(changeCurrentPropertyField(e.target.value, 'streetnumber'))}
            />
            <TextField
              required
              id="street"
              label="Street"
              value={propertyDetails.streetname}
              onChange={(e) => dispatch(changeCurrentPropertyField(e.target.value, 'streetname'))}
            />
            <TextField
              required
              id="zipcode"
              label="Zip code"
              value={propertyDetails.zipcode}
              onChange={(e) => dispatch(changeCurrentPropertyField(e.target.value, 'zipcode'))}
            />
            <TextField
              required
              id="city"
              label="City"
              value={propertyDetails.city}
              onChange={(e) => dispatch(changeCurrentPropertyField(e.target.value, 'city'))}
            />
            {/* Country select field */}
            <FormControl>
              <InputLabel id="country-label">Country *</InputLabel>
              <Select
                required
                id="country"
                label="country"
                labelId="country-label"
                value={propertyDetails.country}
                className={classes.country}
                onChange={(e) => dispatch(changeCurrentPropertyField(e.target.value, 'country'))}
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
                value={propertyDetails.capacity}
                onChange={(e) => dispatch(changeCurrentPropertyField(e.target.value, 'capacity'))}
                label="Capacity"
                variant="outlined"
                className={classes.featuresItem}
              />
              <TextField
                required
                type="number"
                id="bedrooms"
                value={propertyDetails.bedroomscount}
                onChange={(e) => dispatch(changeCurrentPropertyField(e.target.value, 'bedroomscount'))}
                label="Bedrooms"
                className={classes.featuresItem}
              />
              <TextField
                required
                type="number"
                id="beds"
                value={propertyDetails.bedscount}
                onChange={(e) => dispatch(changeCurrentPropertyField(e.target.value, 'bedscount'))}
                label="Beds"
                className={classes.featuresItem}
              />
              <TextField
                required
                type="number"
                id="bathrooms"
                value={propertyDetails.bathroomscount}
                onChange={(e) => dispatch(changeCurrentPropertyField(e.target.value, 'bathroomscount'))}
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
              value={propertyDetails.description}
              onChange={(e) => dispatch(changeCurrentPropertyField(e.target.value, 'description'))}
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
              value={propertyDetails.weekprice}
              onChange={(e) => dispatch(changeCurrentPropertyField(e.target.value, 'weekprice'))}
              label="Price per week"
              type="tel"
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

export default ManagePropertyFormComp;
