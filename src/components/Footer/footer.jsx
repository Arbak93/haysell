import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import './stayle.scss';
import msg1 from './image/orange.png';
import msg2 from './image/white.png';
import log1 from './image/facebook_icon.png';
import log2 from './image/linked_in_icon.png';
import log3 from './image/insta.svg';
import grup from './image/Group 3609.svg';
import applogo from './image/appstore.svg';
import googlelogo from './image/googleplay.svg'
export const Footers = () => {
    const [msg, setMsg] = useState(false)
    const enter = () => {
        setMsg(true)
    }
    const leve = () => {
        setMsg(false)
    }
    const styl = {
        transition: '800ms',
        backgroundColor: 'chocolate'
    }
    return <div className="footerbox">
        <div className="fotertext">
            <div className="fbox">
                <span><NavLink to={'https://haysell.com/static/about_us.php'}>Մեր մասին</NavLink></span>
                <span><NavLink to={'https://haysell.com/static/about_us.php'}>Թափուր հաստիքներ</NavLink></span>
                <span><NavLink to={'https://haysell.com/static/about_us.php'}>Մեր գործընկերները</NavLink></span>
                <span><NavLink to={'https://haysell.com/static/about_us.php'}>Բլոգ</NavLink></span>
               <span> <NavLink to={'https://haysell.com/static/about_us.php'}>Կոնտակտային տվյալներ</NavLink></span>
               <span> <NavLink to={'https://haysell.com/static/about_us.php'}>Պայմաններ և դրույթներ</NavLink></span>

            </div>
            <div className="fbox">
               <span> <NavLink to={'https://haysell.com/static/about_us.php'}>Սարքավորումներ</NavLink></span>
                <span><NavLink to={'https://haysell.com/static/about_us.php'}>Առանձնահատկություններ</NavLink></span>
               <span> <NavLink to={'https://haysell.com/static/about_us.php'}>Օգնություն</NavLink></span>
               <span> <NavLink to={'https://haysell.com/static/about_us.php'}>Ինտեգրացիաներ</NavLink></span>
               <span> <NavLink to={'https://haysell.com/static/about_us.php'}>Տրամադրվող API</NavLink></span>

            </div>
            <div className="fbox3">
                <div className="inputs">
                    <input type="email" placeholder="Էլ․ հասցե " />
                    <button type="submit" onMouseEnter={enter} onMouseLeave={leve} style={msg ? styl : null} >{<img src={msg ? msg2 : msg1} alt="ic" />}</button>
                </div>
                <div className="loglinc">
                    <NavLink to={'https://www.facebook.com/haysellcom'}><img src={log1} alt="logo" /></NavLink>
                    <NavLink to={'https://haysell.com/static/about_us.php'}><img src={log2} alt="logo" /></NavLink>
                    <NavLink to={'https://www.instagram.com/haysell_automation/'}> <img src={log3} alt="logo" /></NavLink>
                </div>
                <NavLink to={'https://haysell.com/static/contacts.php'}><p>ք․ Երևան, Սայաթ Նովա 4, 1Ա</p></NavLink>
                <NavLink to={'https://haysell.com/static/contacts.php'}><p>+374 (95) 53-54-00</p></NavLink>
                <NavLink to={'https://haysell.com/static/contacts.php'}><p>info@haysell.com</p></NavLink>

            </div>


        </div>
        <div className="foterfinish">
            <div className="boxa">

                <img src={grup} alt='grup' />
            </div>
            <div className="boxb">
                <p>  Հեղինակային իրավունք <NavLink to={'https://haysell.com/static/contacts.php'}>Barcode AM LLC</NavLink>
                    © 2023</p>
            </div>
            <div className="boxc">
            <NavLink to="https://apps.apple.com/us/app/haysell-app/id1563794789">  <img src={applogo} alt="logoimg"/>  </NavLink>
            <NavLink to="https://play.google.com/store/apps/details?id=en.haysell.pos&pli=1">  <img src={googlelogo} alt="logoimg"/>  </NavLink>
        

            </div>

        </div>
    </div>
}