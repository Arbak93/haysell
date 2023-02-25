import { React, useState, useRef } from 'react';
import am from '../menu/image/am.svg';
import ru from '../menu/image/ru.svg';
import rec from '../menu/image/arrow-down.svg';
import './stayle.scss';




export const Phonsmodal = () => {
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
    backgroundColor: "chocolate",
    cursor: 'pointer',
    color: 'white',
  
  }

  return <div className='phonsboxsmodal' >
    <div className='titlebox'>
        <p>Թողեք Ձեր կոնտակտային հեռախոսահամարը և սկսեք համակարգի փորձարկումը</p>
      </div>

    <div className='phonebox2'>
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

    </div>
    <button type="submit" onMouseEnter={enter}
        onMouseLeave={leve}
        style={submit ? x : null}>
        <span>Սկսել փորձարկումը</span>
      </button>
  </div>
}