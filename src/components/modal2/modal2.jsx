import {React,useState} from 'react';
import Modal from 'react-modal';
import './stayle2.scss';
import 'animate.css';
import "bootstrap/dist/css/bootstrap.min.css";
//import Iframe from 'react-iframe'
import YouTube from "react-youtube";
import black from './images/black.svg';
import white from './images/whit.svg';

const customStyles = {
  content: {
    margin: "24px auto",
    maxWidth: '680px',
    width:'100%',
    height: '460px',
    padding: '20px',
    borderRadius: ' 15px',
    animation: 'fadeInDownBig',
    animationDuration: ' 0.5s',
    display: 'inline-block',
    opacity: '100%',
   zIndex:8


  },
};

export function Modal2() {

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
 function closeModal() {
    setIsOpen(false);
  }
  const videoOptions = {
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
     
    }}
  const [styl,setStyl]=useState(false)
  const stayl={
  display: 'none'
  }
  return (
    <div>
      <button onClick={openModal} className='open2'
      onMouseEnter={()=>setStyl(true)}
      onMouseLeave={()=>setStyl(false)}
      >
      <span>Ի՞նչ է Haysell-ը</span> 
      <img className="black_user_icon" src={black} alt='black'  style={styl?stayl:null} />
      <img className="orange_user_icon" src={white}alt='orang' style={styl?null:stayl}/>
      
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}  //?
      > 
      <button 
      onClick={closeModal}
        className='close2'
      >X</button>
          <YouTube videoId="tRCMqWsVNDk" opts={videoOptions}  />     
        {/* <Iframe url="https://www.youtube.com/embed/tRCMqWsVNDk"
           autoplay='true'
          width="100%"
          height="88%"
        /> */}

      </Modal>
    </div>
  );
}
