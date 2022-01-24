/* eslint-disable linebreak-style */
// MaterialUI import
import { useDispatch, useSelector } from 'react-redux';

import { Modal, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';

import { setModal } from '../../redux/actions/modals';
import ModalHeader from './ModalHeader';
import LoginForm from './Modals/LoginForm';
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
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    padding: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      width: '100vw',
      height: '100vh',
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
          <LoginForm />
          <RegisterForm />
          <AddCardLoginNeededModal />
        </Stack>
      </Box>
    </Modal>
  );
};

export default LoginButton;
