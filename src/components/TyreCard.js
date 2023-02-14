import { Box, Typography } from '@mui/material';

export default function ({ image, name }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: { xs: '48%', sm: '160px' },
        p: '3px',
        m: '3px',
        borderStyle: 'solid',
        borderWidth: '0.1px',
        borderRadius: '5px',
      }}
    >
      <img src={image} style={{ width: '100%', height: 'auto', borderRadius: '2px' }} />
      <Box sx={{ height: '35px', display: 'flex', p: '3px' }}>
        <Typography sx={{ fontSize: '11px', fontWeight: 700 }}>{name}</Typography>
      </Box>
    </Box>
  );
}
