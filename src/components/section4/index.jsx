import React, { useState } from 'react';
import "./stayle.scss"
import Carousel from 'react-bootstrap/Carousel';

export function Carousels() {
    const [index, setIndex] = useState(0);

    const [slides] = useState([
        {
            img: "skobkeq.png",
            content: "Հայսել համակարգի ներդրման պահից սկսած մեր աշխատանքի կազմակերպման գործընթացը դարձել է ավելի արագ և արդյունավետ: Մեր աշխատակիցներն արագ յուրացրեցին համակարգը. այն պարզ է և օգտագործման համար չի պահանջում որևէ մասնագիտական հմտություն։ Որպես կարևորագույն առավելություն ուզում եմ նշել սմարթֆոնով բիզնեսին հետևելու հնարավորությունը, ինչի շնորհիվ խանութից բացակայելն այլևս խնդիր չէ։",
            logo: "logo_kokchian.jpg",
            name: "Լիլիթ Աբրահամյան",
            profession: "Kokchian Մենեջեր",
        },
        {
            img: "skobkeq.png",
            content: "Սպասարկումն ամենակարևոր առավելությունն է, որի համար ես ընտրեցի Հայսելը։ Զգացումը, որ մի ամբողջ թիմ հոգատարությամբ է վերաբերվում քո աշխատանքին շատ գովելի է։ Իմ խորհուրդը բոլոր գործարարներին՝ վստահաբար անցում կատարել Հայսելի։",
            logo: "sia.jpg",
            name: "Էդգար Սարգսյան",
            profession: "CEO at Sia Fashion Yerevan",
        },
        {
            img: "skobkeq.png",
            content: "Համագործակցում ենք ավելի քան մեկ տարի, ունենք մեծ արդյունքներ պրոցեսների համակարգման և ավտոմատացման հարցում: Հայսել ծրագիրը պարբերաբար զարգանում է շուկայի պահանջներին համապատասախան: Ճկուն են, բաց են նորարարությունների համար: Շատ գոհ ենք համագործակցությունից և պլանավորում ենք երկարաժամկետ համագործակցել:",
            logo: "logo_4u.jpg",
            name: "Նիկո Նասիբյան",
            profession: "COO at 4u.am",
        },
        {
            img: "skobkeq.png",
            content: "2018 թվականից աշխատում ենք Հայսել համակարգով։ Սկզբից օգտագործում էինք միայն վաճառքի ծրագիրը, այնուհետև ինտեգրեցինք նաև օնլայն խանութը։ Վաճառքի ծավալների աճին զուգահեռ երկու հարթակներում աշխատանքի կազմակերպումը բավականին բարդ էր ու ժամանակատար։ Հայսելի շնորհիվ այս խնդիրը ստացավ իր ամենաօպտիմալ լուծումը։",
            logo: "logo_siamoods.jpg",
            name: "Վարդան Աբրահամյան",
            profession: "CEO at Siamoods",
        },
        {
            img: "skobkeq.png",
            content: "Այն ձեռնարկատերերն ովքեր վարում են իրենց բիզնեսն օնլայն հարթակում, ովքեր ունեն նաև կայք, միանշանակ խորհուրդ կտայի ինտեգրվել այս Համակարգին։ Հիմնական առավելություն է հանդիսանում ապրանքների և դրանց գների սինխրոնիզացիան Պրոֆիլում և կայքում։ Մենք ավտոմատացրել ենք նաև առաքման համակարգը։",
            logo: "logo_parma.jpg",
            name: "Կարինա Հակոբյան",
            profession: "CEO at Parma",
        },
    ])

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (<div className="slide_section">
        <div className="container">
            <div className="slide_title">
                <h2>Հաճախորդներ և կարծիքներ</h2>
            </div>

            <div className="slide_items_section">
                
                <Carousel activeIndex={index} onSelect={handleSelect}>

                    {slides.map((slide, index) => {
                        return (<Carousel.Item className="slide_item" key={index}>
                            <div className="carousel_section d-flex justify-content-center">
                                <div className="slide_item_content d-flex">
                                    
                                    <div className="carousel_content">
                                        <p>{slide.content}</p>

                                        <div className="commenter d-flex">
                                          <div className="commenter_image">
                                                <img src={require("../../assest/images/slides_images/"+ slide.logo)} alt="logo" />
                                            </div>
                                            <div className="commenter_name d-flex flex-column justify-content-center ">
                                                <h2>{slide.name}</h2>
                                                <span>{slide.profession}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>

                        )
                    })}

                </Carousel>
          
            </div>
        </div>
    </div>
    );
}