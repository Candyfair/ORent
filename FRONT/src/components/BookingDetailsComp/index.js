import { useSelector } from 'react-redux';
import moment from 'moment';
import { Stack, Typography } from '@mui/material';

/* eslint-disable linebreak-style */
const BookingDetailsComp = () => {
  const {
    startdate,
    enddate,
    propertystreetnumber,
    propertystreetname,
    propertyzipcode,
    propertycity,
    propertycountry,
    propertyhost,
    porpertyhostemail, // à corriger
    // weekPrice, à rajouter pour booking details
  } = useSelector((state) => state.booking);

  return (
    <Stack
      flexDirection="column"
      width="50%"
      gap={4}
    >
      <Stack
        flexDirection="row"
        width="100%"
      >
        <Stack
          width="50%"
        >
          <Typography
            fontWeight="700"
            fontSize="1rem"
          >
            Check-in
          </Typography>
          <Typography
            fontSize="0.9rem"
          >
            {moment(startdate).format('DD/MM/YYYY')}
          </Typography>
        </Stack>
        <Stack
          width="50%"
        >
          <Typography
            fontWeight="700"
            fontSize="1rem"
          >
            Check-out
          </Typography>
          <Typography
            fontSize="0.9rem"
          >
            {moment(enddate).format('DD/MM/YYYY')}
          </Typography>
        </Stack>
      </Stack>
      <Stack>
        <Typography
          fontWeight="700"
          fontSize="1rem"
        >
          Getting there
        </Typography>
        <Typography
          fontWeight="700"
          fontSize="0.9rem"
        >
          Address
        </Typography>
        <Typography
          paragraph
          fontSize="0.9rem"
        >
          {propertystreetnumber} {propertystreetname}, {propertyzipcode} {propertycity} ({propertycountry})
        </Typography>
        <Typography
          fontWeight="700"
          fontSize="0.9rem"
        >
          Contact your host
        </Typography>
        <Typography
          fontSize="0.9rem"
        >
          Username : {propertyhost} - Email : {porpertyhostemail}
        </Typography>
      </Stack>
      <Stack>
        <Typography
          fontWeight="700"
          fontSize="1rem"
        >
          Payment info
        </Typography>
        <Stack
          flexDirection="row"
          gap={12}
        >
          <Typography
            fontSize="0.9rem"
          >
            500€ x 1 week
          </Typography>
          <Typography
            fontSize="0.9rem"
          >
            500€
          </Typography>
        </Stack>
        <Stack
          flexDirection="row"
          gap={12}
        >
          <Typography
            fontSize="0.9rem"
          >
            Service fee
          </Typography>
          <Typography
            fontSize="0.9rem"
          >
            included
          </Typography>
        </Stack>

        <Stack
          flexDirection="row"
          gap={20}
        >
          <Typography
            fontWeight="700"
            fontSize="0.9rem"
          >
            Total
          </Typography>
          <Typography
            fontWeight="700"
            fontSize="0.9rem"
          >
            500€
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BookingDetailsComp;
