// IMPORTS
import { makeStyles } from '@mui/styles';
import { Stack, Typography } from '@mui/material/';

// MUI STYLES
const useStyles = makeStyles((theme) => ({
  content: {
    margin: '0 auto',
    paddingTop: theme.spacing(2),
    width: '60%',
    [theme.breakpoints.down('md')]: {
      width: '80%',
      paddingTop: theme.spacing(4),
    },
  },

}));

// COMPONENT
const TermsOfUse = () => {
  const classes = useStyles();

  return (
    <Stack
      className={classes.content}
      spacing={2}
    >
      <Typography variant="h4">
        Terms of Use
      </Typography>
      <Typography variant="body">
        Lorem ipsum dolor sit amet. Eum fugit repellendus aut magnam accusantium ad consequuntur ipsum est porro dolores. Eos deleniti harum ea fugit totam sit nostrum perferendis ad recusandae similique. Eos ullam repellendus non debitis rerum sit cumque eius ut dignissimos consequatur 33 minima natus vel vero totam cum recusandae doloribus. Ut voluptas nihil voluptatem sint a internos molestiae qui voluptatem quas et quia corrupti voluptas illo.
      </Typography>

      <Typography>
        Sed delectus delectus qui doloribus adipisci id aspernatur reprehenderit. Hic exercitationem animi qui quod architecto non inventore dignissimos ut dolor dolor id impedit amet. Aut molestiae perspiciatis sed similique sint non minima nesciunt.
      </Typography>
      <Typography>

        Eos inventore odio sed rerum sapiente in iure atque et repellat Quis et recusandae placeat! Est veritatis expedita et galisum quia est nobis quibusdam et facere cupiditate et incidunt facilis quo minus corporis ut aperiam eaque!
      </Typography>
      <Typography>

        Eum asperiores error rem placeat voluptas et quis aspernatur qui eaque velit est ullam nisi sed eaque vitae. Et minima possimus et dolor exercitationem eos animi sequi.
      </Typography>
      <Typography>

        Sit repellendus aut doloremque tempora rem accusantium autem id asperiores repudiandae. Qui minus aliquid et commodi voluptatem ut doloremque cumque et ullam magnam quo ducimus consequuntur et necessitatibus enim!
      </Typography>
      <Typography>

        Ut reiciendis temporibus ut ratione voluptate ut quasi quasi et quibusdam perspiciatis ad velit quia eum possimus voluptatibus. Et quasi corrupti quo ipsa sunt est aspernatur nobis autem nulla est voluptatibus repellendus.
      </Typography>
      <Typography>

        Rem dicta suscipit ut quidem molestias eos voluptatum aspernatur ad odio cumque non unde voluptas. Aut consequuntur eius a ullam eveniet qui dolorem minima quo minus voluptates quo maxime magnam sit laborum voluptate.
      </Typography>
    </Stack>
  );
};

export default TermsOfUse;
