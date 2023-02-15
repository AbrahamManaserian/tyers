import { Box, Button, Typography } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
export default function ({ image, name, season, mode, getText }) {
  return (
    <Box
      sx={{
        //   rgb(245, 245, 245)
        width: { xs: '48%', sm: '180px' },
        overflow: 'hidden',
        height: '319px',
        boxShadow: `${mode !== 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgb(245, 245, 245)'} 0 1px 3px`,
        // borderStyle: 'solid',
        // borderWidth: '1px',
        transition: 'all 0.2s ease-out',
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.04,1.04)',
        },
        display: 'flex',
        flexDirection: 'column',
        p: '3px',
        margin: { xs: '5px 0 5px 0', sm: '5px 5px 5px 5px' },

        borderRadius: '10px',
      }}
    >
      <Box sx={{ height: '172px', overflow: 'hidden' }}>
        <img src={image} style={{ width: '100%', height: 'auto', borderRadius: '7px' }} />
      </Box>
      <Box
        sx={{
          height: '40px',
          //   display: 'flex',
          //   alignItems: 'flex-end',
          marginTop: '5px',
          overflow: 'hidden',
          //   textOverflow: 'ellipsis',
        }}
      >
        <Typography
          sx={{
            fontSize: '15px',
            fontWeight: 700,
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            // height: '50px',
            WebkitBoxOrient: 'vertical',
          }}
        >
          {name}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', marginTop: '5px', alignItems: 'center' }}>
        <Typography sx={{ fontSize: '14px', paddingRight: '10px' }}>215/75R16 </Typography>
        {season ? (
          <LightModeOutlinedIcon sx={{ color: '#fbc02d' }} fontSize="small" />
        ) : (
          <AcUnitIcon color="primary" fontSize="13px" />
        )}
      </Box>
      <Typography variant="h6" fontWeight={700} borderTop={1} sx={{ borderWidth: 0.1 }}>
        28000d
      </Typography>
      <Button
        // onClick={() => setChooseTyre('tyre')}
        variant="contained"
        color="success"
        size="small"
        sx={{
          borderRadius: '10px',
          m: '0 2px 0 2px',
          textTransform: 'none',
          fontSize: { xs: '12px', sm: '13px' },
        }}
      >
        {getText('addCart')}
      </Button>
    </Box>
  );
}
