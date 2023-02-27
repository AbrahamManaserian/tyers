import { Box, Grid, Typography } from '@mui/material';
import { Outlet, useParams } from 'react-router-dom';
import Image1 from '../images/tyres/big/0.webp';

export default function TyrePage() {
  const { item } = useParams();
  console.log(item);
  return (
    <Grid item container xs={12}>
      Tyres page
      {/* <Outlet /> */}
    </Grid>
  );
}




//  <Grid item xs={12} sm={7} container justifyContent="flex-end">

//         <Box
//           sx={{
//             display: 'flex',
//             flexWrap: 'wrap',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             paddingTop: '5px',
//           }}
//         >
//           <Box sx={{ width: '70px', p: '5px', overflow: 'hidden' }}>
//             <img style={{ width: '100%', height: 'auto', borderRadius: '10px' }} src={Image1} />
//           </Box>
//           <Box sx={{ width: '70px', p: '5px', overflow: 'hidden' }}>
//             <img style={{ width: '100%', height: 'auto', borderRadius: '10px' }} src={Image1} />
//           </Box>
//           <Box sx={{ width: '70px', p: '5px', overflow: 'hidden' }}>
//             <img style={{ width: '100%', height: 'auto', borderRadius: '10px' }} src={Image1} />
//           </Box>
//           <Box sx={{ width: '70px', p: '5px', overflow: 'hidden' }}>
//             <img style={{ width: '100%', height: 'auto', borderRadius: '10px' }} src={Image1} />
//           </Box>
//           <Box sx={{ width: '70px', p: '5px', overflow: 'hidden' }}>
//             <img style={{ width: '100%', height: 'auto', borderRadius: '10px' }} src={Image1} />
//           </Box>
//           {/* <Box sx={{ width: '70px', p: '5px', overflow: 'hidden' }}>
//             <img style={{ width: '100%', height: 'auto', borderRadius: '10px' }} src={Image1} />
//           </Box> */}
//         </Box>

//         <Box sx={{ maxWidth: '500px', p: '10px', overflow: 'hidden' }}>
//           <img style={{ width: '100%', height: 'auto', borderRadius: '10px' }} src={Image1} />
//         </Box>
//       </Grid>
//       <Grid item xs={5} container justifyContent="flex-start">
//         <Typography variant="h4">MICHELIN Pilot Alpin 5 225/45R18 95V XL MO1</Typography>
//       </Grid>