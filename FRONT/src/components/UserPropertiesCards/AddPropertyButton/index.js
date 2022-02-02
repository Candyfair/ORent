/* eslint-disable linebreak-style */
// === IMPORTS
import { useNavigate } from 'react-router';
import { makeStyles } from '@mui/styles';
import {
  Stack,
  Button,
} from '@mui/material/';
import AddBoxIcon from '@mui/icons-material/AddBox';
// === Styles
const useStyles = makeStyles((theme) => ({
  addPropertyButton: {
    width: '100%',
    height: '100%',
    minHeight: '300px',
    boxShadow: theme.custom.shadow.primary
  },
  button: {
      width: '70%',
      color: theme.palette.common.white,
      fontWeight: 700
  }

}));

// === COMPONENT
const AddPropertyButton = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Stack
      className={classes.addPropertyButton}
      justifyContent='center'
      alignItems='center'
    >
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={() => navigate('/:username/add-property')}
              disableElevation
              startIcon={<AddBoxIcon />}
            >
              Add a property
            </Button>
    </Stack>
  );
};

export default AddPropertyButton;
