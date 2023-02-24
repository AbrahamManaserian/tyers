import { Box, Grid, Skeleton, Typography } from '@mui/material';

export default function CardSceleton({ getText, type, darkMode }) {
  return (
    <Grid item xs={12} container justifyContent="center" padding="0 12px 12px 12px">
      <Typography
        width="100%"
        // variant="body3"
        sx={{
          textDecoration: 'underline',
          textUnderlineOffset: '7px',
          textDecorationThickness: '0.5px',
          paddingBottom: '15px',
        }}
      >
        {getText(type)}
      </Typography>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        sx={{
          boxShadow: `${darkMode !== 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgb(245, 245, 245)'} 0 1px 3px`,
          p: '5px',
          height: '321px',
          borderRadius: '10px',
        }}
      >
        <Box p="10px">
          <Skeleton variant="rounded" width={'100%'} height={'172px'} />
        </Box>
        <Box p="15px 10px 5px 10px">
          <Skeleton variant="rounded" width={'100%'} height={'40px'} />
        </Box>
        <Box p="5px 10px 5px 10px">
          <Skeleton variant="rounded" width={'100%'} height={'40px'} />
        </Box>
      </Grid>
      <Grid
        item
        xs
        sx={{
          display: { xs: 'none', sm: 'grid' },
          boxShadow: `${darkMode !== 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgb(245, 245, 245)'} 0 1px 3px`,
          p: '5px',
          height: '321px',
          borderRadius: '10px',
          marginLeft: '10px',
        }}
      >
        <Box p="10px">
          <Skeleton variant="rounded" width={'100%'} height={'172px'} />
        </Box>
        <Box p="15px 10px 5px 10px">
          <Skeleton variant="rounded" width={'100%'} height={'40px'} />
        </Box>
        <Box p="5px 10px 5px 10px">
          <Skeleton variant="rounded" width={'100%'} height={'40px'} />
        </Box>
      </Grid>
      <Grid
        item
        xs
        sx={{
          display: { xs: 'none', sm: 'none', md: 'grid' },
          boxShadow: `${darkMode !== 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgb(245, 245, 245)'} 0 1px 3px`,
          p: '5px',
          height: '321px',
          borderRadius: '10px',
          marginLeft: '10px',
        }}
      >
        <Box p="10px">
          <Skeleton variant="rounded" width={'100%'} height={'172px'} />
        </Box>
        <Box p="15px 10px 5px 10px">
          <Skeleton variant="rounded" width={'100%'} height={'40px'} />
        </Box>
        <Box p="5px 10px 5px 10px">
          <Skeleton variant="rounded" width={'100%'} height={'40px'} />
        </Box>
      </Grid>
    </Grid>
  );
}
