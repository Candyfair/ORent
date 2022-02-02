/* eslint-disable linebreak-style */
// IMPORTS
import {
  Stack, ImageList, ImageListItem,
} from '@mui/material/';

import PropTypes from 'prop-types';

// MUI IMAGE GALLERY FUNCTION
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Pictures = ({ images }) => {
  const itemData = images;

  return (
    <Stack
      flexDirection="row"
      gap={1}
    >
      <Stack>

        <ImageList
          variant="quilted"
          col={4}
          rowHeight={250}
        >
          {
            itemData.map((item) => (
              <ImageListItem key={item} cols={1} rows={1}>
                <img
                  {...srcset(item, 121, item, item)}
                  alt={item}
                  loading="lazy"
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
