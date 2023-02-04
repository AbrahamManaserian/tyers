import { Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import { AppContext } from '../App';

export default function HomePage() {
  const language = useContext(AppContext);
  // console.log(language);
  return (
    <Grid item container xs={12}>
      <Typography>Home page</Typography>
    </Grid>
  );
}
