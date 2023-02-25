import React from "react";
import './stayle.scss';

import  Modal1  from "../modal1/modal1";
import { Modal2 } from "../modal2/modal2";
import Animat from "./animation/animat";

export const Animation = () => {

    const stayl =
    {
        animation: 'fadeInUp',
        animationDuration: ' 1s',

    }
    const staylt =
    {
        animation: 'slideInLeft',
        animationDuration: ' 1s',

    }
    return <div className="box">


        <div className="texts">
            <div className="bigtext"
                style={staylt}
            >
                <h3>
                    Առևտրի Ավտոմատացման
                    Ժամանակակից <br />
                    Համակարգ</h3>


            </div>
            <div className="smalltext"
                style={stayl}
            >
                <p>Haysell-ը վաճառքի ավտոմատացման ծրագիր է, որը նախատեսված է ցանկացած
                    բիզնեսի համար։ Այն ոչ միայն կհեշտացնի գանձապահների և օպերատորների
                    աշխատանքը, այլ նաև հնարավորություն կընձեռի բիզնես սեփականատերերին աշխարհի
                    ցանկացած կետից հետևել և կառավարել առևտրային ողջ գործընթացները։</p>
            </div>
            <div className="modalbox">
                <Modal1 />
                <Modal2 />
            </div>
        </div>
        <div className="animation">   
      <Animat/>
        </div>

    </div>



}