import React from 'react';
import "./App.css";
import CustomModal from './Components/Modal';
import Week2 from "./Components/Week2";
import Image1 from './assets/Images/funfox.png';
import Image2 from './assets/Images/pencil.png';
import Image3 from './assets/Images/bag.png';
import Image4 from './assets/Images/book.png';
import Image5 from './assets/Images/scale.png';
import Image6 from './assets/Images/green book.png';
import Image7 from './assets/Images/graduationhat.png';
import Back from './assets/Images/backbutton.png';
import Forward from './assets/Images/forwardbutton.png';
import Profile from './assets/Images/profileico.png';
import Info from './assets/Images/infoicon.png'; 
import Modalbutton from './assets/Images/modalbutton.png'
import Page1 from './assets/Images/page1.png';
import Page2 from './assets/Images/page2.png';
import { useState } from 'react';
import Week1 from './Components/Week1';
import Week from './assets/Images/week1.png'


function App() {

  const [pageno, setPageno] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);

  const handleForward = () => {
    if (pageno < 2) {
      setPageno(pageno + 1);
    }
  };

  const handleBackward = () => {
    if (pageno > 1) {
      setPageno(pageno - 1);
    }
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="app-container">
      <div className="left-column">
        <img src={Image2} alt="Image 2" className="image" />
        <img src={Image3} alt="Image 3" className="image" />
        <img src={Image4} alt="Image 4" className="image" />
      </div>
      <div className="week2-container">
        <span style={{display:'flex', justifyContent:'flex-start', marginTop:'0px', padding:'0px', marginBottom:'6px'}}>
        <img src={Image1} alt="Image 1" className="image1" />
        {pageno == 1 ? <img src={Week} style={{height:'50px', width:'100px'}} /> : <></> }
       
        </span>
        
        {pageno === 1 ? <Week1/> : <Week2/>}
        <div className="images-container">
          <img src={Profile} alt="Left Image" className="left-image" />
          <div className='middele-div'>
            <button className='navigation-button' onClick={handleBackward} disabled={pageno === 1}>
              <img src={Back} alt="Back" />
            </button>
            {pageno === 1 ? <img src={Page1} alt="Page 1" /> : <img src={Page2} alt="Page 1" /> }
            <button className='navigation-button' onClick={handleForward} disabled={pageno === 2}>
              <img src={Forward} alt="Forward" />
            </button>
          </div>
          <img src={Info} alt="Right Image" className="right-image" />
        </div>
      </div>
      <div className="right-column">
        <img src={Image5} alt="Image 5" className="image" />
        {pageno == 1 ?  <img src={Image6} alt="Image 6" className="image" /> : (<button className='navigation-button' onClick={handleModalOpen}> <img src={Modalbutton} alt="Image 6" className="image" /> </button>)}
       
        <img src={Image7} alt="Image 7" className="image" />
        
      </div>
      <CustomModal open={modalOpen} handleClose={handleModalClose} />
    </div>
  );
}

export default App;
