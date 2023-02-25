import { React, useState, useRef } from "react";
import './stayle.scss'
import Animat from '../section1/animation/animat';
import open from './image/open.svg';
import close from './image/close.svg'
export const Forms = () => {
  const [x, setX] = useState(false)
  const [z, setZ] = useState(true)
  const clic = (e) => {
    x ? ref.current.type = 'password' : ref.current.type = 'text'
    setX(z ? true : false)
    setZ(x ? true : false)


  }
  const ref = useRef()
  const styl = {
    transform:' rotate(360deg)',
  }
  return <div className="formbox">


    <div className="animat">
      <Animat />
    </div>
    <div className="form">
      <div className="title">
        <p> Մուտք</p>

      </div>
      <label id="zx"> Մուտքանուն </label> 
      <div className="inp">
        <input id="zx" type="email" />

      </div>

      <label id='cv'> Գաղտնաբառ  </label>
      <div className="inp">
        <input id="cv" type="password" ref={ref} />
{   console.log(ref)}
        <img style={x ? styl : null} onClick={clic} src={x ? close : open} alt='open' />
      </div>

    </div>
  </div>;
}
