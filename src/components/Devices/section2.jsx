import React from "react";
import './stayle2.scss'
import firstDevices from './images/first_device.svg';
import { NavLink } from "react-router-dom";

export const Section2 = () => {

    return <div className="box2">

        <div className="content">

            <div className="textcontent">
                <div className="title1"><h3>Տվյալների հավաքագրման տերմինալ</h3></div>
                <div className="title2"> <p>Axiom M71</p></div>
                <div className="text"><p>Թեթև քաշով, կոմպակտ դիզայնով հզոր մոբայլ համակարգիչ, որն աշխատում է Android համակարգով, իդեալական օգնական է տվյալների (առօրյա) հավաքագրման ժամանակ</p></div>
              
                <div className="arialinc">< NavLink to={'https://haysell.com/static/devices.php?id=2'}> Ավելին</NavLink> </div>
            </div>
            <div className="imgcontent">
                <img src={firstDevices} alt='images' />
            </div>
        </div>

    </div>
}