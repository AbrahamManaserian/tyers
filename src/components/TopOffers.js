import { Box, Skeleton, Typography } from '@mui/material';
import TyreCard from './TyreCard';

import { useEffect, useRef, useState } from 'react';

export default function Topoffers({ getText, tyres, mode, type }) {
  const [index, setIndex] = useState(0);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const timeoutRef = useRef(null);
  const delay = 6000;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    if (tyres.length) {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) => {
            let length;
            if (windowSize.current[0] < 600) {
              length = tyres.length - 1;
            } else if (windowSize.current[0] >= 600 && windowSize.current[0] < 900) {
              length = Math.ceil((tyres.length - 1) / 2);
            } else {
              length = Math.ceil((tyres.length - 1) / 3);
            }
            return prevIndex === length ? 0 : prevIndex + 1;
          }),
        delay
      );

      return () => {
        resetTimeout();
      };
    }
  }, [index, tyres]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'scroll',
        paddingLeft: '5px',
        // marginBottom: '100px',
      }}
    >
      {/* <Typography sx={{ width: '100%' }}>Top offers</Typography> */}
      <Typography
        width="100%"
        // variant="body3"
        sx={{
          textDecoration: 'underline',
          textUnderlineOffset: '7px',
          textDecorationThickness: '0.5px',
          paddingBottom: '5px',
        }}
      >
        {getText(type)}
      </Typography>
      <div style={{ overflow: 'hidden' }}>
        <div
          className={`${index === 0 ? 'slideshowSlider1' : 'slideshowSlider'}`}
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {tyres.map((item, index) => {
            return (
              <Box
                key={index}
                sx={{
                  p: '5px',
                  display: 'inline-block',
                  overflow: 'hidden',
                  width: { xs: '100%', sm: '50%', md: '33.3%' },
                }}
              >
                <TyreCard
                  widthBox={{ xs: '97%', sm: '95%' }}
                  getText={getText}
                  id={item.id}
                  mode={mode}
                  season={item.season}
                  imgUrl={item.smallImage}
                  name={item.name}
                  width={item.width}
                  height={item.height}
                  diameter={item.diameter}
                  price={item.price}
                />
              </Box>
            );
          })}
        </div>
        <div className="slideshowDots">
          <div
            style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', flexWrap: 'wrap' }}
          >
            {tyres.map((_, idx) => {
              if (idx < tyres.length / 3) {
                return (
                  <div
                    key={idx}
                    className={`slideshowDot${index === idx ? ' active' : ''}`}
                    onClick={() => {
                      setIndex(idx);
                    }}
                  >
                    <div
                      style={{
                        width: 14,
                        height: 14,
                        backgroundColor: '#00CDEC',
                        borderRadius: '50%',
                        margin: 'auto',
                        marginTop: '4px',
                        opacity: index !== idx ? 0.4 : 1,
                      }}
                    />
                  </div>
                );
              } else if (idx < tyres.length / 2) {
                return (
                  <Box
                    sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}
                    key={idx}
                    className={`slideshowDot${index === idx ? ' active' : ''}`}
                    onClick={() => {
                      setIndex(idx);
                    }}
                  >
                    <div
                      style={{
                        width: 14,
                        height: 14,
                        backgroundColor: '#00CDEC',
                        borderRadius: '50%',
                        margin: 'auto',
                        marginTop: '4px',
                        opacity: index !== idx ? 0.4 : 1,
                      }}
                    />
                  </Box>
                );
              } else if (idx >= tyres.length / 2) {
                return (
                  <Box
                    sx={{ display: { xs: 'block', sm: 'none', md: 'none' } }}
                    key={idx}
                    className={`slideshowDot${index === idx ? ' active' : ''}`}
                    onClick={() => {
                      setIndex(idx);
                    }}
                  >
                    <div
                      style={{
                        width: 14,
                        height: 14,
                        backgroundColor: '#00CDEC',
                        borderRadius: '50%',
                        margin: 'auto',
                        marginTop: '4px',
                        opacity: index !== idx ? 0.4 : 1,
                      }}
                    />
                  </Box>
                );
              }
            })}
          </div>
        </div>
      </div>
      {/* <Box sx={{ display: 'flex', overflow: 'scroll', justifyContent: 'center' }}>
        {tyres.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                display: 'inline-block',
                maxHeight: { xs: 150, sm: 500 },
                minHeight: { xs: 100, sm: 300 },
                overflow: 'hidden',
                width: '100%',
              }}
            >
              <TyreCard
                widthBox="95%"
                getText={getText}
                id={item.id}
                mode={mode}
                season={item.season}
                imgUrl={item.smallImage}
                name={item.name}
                width={item.width}
                height={item.height}
                diameter={item.diameter}
                price={item.price}
              />
            </Box>
          );
        })}
      </Box> */}
    </Box>
  );
}
