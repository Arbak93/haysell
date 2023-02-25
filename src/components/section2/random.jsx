import {React, useState,useEffect} from "react";
import './stayle.scss';
export const Randomphoto = (props) => {
    const [dogImg, setDogImg] = useState([]);
    const [dogImg2, setDogImg2] = useState([]);
      useEffect(() => {
        const url = "https://picsum.photos/130";
        const fetchData = async () => {
        const response = await fetch(url);
          setDogImg(response.url)
          
        };
    
        fetchData();
      }, []);
      useEffect(() => {
        const url = "https://picsum.photos/130";
        const fetchData = async () => {
            const response = await fetch(url);
            setDogImg2(response.url)
        };
    
        fetchData();
      }, []);
  
    return (
        
        <img src={props.id===props.z?dogImg2:dogImg} style = {props.id===props.z?props.x:null}alt="nkar"/>
        
        
        
        )
    }