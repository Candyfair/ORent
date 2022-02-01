import { Stack, Typography } from '@mui/material';

/* eslint-disable linebreak-style */
const BookingDetailsComp = () => (
  <Stack
    flexDirection="column"
    gap={4}
  >
    <Stack
      flexDirection="row"
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
          Tue, 5 Feb 2021
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
          Mon, 11 Feb 2021
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
        59 Chungjeong-ro D'Ovile 1110, Seaodaemun-gu,
        Seoul 120-012, South Korea
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
        Tel: +89 000 0000 - Email: host@property.com
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
          534€ x 1 week
        </Typography>
        <Typography
          fontSize="0.9rem"
        >
          534€
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
          534€
        </Typography>
      </Stack>
    </Stack>
  </Stack>
);

export default BookingDetailsComp;
