import PropTypes from 'prop-types';
import moment from 'moment';
import { Stack, Typography } from '@mui/material';

/* eslint-disable linebreak-style */
const BookingDetailsComp = ({
  startDate,
  endDate,
  streetNumber,
  streetName,
  zipCode,
  city,
  country,
  host,
  hostEmail,
  weekPrice,
}) => (
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
          {moment(startDate).format('DD/MM/YYYY')}
        </Typography>
        <Typography
          fontSize="0.9rem"
        >
          15:00
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
          {moment(endDate).format('DD/MM/YYYY')}
        </Typography>
        <Typography
          fontSize="0.9rem"
        >
          11:00
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
        {streetNumber} {streetName}, {zipCode} {city} - {country}
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
        Username: {host} - Email: {hostEmail}
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
          {weekPrice}€ x 1 week
        </Typography>
        <Typography
          fontSize="0.9rem"
        >
          {weekPrice}€
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
          {weekPrice}€
        </Typography>
      </Stack>
    </Stack>
  </Stack>
);

BookingDetailsComp.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  streetNumber: PropTypes.number.isRequired,
  streetName: PropTypes.string.isRequired,
  zipCode: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  host: PropTypes.string.isRequired,
  hostEmail: PropTypes.string.isRequired,
  weekPrice: PropTypes.number.isRequired,
};

export default BookingDetailsComp;
