import {React,useEffect,useState} from 'react';
 import "./bloginfo.scss";
import { Randomphoto } from '../section2/random';
 import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import  axios  from 'axios';
export const Bloginfos = (props) => {
   const{id}=useParams()
   const [data,setData]=useState({})
    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then((res) => {
              setData({'title':res.data.title,'body':res.data.body})  
          }).catch((err) => {
              console.log(err)
          })
      
      },[id])
  return (
        <div className="bloge1" >
          <div  className='d-flex flex-lg-column wi'>
             <NavLink to='/blogs'> <span>{'< '} Բլոգ </span> </NavLink>
            <Randomphoto />
          </div>
           <div className='parent'>
                <h4>{data.title}</h4>
                <p>{data.body}</p>
              {/* {console.log(data)} */}
          </div>
           </div>
            )

          }
