import React from 'react';
import { Modal, Button, IconButton, Typography, Grid } from '@mui/material';
import Cross from '../assets/Images/cross.png'
import Alarmhouse from '../assets/Images/alarm&house.png'
import Back from '../assets/Images/Rectangle 8.png'

function CustomModal({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: open ? 'blur(8px)' : 'none', // Apply backdrop filter when modal is open
        transition: 'backdrop-filter 0.3s ease-in-out', // Add transition for smoother effect
      }}
    >
      <div style={{
        position: 'absolute',
        top: '5%',
        left: '5%',
        right: '5%',
        bottom: '5%',
        background: '#11111133',
        boxShadow: 24,
        borderRadius: '20px',
        border:'2px solid white',
        outline: 'none',
        overflow: 'auto',
        padding: 16
      }}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          style={{ position: 'absolute', top: 0, right: 0 }}
        >
         <img src={Cross} />
        </IconButton>
        <div style={{marginTop:'20%'}}>
        <Typography variant="h6" sx={{ fontFamily: 'Short Stack', marginTop: '2px' }}>
        So, what do you think the definition of setting is?
        </Typography>
        <Grid container alignItems="center">
          <div style={{ width: '75%', marginRight: '5%', display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1" component="label" htmlFor="name" style={{ marginRight: '5px', fontSize: '16px', fontFamily: 'Short Stack' }}>
              Any guess&#63;
            </Typography>
            <div style={{ position: 'relative', width: '100%' }}>
              <input
                id="name"
                disabled
                defaultValue={' > Setting is the time and place of the story.'}
                style={{
                  background: `url(${Back}) no-repeat`,
                  backgroundSize: 'cover',
                  backgroundColor: 'transparent',
                  borderRadius: '5px',
                  padding: '5px',
                  border: 'none',
                  width: '100%',
                  height:'100%',
                  color: 'black',
                  fontSize: '16px', 
                  fontFamily: 'Short Stack', 
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
        </div>
        
      </div>
    </Modal>
  );
}

export default CustomModal;
