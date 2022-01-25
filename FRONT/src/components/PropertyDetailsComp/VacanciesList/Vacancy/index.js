import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { setModal } from '../../../../redux/actions/modals';

const Vacancy = () => {
  const dispatch = useDispatch();
  const { isLogged } = useSelector((state) => state.userCurrent);

  if (!isLogged) return null;

  return (
    <div>
      From 20/01 to 27/01
      <span>
        <Button
          variant="contained"
          disableElevation
          size="large"
          type="submit"
          onClick={() => dispatch(setModal(false, 'login'))}
        >
          Book
        </Button>
      </span>
    </div>
  );
};

export default Vacancy;
