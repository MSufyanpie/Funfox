import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { styled } from '@mui/system';
import { Week1CardStyle } from "../Styles/StyleConstants";
import Alarmhouse from '../assets/Images/alarm&house.png'
import Moonhouse from '../assets/Images/moonhouse.png'
import Picframe from '../assets/Images/picframe.png'
import Sunset from '../assets/Images/sunset.png'
import Back from '../assets/Images/Rectangle 8.png'
import Alarm from '../assets/alarm.png'
import House from '../assets/house.png'

const InputWrapper = styled('div')({
  width: '70%',
  marginRight: '5%',
});

const CustomInput = styled('div')({
  position: 'relative',
});

const InputField = styled('input')(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: '5px',
  border: '1px dotted gray',
  outline: 'none',
  padding: '5px',
  width: 'calc(100% - 10px)', // Adjust padding for input
  '&:focus': {
    borderColor: theme.palette.primary.main,
  },
}));

const Underline = styled('div')({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '1px',
  backgroundColor: 'black', // Change this color to match your underline color
});

const HintWrapper = styled('div')({
  width: '25%',
  display: 'flex',
  alignItems: 'center',
});

const Week2 = () => {
  const CardBody = () => {
    return (
      <>
        <Box>
          <Typography variant="h4" sx={{ fontFamily: 'Short Stack', marginTop: '2%', textAlign: 'left' }}>
            Can you figure out the definition of setting from the following examples?
          </Typography>
        </Box>
        <Typography variant="h6" sx={{ fontFamily: 'Short Stack', marginTop: '2%', textAlign: 'left' }}>
          (take a minute to think about this)
        </Typography>
      </>
    );
  };

  const ImagesContainer = () => {
    return (
      <>
        <Grid container spacing={2} style={{ padding: '10px 0' }}>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={0} style={{ height: '100%' }}>
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <img src={Sunset} alt="First Image" style={{ width: '50%', height: '15vh', borderRadius: '10px' }} />
                <Typography variant="h6" sx={{ fontFamily: 'Short Stack', marginTop: '2%' }}>Sunny day at a beach</Typography>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={0} style={{ height: '100%' }}>
              <Grid item xs={2}></Grid>
              <Grid item xs={8} >
                <img src={Moonhouse} alt="Second Image" style={{ width: '50%', height: '15vh', borderRadius: '10px', zIndex: 1 }} />
                <Typography variant="h6" sx={{ fontFamily: 'Short Stack', marginTop: '2%' }}>A cold rainy night in a haunted house in October</Typography>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          </Grid>
        </Grid>
        <Typography variant="h6" sx={{ fontFamily: 'Short Stack', marginTop: '2px' }}>
          So, what do you think the definition of setting is?
        </Typography>
      </>
    );
  };

  const InputFieldComponent = () => {
    return (
      <Grid container alignItems="center">
        <div style={{ width: '75%', marginRight: '5%', display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1" component="label" htmlFor="name" style={{ marginRight: '5px', fontSize: '16px', fontFamily: 'Short Stack' }}>
            Any guess?
          </Typography>
          <div style={{ position: 'relative', width: '100%' }}>
            <input
              id="name"
              disabled
              style={{
                background: `url(${Back}) no-repeat`,
                backgroundSize: 'cover',
                backgroundColor: 'transparent',
                borderRadius: '5px',
                padding: '5px',
                border: 'none',
                width: '100%',
                height: '100%',
                color: 'black',
                fontSize: '16px',
                fontFamily: 'Arial',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '5px',
                left: '10px',
                width: '98%',
                height: '2px',
                backgroundColor: 'grey',
                zIndex: '1',
              }}
            ></div>
          </div>
        </div>
        <div style={{ width: '20%', display: 'flex', alignItems: 'center' }}>
          <Typography variant="h5" sx={{ fontFamily: 'Short Stack', marginTop: '2px' }}>Hint:</Typography>
          <img src={Alarmhouse} alt="hint" />
        </div>
      </Grid>
    )
  }

  const LastElement = () => {
    return (
      <>
        <Card sx={{ border: '2px dotted #A4FDFB', backgroundColor: '#25A3A1', width: '100%', height: '5vh' }}>
          <Box>
            <Typography sx={{ fontFamily: 'Short Stack', textAlign: 'justify' }} color={'white'} variant="h6">
              Setting is the time <img src={Alarm} alt="Home Icon" style={{ width: '1.3em', height: '1.3em', verticalAlign: 'middle' }} /> and place <img src={House} alt="Alarmhouse Icon" style={{ width: '1.3em', height: '1.3em', verticalAlign: 'middle' }} /> of a story. It often answers the questions: when? and where?
            </Typography>
          </Box>
        </Card>
        <Typography sx={{ fontFamily: 'Short Stack', textAlign: 'justify' }} color={'black'} variant="h6">
          The time of the story could be in the past, future, day, night, summer or winter.
          A story may take place in a school, a mall, a desert, an airplane or in a variety
          of other places
        </Typography>
      </>
    )
  }

  return (
    <Grid container justifyContent="center">
      <Card sx={Week1CardStyle}>
        <CardContent>
          <Grid container>
            <CardBody />
            <ImagesContainer />
            <InputFieldComponent />
            <LastElement />
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Week2;
