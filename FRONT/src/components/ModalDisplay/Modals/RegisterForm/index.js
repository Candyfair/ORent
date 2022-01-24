/* eslint-disable linebreak-style */
import { useSelector } from 'react-redux';

const RegisterForm = () => {
  const { element } = useSelector((state) => state.modals);

  if (element !== 'register') return null;

  return (
    <div>
      RegisterForm
    </div>
  );
};

export default RegisterForm;
