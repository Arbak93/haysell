import { React, useEffect,useState} from 'react'

export const Images = (props) => {
    const [x, setX] = useState(false)

    const e1 = {
        opacity: 1,
        transition:'3000ms'
    }
    const tp = {
        opacity: 0.1,
        transition: '3000ms'
    }
    const [y, sety] = useState(1)
    const [count,setCount]=useState(1)
    const [d,setD]=useState(0)
    function get(min,max){
        return Math.floor(Math.random()*(max-min))+1
        
        }
     
    useEffect(() => {
     
        setTimeout(() => {
            setCount(get(1,12))
            setD(get(1,12))
            sety(get(1,12))
        }, 4000);
        }, [y])
    console.log(y,count,d)
    return (
        <img src={props.el} alt='dd'
            style={x ? e1 :props.id===y||props.id===count||props.id===d?e1:tp}
            onMouseOver={() => setX(true)}
            onMouseOut={() => setX(false)}

        />
    )

}
