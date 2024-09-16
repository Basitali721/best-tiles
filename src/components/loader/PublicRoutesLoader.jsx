import { Suspense } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Card, LinearProgress } from '@mui/material';

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const LoaderWrapper = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1301,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(117deg, #000000, #57689B, #5B7D86, #000000, #000000)',
});

const Loader = () => (
  <LoaderWrapper>
    <Box display="flex" justifyContent="center" alignItems="center" width={1} height={1}>
      <Card
        sx={{
          p: 3,
          width: 1,
          borderRadius: { xs: 0, sm: '30px' },
          height: 1,
          background:
            'linear-gradient(130deg, #000 14.48%, #667BB7 43.81%, rgba(115, 157, 157, 0.58) 55.53%, rgba(37, 47, 50, 0.56) 78.5%, #000 92.67%)',
          boxShadow: '0px 4px 4.6px 0px rgba(0, 0, 0, 0.54)',
          overflow: 'hidden', // Clip the content that overflows the Card
          position: 'relative', // Required for absolute positioning
        }}
      >
        {/* <Box display="flex" justifyContent="center" alignItems="center" width={1} height={1}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width={250}
            height={1}
          >
            <img src="/assets/loading-logo/split-logo-left.svg" alt="" />
            <img src="/assets/loading-logo/split-logo-right.svg" alt="" />
          </Box>
        </Box> */}
        <Box display="flex" justifyContent="center" alignItems="center" width={1} height={1}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width={450}
            height={1}
            style={{ position: 'relative' }}
          >
            <img
              src="/assets/loading-logo/split-logo-left.svg"
              alt=""
              width="50%"
              style={{
                position: 'absolute',
                left: 0,
                animation: 'slideLeft 1s',
              }}
            />
            <img
              src="/assets/loading-logo/split-logo-right.svg"
              alt=""
              width="50%"
              style={{
                position: 'absolute',
                right: 0,
                animation: 'slideRight 1s',
              }}
            />
          </Box>
        </Box>
      </Card>
    </Box>

    <LinearProgress color="primary" />
  </LoaderWrapper>
);

const PublicRoutesLoadable = (Component) => (props) => (
  <Suspense fallback={<Loader />}>
    <Component {...props} />
  </Suspense>
);

export default PublicRoutesLoadable;
