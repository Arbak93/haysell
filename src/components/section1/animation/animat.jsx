import React, { useLayoutEffect, useState } from 'react';
import {
  useSpringRef,
  animated,
  useTransition,

} from '@react-spring/web';



import i1 from "../../section2/image/1.png"; 
import i2 from "../../section2/image/2.png"; 
import i3 from "../../section2/image/3.png"; 
import i4 from "../../section2/image/4.png"; 
import i5 from "../../section2/image/5.png"; 
import i6 from "../../section2/image/6.png"; 
import i7 from "../../section2/image/7.png"; 
import i8 from "../../section2/image/8.png";
import i9 from "../../section2/image/9.png";
import i10 from "../../section2/image/10.png";
import i11 from "../../section2/image/11.png";
import i12 from "../../section2/image/12.png";
const IMAGES = [
  
   i1,i2,i3,i4,i5,i6,i7,i8,i9,i10,i11,i12
]

export default function Animat() {
  const [activeIndex, setActiveIndex] = useState(0)
  const springApi = useSpringRef()

  const transitions = useTransition(activeIndex, {
    from: {
      clipPath: 'polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)',
    },
    enter: {
      clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
    },
    leave: {
      clipPath: 'polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%)',
    },
    onRest: (_springs, _ctrl, item) => {
      if (activeIndex === item) {
        setActiveIndex(activeIndex === IMAGES.length - 1 ? 0 : activeIndex + 1)
      }
    },
    exitBeforeEnter: true,
    config: {
      duration: 1200,
    },
    delay: 250,
    ref: springApi,
  })

 

  useLayoutEffect(() => {
    springApi.start()
  },)

  return (
    <div >
      <div >
        {transitions((springs, item) => (
          <animated.div style={springs}>
            <img src={IMAGES[item]} alt='nn'/>
          </animated.div>
        ))}
       
      </div>
    </div>
  )
}
