import { React, useState, useRef } from 'react';
import am from '../menu/image/am.svg';
import ru from '../menu/image/ru.svg';
import rec from '../menu/image/arrow-down.svg';
import phon1 from './image/wite.png';

import phon2 from './image/blue.png'
import gl from '../menu/image/supporter_icon_in_main_page.png';
import './stayle.scss';




export const Phons = () => {
  const [rut, setRut] = useState(false)
  const ref = useRef()
  const [submit, setSubmit] = useState(false)

  const enter = () => {
    setSubmit(true)
  }
  const leve = () => {
    setSubmit(false)
  }
  const click1 = () => {

    setRut(false)
    ref.current.value = '+374'
  }

  const click2 = () => {
    setRut(true)

    ref.current.value = '+7'

  }
  const x = {
    backgroundColor: "white",
    cursor: 'pointer'
  }

  return <div className='phonsboxs' >

    <div className='images'>
      <img src={gl} alt='axjik' />
    </div>
    <div className='phonebox'>
      <h2>Պատվիրել հետզանգ</h2>
      <div className="inp">
        <div className='absolute'>
          <div className='am'>
            {rut ? <img src={ru} alt='mm' /> : <img src={am} alt='mm' />}<img src={rec} alt='hhh' />

          </div>
          <div className='absolute2'>
            <div onClick={click1} className={'am2'}>
              <img src={am} alt='mm' />
              <span >+374</span>
            </div>
            <div onClick={click2} className='ru'>
              <img src={ru} alt='mm' />
              <span >+7</span>
            </div>
          </div>

        </div>

        <input ref={ref} type="Phone" />
      </div>
      <div className='button'
        onMouseEnter={enter}
        onMouseLeave={leve}
        style={submit ? x : null} >
        <button type="submit"
          style={submit ? x : null}
        >
          <img src={submit ? phon2 : phon1} alt="phon" /></button>
      </div>

      <p>Կարող եք թողնել Ձեր հեռախոսահամարը և մեր մասնագետները կկապվեն Ձեզ հետ:</p>
    </div>

  </div>
}