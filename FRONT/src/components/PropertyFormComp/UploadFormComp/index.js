// IMPORTS
import { makeStyles } from '@mui/styles';
import { Stack, TextField, InputAdornment } from '@mui/material/';
import PhotoIcon from '@mui/icons-material/Photo';

// MUI STYLES
const useStyles = makeStyles((theme) => ({

}));

// COMPONENT
const UploadFormComp = () => {
  const classes = useStyles();

  return (
    <Stack>
      {/* Upload photos */}
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
  );
};

export default UploadFormComp;
