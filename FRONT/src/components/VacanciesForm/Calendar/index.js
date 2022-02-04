import { useSelector, useDispatch } from 'react-redux';
import { TextField, Stack, Typography } from '@mui/material/';
import { setDate } from '../../../redux/actions/vacancy';

export default function SimpleCalendar() {
  const dispatch = useDispatch();
  const { startDate } = useSelector((state) => state.vacancy);

  return (
    <Stack
      direction="column"
      gap={2}
    >
      <TextField
        id="date"
        label="Select a date"
        type="date"
        value={startDate}
        onChange={(e) => dispatch(setDate(e.target.value))}
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Typography>
        {startDate}
      </Typography>
    </Stack>

  );
}
