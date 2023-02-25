import React from "react";
import { useState } from "react";
import i1 from "./image/1.png"; import i6 from "./image/6.png";
import i2 from "./image/2.png"; import i7 from "./image/7.png";
import i3 from "./image/3.png"; import i8 from "./image/8.png";
import i4 from "./image/4.png"; import i9 from "./image/9.png";
import i5 from "./image/5.png"; import i10 from "./image/10.png";
import i12 from "./image/12.png"; import i13 from "./image/13.png";
import i14 from "./image/14.png"; import i11 from "./image/11.png";
import i15 from "./image/15.png"; import i16 from "./image/16.png";
import './stayle.scss';
import  Modal1  from "../modal1/modal1";

import { Randomphoto } from './random';


export const Imgs = (props) => {

    const [list] = useState(
        [{
            img1: i1,
            img2: i2,
            id: 1,
            title: "Մթերային",
            text1: "25․000 անունից ավել ապրանքների բազա բարկոդերով",
            text2: "Ապրանքաշրջանառության վարում, մնացորդների վերահսկում, հաճախորդների լոյալության համակարգ",
            text3: "Վաճառակետի ամբողջական ավտոմատացում"
        },
        {
            img1: i3,
            img2: i4,
            id: 2,
            title: "Հագուստ և աքսեսուարներ",
            text1: "Ապրանքների տեսակավորում՝ ըստ չափի, գույնի, կամ այլ անհրաժեշտ պարամետրերի",
            text2: "Ապրանքի նկարներ և նկարագրություն",
            text3: "Պիտակների և գնապիտակների տպում"
        },
        {
            img1: i5,
            img2: i6,
            id: 3,
            title: "Շինանյութ",
            text1: "Հատային, քաշային և մետրով ապրանքեր",
            text2: "Օրական, շաբաթական և ամսական հաշվետվություններ",
            text3: "Ապրանքային մնացորդների վերահսկողություն"

        },
        {
            img1: i7,
            img2: i8,
            id: 4,
            title: "Արագ սնունդ",
            text1: "Ապրանքների տեսակավորում՝ ըստ չափի, գույնի, կամ այլ անհրաժեշտ պարամետրերի",
            text2: "Ապրանքի նկարներ և նկարագրություն",
            text3: "Պիտակների և գնապիտակների տպում"
        },
        {
            img1: i9,
            img2: i10,
            id: 5,
            title: "Դեղատուն",
            text1: "Ապրանքների տեսակավորում՝ ըստ չափի, գույնի, կամ այլ անհրաժեշտ պարամետրերի",
            text2: "Ապրանքի նկարներ և նկարագրություն",
            text3: "Պիտակների և գնապիտակների տպում"
        },
        {
            img1: i11,
            img2: i12,
            id: 6,
            title: "Միրգ և բանջարեղեն",
            text1: "Ապրանքների տեսակավորում՝ ըստ չափի, գույնի, կամ այլ անհրաժեշտ պարամետրերի",
            text2: "Ապրանքի նկարներ և նկարագրություն",
            text3: "Պիտակների և գնապիտակների տպում"
        },
        {
            img1: i13,
            img2: i14,
            id: 7,
            title: "Տնտեսական",
            text1: "25․000 անունից ավել ապրանքների բազա բարկոդերով",
            text2: "Ապրանքաշրջանառության վարում, մնացորդների վերահսկում, հաճախորդների լոյալության համակարգ",
            text3: "Վաճառակետի ամբողջական ավտոմատացում"
        },
        {
            img1: i15,
            img2: i16,
            id: 8,
            title: "Պահեստամասեր",
            text1: "25․000 անունից ավել ապրանքների բազա բարկոդերով",
            text2: "Ապրանքաշրջանառության վարում, մնացորդների վերահսկում, հաճախորդների լոյալության համակարգ",
            text3: ''
        },
        ]
    );

 const x={
transform: 'scale(1.2)',
zIndex: "0"
}
const [z,setZ]=useState(false)

   return <div className="main" >
        <div className="title">
            <h1 >Ու՞մ է հարմար</h1>
            <p>Համակարգը հարմար է առևտրային գործունեությամբ զբաղվող ցանկացած ոլորտի համար։</p>
        </div>

        {list.map((elem, index) => {
            return <div key={index} className="smolbox"
             onMouseEnter={(e)=>{setZ(elem.id)} }
             onMouseLeave={(e)=>{setZ(false)} }
            
           >
                {/* <img src={elem.id===z?elem.img1:elem.img2} style = {elem.id===z?x:null}alt="nkar"/> */}
            
             <Randomphoto  id={elem.id}  z={z} x={x}/>
          
  
                <p>{elem.title}</p>

                <span className="span">
                    <ul>
                    <li>{elem.text1}</li>
                    <li>{elem.text2}</li>
                    <li>{elem.text3}</li>
                   </ul>
                </span>
                  </div>

        })}
        <div className="btnbox">
            <Modal1/>
        </div>
       
          
    </div>
}
