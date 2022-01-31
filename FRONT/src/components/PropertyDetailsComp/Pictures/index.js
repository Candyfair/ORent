/* eslint-disable linebreak-style */
import { makeStyles } from '@mui/styles';
import { Stack, Box } from '@mui/material/';

// MUI STYLES
const useStyles = makeStyles((theme) => ({
}));

const Pictures = () => {
  const classes = useStyles;

  return (
    <Stack
      flexDirection="row"
      gap={1}
    >
      <Stack>
        <Box
          sx={{
            borderRadius: 1,
            bgcolor: 'grey.200',
            minWidth: 560,
            minHeight: 505,
          }}
        />
      </Stack>

      <Stack
        flexDirection="row"
        alignContent="stretch"
        gap={1}
        flexWrap="wrap"
        className={classes.otherPhotos}
      >
        <Box
          sx={{
            borderRadius: 1,
            bgcolor: 'grey.200',
            minWidth: 270,
            minHeight: 250,
          }}
        />
        <Box
          sx={{
            borderRadius: 1,
            bgcolor: 'grey.200',
            minWidth: 270,
            minHeight: 250,
          }}
        />
        <Box
          sx={{
            borderRadius: 1,
            bgcolor: 'grey.200',
            minWidth: 270,
            minHeight: 250,
          }}
        />
        <Box
          sx={{
            borderRadius: 1,
            bgcolor: 'grey.200',
            minWidth: 270,
            minHeight: 250,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default Pictures;
