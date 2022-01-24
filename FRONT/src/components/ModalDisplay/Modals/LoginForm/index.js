/* eslint-disable linebreak-style */
import { useSelector } from 'react-redux';

const LoginForm = () => {
  const { element } = useSelector((state) => state.modals);

  if (element !== 'login') return null;

  return (
    <div>
      LoginForm
    </div>
  );
};

export default LoginForm;
