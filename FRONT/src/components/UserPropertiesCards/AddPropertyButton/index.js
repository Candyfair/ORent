/* eslint-disable linebreak-style */
// === IMPORTS
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { makeStyles } from '@mui/styles';
import {
  Stack,
  Button,
} from '@mui/material/';
import AddIcon from '@mui/icons-material/Add';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';

// === Styles
const useStyles = makeStyles((theme) => ({
  addPropertyButton: {
    width: '100%',
    height: '100%',
    minHeight: '300px',
    boxShadow: theme.custom.shadow.primary,
  },
  button: {
    width: '70%',
    color: theme.palette.common.white,
    fontWeight: 700,
  },

}));

// === COMPONENT
const AddPropertyButton = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { username } = useParams();
  const { isLogged } = useSelector((state) => state.userCurrent);

  if (!isLogged) return null;

  return (

    <Stack
      className={classes.addPropertyButton}
      justifyContent="center"
      alignItems="center"
    >
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={() => navigate(`/${username}/add-property`)}
        disableElevation
        startIcon={<Stack direction="row" justifyContent="center" alignItems="center"><AddIcon /> <MapsHomeWorkIcon /></Stack>}
      >
        Add a property
      </Button>
    </Stack>

  );
};

export default AddPropertyButton;
