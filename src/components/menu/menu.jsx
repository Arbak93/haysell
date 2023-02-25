import {React ,useState}from "react";
import { Link, NavLink } from "react-router-dom";
import logo from './image/logo.png';
import flag1 from './image/am.svg';
import flag2 from './image/ru.svg';
import flag3 from './image/unitedflag.svg';
import user from './image/user_icon_black.png';
import user2 from './image/download.png';

import '../menu/staylem.scss';
export const Menu = () => {
 
const [style,setStyle]=useState(false);

const enter=()=>{
setStyle(true)
 
}
const leve=()=>{
      setStyle(false)
       
      }

      return <div className="menu">
            <div className="navtext">
                  <NavLink to="/">  <img src={logo} alt="logoimg"/>  </NavLink>
                  <NavLink to="/"> <p  className="activ"> Գլխավոր</p></NavLink>
                  <NavLink to="/Սարքավորումներ"><p> Սարքավորումներ</p></NavLink>
                  <NavLink to="/mer"> <p> Մեր մասին</p></NavLink>
                  <NavLink to="/*4"><p> Օգնություն</p></NavLink>
            </div>
            <div className="langform">
                 
                     
                        <div className="bloc"> 
                                
                                    <img src={flag1} alt="defoultimg" />
                              
                                   <div className="nones">
                                     <div>
                                          <img src={flag1} alt="logoimg" />
                                     </div>
                                     <div>
                                          <img src={flag2} alt="logoimg" />
                                     </div>
                                     <div>
                                          <img src={flag3} alt="logoimg" />
                                     </div>
                                    
                                 </div>  
                                   
                        </div>
                         
               
                    <Link to="/form" onMouseEnter={enter} onMouseLeave={leve} onClick={()=>setStyle(false)}><img src={style?user2:user} alt="logoimg" /></Link>
            
                

            </div>
      </div>

}