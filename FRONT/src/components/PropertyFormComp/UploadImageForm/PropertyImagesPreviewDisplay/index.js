/* eslint-disable linebreak-style */
// IMPORTS
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@mui/styles';

import {
    ImageList, ImageListItem, Stack, Typography
} from '@mui/material/';

import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';

// MUI STYLES
const useStyles = makeStyles((theme) => ({
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
  }

}));

// COMPONENT
const PropertyImagesPreviewDisplay = () => {
  const classes = useStyles();

  // Dispatch functions
  const dispatch = useDispatch();

  const {
    images
  } = useSelector((state) => state.propertyCreate);


  return (

    <ImageList className={classes.PropertyImagesPreviewDisplay} cols={3} rowHeight={164}>
    { images.length === 0 && (
        <ImageListItem className={classes.textPreview}>
            <PhotoSizeSelectActualIcon sx={{fontSize: '5rem'}} />
            <Typography>Pictures Preview</Typography>
        </ImageListItem>
    )}
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

  );
};

export default PropertyImagesPreviewDisplay;
