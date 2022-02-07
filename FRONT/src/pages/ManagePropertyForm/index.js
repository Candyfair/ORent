// IMPORTS
import { makeStyles } from '@mui/styles';
import { Stack, Typography } from '@mui/material/';

import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import ManagePropertyFormComp from '../../components/ManagePropertyFormComp';
import VacanciesForm from '../../components/VacanciesForm';

import { fetchProperty } from '../../redux/actions/propertiesFetch';
import { fetchPropertyVacancies } from '../../redux/actions/vacancy';

// MUI STYLES
const useStyles = makeStyles((theme) => ({
  manageProperty: {
    padding: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(2),
    },
  },
  managePropertyComponents: {
    flexDirection: 'row',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));

// COMPONENT
const ManagePropertyForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProperty(id));
    dispatch(fetchPropertyVacancies(id));
  }, []);

  return (
    <Stack
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      spacing={5}
      className={classes.manageProperty}
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
        className={classes.managePropertyComponents}
        gap={5}
      >

        <ManagePropertyFormComp />
        <VacanciesForm />
      </Stack>
    </Stack>
  );
};

export default ManagePropertyForm;
