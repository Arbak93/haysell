
import { React, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import './style.scss';
import 'animate.css';
import { Phonsmodal } from '../modalphonebox';
const customStyles = {
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      marginTop:'250px',
      marginLeft: '50%',
      maxWidth: '680px',
      width: '100%',
      minHeight: '460px',
      padding: '20px',
      borderRadius: ' 15px',
      animation: 'fadeInDownBig',
      animationDuration: ' 0.001s',
      backgroundColor:'white'
  
  
  
    };
  



export default function Modal1() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const styleb = {

        width: ' 200px',
        height: '50px',
        border: '1px solid chocolate',
        borderRadius: '15px',
        fontSize: '18px',
        fontWeight: ' 500',
        marginTop: ' 65px',
        cursor: ' pointer',
        color: 'black',
        zIndex: '1',



    }
    const styleb2 = {
        width: ' 200px',
        height: '50px',
        border: '1px solid chocolate',
        borderRadius: '15px',
        fontSize: '18px',
        fontWeight: ' 500',
        marginTop: ' 65px',
         color: 'white',
        zIndex: '12',
        backgroundColor: 'chocolate'
     

    }
    const [x, setX] = useState(false)
    const enter = () => {
        setX(true)
    }
    const leve = () => {
        setX(false)
    }

    return (
        <div>
            <Button onClick={handleOpen}  style={x?styleb2:styleb} onMouseEnter={enter} onMouseLeave={leve}> Փորձարկել</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box style={customStyles}>
                <button
          onClick={handleClose}
          className='close'
        >X</button>
         <Phonsmodal/>
                </Box>
            </Modal>
        </div>
    );
}
