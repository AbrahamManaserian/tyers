import { Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import { AppContext } from '../App';

export default function HomePage() {
  const language = useContext(AppContext);
  // console.log(language);
  return (
    <Grid item container xs={12} overflow="scroll" flexWrap="wrap">
      <Typography variant="h1">
        Պինոկիո խանութ-սրահը հիմնադրվել է 2022թ. ապրիլին: Պինոկիոն մուլտիբրենդային մանկական կոշիկի խանութ-սրահ
        է, որտեղ կարող եք գտնել բարձրորակ և հարմարավետ կոշիկների, հողաթափերի մեծ տեսականի տարբեր տարիքային
        խմբերի երեխաների համար: Խանութ-սրահում ներկայացված են ռուսական Kotofey, ֆիննական Mursu, լիբանանյան
        Ten-ten, իսպանական Xti, պորտուգալական Beppi և լեհական ապրանքանիշեր: Բացի մանկական կոշիկներից
        խանութ-սրահում ներկայացված են նաև հայկական արտադրության գուլպաներ, պայուսակներ, ձեռագործ գլխազարդեր,
        տիկնիկներ: Մեր առաջնային նպատակն է մեր հաճախորդներին որակյալ ապրանքատեսակով ապահովելը, նրանց
        պահանջները բավարարելը և գոհացնելը, որի համար մենք անում ենք հնարավոր ամեն բան:
      </Typography>
    </Grid>
  );
}
