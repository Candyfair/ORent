/* eslint-disable linebreak-style */
// IMPORTS
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
  Stack, ImageList, ImageListItem, Box, MobileStepper,
  IconButton,
} from '@mui/material/';
import { useTheme } from '@mui/material/styles';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

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

  // Slider for mobile
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Stack
      flexDirection="row"
      gap={0.5}
      className={classes.desktopPadding}
    >
      {/* Mobile view */}
      <Stack className={classes.photosMobile}>

        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    minHeight: 255,
                    display: 'block',
                    maxWidth: 400,
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step}
                  alt={step}
                />
              ) : null}
            </div>
          ))}
        </SwipeableViews>

        <Stack
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <MobileStepper
            steps={maxSteps}
            variant="dots"
            position="static"
            activeStep={activeStep}
            sx={{ maxWidth: 400, flexGrow: 1 }}
            nextButton={(
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                <ArrowForwardIosRoundedIcon />
              </IconButton>
            )}
            backButton={(
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                <ArrowBackIosNewRoundedIcon />
              </IconButton>
            )}
          />
        </Stack>

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
