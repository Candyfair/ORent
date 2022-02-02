/* eslint-disable linebreak-style */
// IMPORTS
import { makeStyles } from '@mui/styles';
import {
  Stack, ImageList, ImageListItem, Box,
} from '@mui/material/';

import SwipeableViews from 'react-swipeable-views';

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

// MUI STYLES
const useStyles = makeStyles((theme) => ({
  photosDesktop: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  photosMobile: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  desktopPadding: {
    [theme.breakpoints.up('md')]: {
      padding: `0 ${theme.spacing(3)}`,
    },
  },
}));

// COMPONENT
const Pictures = ({ images }) => {
  const classes = useStyles();

  // New photos arrays generated for desktop
  const mainImage = images.find((image) => image[0]);
  const newArray = [...images];
  const otherImages = newArray.slice(1, newArray.length);

  return (
    <Stack
      flexDirection="row"
      gap={0.5}
      className={classes.desktopPadding}
    >
      <Stack className={classes.photosMobile}>
        <SwipeableViews>
          {images.map((item) => (
            <div key={item}>
              <Box
                component="img"
                sx={{
                  minHeight: 255,
                  display: 'block',
                  maxWidth: '100%',
                  overflow: 'hidden',
                }}
                src={item}
                alt="Property"
              />
            </div>

          ))}
        </SwipeableViews>
      </Stack>

      {/* Première image desktop */}
      <Stack className={classes.photosDesktop}>
        <ImageList sx={{ width: 560, height: 504 }} cols={1}>
          <ImageListItem>
            <img
              src={`${mainImage}?w=560&h=500&fit=crop&auto=format`}
              alt="My property"
            />

          </ImageListItem>
        </ImageList>
      </Stack>

      {/* Autres images desktop */}
      <Stack className={classes.photosDesktop}>

        <ImageList
          variant="quilted"
          col={2}
          rowHeight={250}
        >
          {
            otherImages.map((item) => (
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
