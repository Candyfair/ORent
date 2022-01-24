/* eslint-disable linebreak-style */
// ==== Imports
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import AddCardModal from './AddCardModal';
import AddCardLoginNeededModal from './AddCardLoginNeededModal';

const Modals = () => (
  <div>
    Modals
    <RegisterForm>
      RegisterForm
    </RegisterForm>

    <LoginForm>
      LoginForm
    </LoginForm>

    <AddCardModal>
      AddCardModal
    </AddCardModal>

    <AddCardLoginNeededModal>
      AddCardLoginNeededModal
    </AddCardLoginNeededModal>
  </div>
);

export default Modals;
