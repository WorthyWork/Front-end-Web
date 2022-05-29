import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Root = styled('div')({
  // minHeight: "55vh",
  flexGrow: 1,
  margin: "auto",
  // height: "auto",
  height: "87vh",
  marginTop: "2rem"
});

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};
export default function PersonalityTest() {
  const [progress, setProgress] = React.useState(1);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 66 ? 1 : prevProgress + 1));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Root>
       <Box sx={{ width: '90%',ml:"5rem" }}>
      <LinearProgressWithLabel value={progress} />
    </Box>
    </Root>
  )
}