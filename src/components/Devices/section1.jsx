import React from "react";
import './stayle1.scss'
import firstDevices from './images/first_device.svg';
import { NavLink } from "react-router-dom";

export const Section1 = () => {


    return <div className="box1">
        <div className="box1title">
            <h1> Սարքավորումներ</h1>
        </div>
        <div className="content">
             <div className="imgcontent">
                <img src={firstDevices} alt='images'/>
             </div>
             <div className="textcontent">
                <div className="title1"><h3>Մոբայլ դրամարկղ</h3></div>
                <div className="title2"> <p>SUNMI V2</p></div>   
                <div className="text"><p>Բազմաֆունկցիոնալ «Սմարթ Տերմինալը» միաժամանակ կատարում է մի քանի սարքավորումների ֆունկցիա, որոնք են՝ ՀԴՄ, տպիչ, բանկային տերմինալ, սկաներ, համակարգիչ։ Դա նշանակում է, որ 1 սարքավորում ձեռք բերելով, կրճատվում է մի քանի սարքավորումների ձեռքբերման ծախսերը։ Այն իր մեջ ներառում է վաճառքի ծրագիր բոլոր հնարավորություններով: Ներդրված NFC մոդուլը հնարավորություն է տալիս կիրառել (ներդնել) հաճախորդների լոյալության համակարգ։</p></div>
                <div className="arialinc">< NavLink to={'https://haysell.com/static/devices.php?id=1' }> Ավելին</NavLink> </div>
             </div>
        </div>

    </div>
}