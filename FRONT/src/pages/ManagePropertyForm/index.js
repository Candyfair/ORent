// IMPORTS
import { makeStyles } from '@mui/styles';
import { Stack, Typography } from '@mui/material/';

import ManagePropertyFormComp from '../../components/ManagePropertyFormComp';
import VacanciesForm from '../../components/VacanciesForm';

// MUI STYLES
const useStyles = makeStyles((theme) => ({
  manageProperty: {
    padding: theme.spacing(3),
    width: '100%',
  },
}));

// COMPONENT
const ManagePropertyForm = () => {
  const classes = useStyles();

  return (
    <Stack
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      spacing={5}
      className={classes.ManageProperty}
    >
      {/* Titre */}
      <Typography
        variant="h4"
        align="left"
      >
        Manage your property
      </Typography>

      {/* Bloc de composants */}
      <Stack
        flexDirection="row"
        gap={5}
      >

        <ManagePropertyFormComp />
        <VacanciesForm />
      </Stack>
    </Stack>
  );
};

export default ManagePropertyForm;
