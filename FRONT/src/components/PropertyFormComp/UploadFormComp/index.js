// IMPORTS
import { useDispatch, useSelector } from 'react-redux';


import { makeStyles } from '@mui/styles';
import { Stack, TextField, InputAdornment } from '@mui/material/';
import PhotoIcon from '@mui/icons-material/Photo';

import { changeNewPropertyField } from '../../../redux/actions/propertyCreate';

// MUI STYLES
const useStyles = makeStyles((theme) => ({

}));

// COMPONENT
const UploadFormComp = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const imageFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      dispatch(changeNewPropertyField(reader.result, 'image'));
    };
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    imageFile(file);
  };

  const { image } = useSelector((state) => state.propertyCreate);

  return (
    <Stack>
      {/* Upload photos */}
      <TextField
        type="file"
        id="upload"
        value={image}
        variant="outlined"
        multiple
        onChange={handleFileInputChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <PhotoIcon fontSize="small" />
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
};

export default UploadFormComp;
