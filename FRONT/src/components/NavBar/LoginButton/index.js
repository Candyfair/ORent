/* eslint-disable linebreak-style */
// import { Stack, Button } from '@mui/material';

// MaterialUI import
import { useDispatch, useSelector } from 'react-redux';

import { Modal, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';

import { setModal } from '../../../redux/actions/modals';
import ModalContent from './ModalContent';
import ModalHeader from './ModalHeader';
import LoginForm from './Modals/LoginForm';
import AddCardModal from './Modals/AddCardModal';
import AddCardLoginNeededModal from './Modals/AddCardLoginNeededModal';
import RegisterForm from './Modals/RegisterForm';

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '300px',
    background: theme.palette.background.default,
    boxShadow: theme.custom.shadow.card,
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.down('md')]: {
      width: '100vw',
      height: '100%',
    },
  },
  responsiveModal: {

  },
}));

const LoginButton = () => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const { modal } = useSelector((state) => state.modals);

  return (
    <Modal
      open={modal}
      onClose={() => dispatch(setModal(false, 'none'))}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={classes.modal}>
        <ModalHeader />
        <Stack
          className={classes.responsiveModal}
        >
          <ModalContent>
            <LoginForm />
            <RegisterForm />
            <AddCardModal />
            <AddCardLoginNeededModal />

          </ModalContent>
        </Stack>
      </Box>
    </Modal>
  );
};

export default LoginButton;

// <Stack
//   alignItems="center"
//   justifyContent="center"
// >
//   <Button
//     variant="contained"
//     color="secondary"
//     disableElevation
//   >
//     Login
//   </Button>
// </Stack>
// );
