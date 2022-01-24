/* eslint-disable linebreak-style */
import { useSelector } from 'react-redux';

const AddCardLoginNeededModal = () => {
  const { element } = useSelector((state) => state.modals);

  if (element !== 'loginNeeded') return null;

  return (
    <div>
      AddCardLoginNeededModal
    </div>
  );
};

export default AddCardLoginNeededModal;
