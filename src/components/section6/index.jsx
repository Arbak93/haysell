import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import image1 from './image/8.png';
import image2 from './image/7.png';
import image3 from './image/6.png';
import image4 from './image/5.png';
import play from './image/play.svg'
import './stayle.scss';
export const Scool = () => {

    const [list] = useState([
        {
            id: 1,
            image: image1,
            title: "Դաս 8 | Վաճառքի Ծրագիր | Haysell",
            content: "Վաճառք, Զեղչեր և Կտրոնների չեղարկում | Դիտեք այս տեսանյութում Haysell-ը վաճա... ",
            link: "https://www.youtube.com/watch?v=iFmwNkA-cHY&list=PLC3gkwNRYM5TdVLw7PNvmPJhx_HL92tDN&index=11",
        },
        {
            id: 2,
            image: image2,
            title: " Դաս 7 | Հաշվառում | Haysell",
            content: "Ինչպե՞ս հաշվառել ապրանքները և ինչպե՞ս տեսնել դրա արդյունքում ստացված ավելցուկ... ",
            link: "https://www.youtube.com/watch?v=kvLqql_znt0&list=PLC3gkwNRYM5TdVLw7PNvmPJhx_HL92tDN&index=7",
        },
        {
            id: 3,
            image: image3,
            title: "  Դաս 6 | Պահեստներ | Haysell",
            content: " Ինչպե՞ս տեղափոխել ապրանքները պահեստից խանութ, ինչպե՞ս հետևել ապրանքների մնացո... ",
            link: "https://www.youtube.com/watch?v=kvLqql_znt0&list=PLC3gkwNRYM5TdVLw7PNvmPJhx_HL92tDN&index=6",
        },
        {
            id: 4,
            image: image4,
            title: "   Դաս 5 | Վաճառքներ | Haysell",
            content: "Ինչպե՞ս տեսնել վաճառված ապրանքները, կտրոնները։ Ինչպե՞ս հետևել հերթափոխի ողջ ...",
            link: "https://www.youtube.com/watch?v=kvLqql_znt0&list=PLC3gkwNRYM5TdVLw7PNvmPJhx_HL92tDN&index=5",
        }


    ])

    return <div className="Scool">
        <div className="title">
            <h1>Ուսուցողական տեսանյութեր</h1>
        </div>
        {list.map((elem, index) =>
            <NavLink key={index} to="https://www.youtube.com/watch?v=iFmwNkA-cHY&list=PLC3gkwNRYM5TdVLw7PNvmPJhx_HL92tDN&index=11" target="_blank" >
                <div className="navbox">

                    <div className="imgbox">
                        <img src={elem.image} alt="logoimg" />
                    </div>
                    <div className="titlebox">
                        <p>{elem.title}</p>
                    </div>
                    <div className="textbox">
                        <span> {elem.content}</span>
                    </div>
                    <div className="play">
                        <img src={play} alt="play" />
                    </div>
                </div>
            </NavLink>

        )}



        <div className="btn_section text-center mb-5 ">
            <NavLink to='https://haysell.com/static/faq.php#video'>  <button className='btn'>Ավելին</button> </NavLink>
        </div>

    </div>
}