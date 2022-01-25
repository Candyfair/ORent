import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}));

const NavabarOffset = () => {
  const classes = useStyles();

  return (
    <Box sx={{ padding: '8px 0' }} className={classes.offset} />
  );
};

export default NavabarOffset;
