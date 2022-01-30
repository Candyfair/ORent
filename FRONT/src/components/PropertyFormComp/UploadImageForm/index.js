/* eslint-disable linebreak-style */
// IMPORTS
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@mui/styles';
import {
    Stack, Button,
} from '@mui/material/';

import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

import PropertyImagesPreviewDisplay from './PropertyImagesPreviewDisplay'
import { changeNewPropertyField } from '../../../redux/actions/propertyCreate';

import { uploadImage } from '../../../redux/actions/propertyCreate';


// MUI STYLES
const useStyles = makeStyles((theme) => ({
  addPictureButton: {
    color: theme.palette.common.white,
    textTransform: 'none',
    fontWeight: 700
  },

}));

// COMPONENT
const UploadImageForm = () => {
  const classes = useStyles();

  // Dispatch functions
  const dispatch = useDispatch();
  const {
    uploadFile
  } = useSelector((state) => state.propertyCreate);
  
  const handlePropertyImageChange = (e) => {
    dispatch(changeNewPropertyField(e.target.files[0], 'uploadFile'))
    console.log(uploadFile)
    dispatch(uploadImage());
  }

  return (

    <Stack
        spacing={1}
        className={classes.upload}
    >
      <Button
        className={classes.addPictureButton}
        variant="contained"
        component="label"
        disableElevation
        startIcon={<AddAPhotoIcon />}
      >
        Upload your property pictures
        <input
          name='property_image'
          type="file"
          onChange={handlePropertyImageChange}
          hidden
          multiple
        />
      </Button>
      <PropertyImagesPreviewDisplay />
  </Stack>

  );
};

export default UploadImageForm;
