import { Alert } from '@mui/material';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { setSnackbar } from '../../redux/actions/displayOptions';


const useStyles = makeStyles((theme) => ({
    snackbar: {

    },
    alert: {
        width: '100%',
        marginTop: '4rem',
    }
}))

const SnackbarModule = () => {

    const dispatch = useDispatch();
    const classes = useStyles()

    const { snackbar, snackbarStatus, snackbarMessage, vertical, horizontal } = useSelector((state) => state.displayOptions)

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      dispatch(setSnackbar(false));
    };
  

    return(
        <div className={classes.snackbar}>
            <Snackbar 
                open={snackbar}
                autoHideDuration={5000}
                onClose={handleClose}
                anchorOrigin={{ vertical, horizontal }}
                key={vertical + horizontal}
            >
                <Alert 
                    className={classes.alert}
                    onClose={handleClose}
                    severity={snackbarStatus}
                    variant='standard'
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default SnackbarModule;

