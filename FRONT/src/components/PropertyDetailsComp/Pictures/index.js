/* eslint-disable linebreak-style */
import { makeStyles } from '@mui/styles';
import {
  Stack, Box, ImageList, ImageListItem,
} from '@mui/material/';

import PropTypes from 'prop-types';

// MUI STYLES
const useStyles = makeStyles(() => ({
}));

const Pictures = ({ images }) => {
  const classes = useStyles;

  const itemData = images;

  return (
    <Stack
      flexDirection="row"
      gap={1}
    >
      <Stack>

        <ImageList>
          {
            itemData.map((item) => (
              <ImageListItem key={item}>
                <img
                  src={`${item}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  loading="lazy"
                  alt="Property"
                />
              </ImageListItem>
            ))
          }
        </ImageList>

      </Stack>
    </Stack>
  );
};

Pictures.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Pictures;
