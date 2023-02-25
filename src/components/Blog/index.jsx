// import React from 'react'
// import { useState } from 'react'
// import { NavLink } from 'react-router-dom'
// import "./style.scss"
// import { Randomphoto } from '../section2/random';

// export const Blog = (props) => {

//     const [blog] = useState([
//         {
//             id: 1,
//             image: "Lean-Canvas(1).jpg",
//             title: "Ինչու՞ է 'Z' սերունդն առավել հաջողում բիզնեսում...",
//             content: "Աշխարհում Gen Z-ի գրեթե 72%-ը սկսել է կամ մտադիր է սկսել սեփական բիզնեսը:Gen Z-ը «Ինտերնետի սերունդն է» (199...",
//             link: "https://haysell.com/static/blog_item.php?id=63",
//         },
//         {
//             id: 2,
//             image: "money_tree.jpg",
//             title: "Գումար խնայելու 6 հետաքրքիր եղանակ",
//             content: "1)  30 օրվա կանոնԳումար խնայելու առաջին խոչընդոտներից մեկը իմպուլսիվ գնումներն են:Լավ թիրախավորված համացանցային գով...",
//             link: "https://haysell.com/static/blog_item.php?id=62",
//         },
//         {
//             id: 3,
//             image: "relation-client.png",
//             title: "Հաճախորդների սպասարկման ստանդարտներ",
//             content: "Որո՞նք են հաճախորդների սպասարկման ստանդարտները: Այս ստանդարտները ներկայացնում են որակի մակարդակ, որին հետևում է ձեր...",
//             link: "https://haysell.com/static/blog_item.php?id=61",
//         },
//         {
//             id: 4,
//             image: "blog55.jpg",
//             title: "Ինչպե՞ս կարող է ավտոմատացումը օգնել ձեր բիզնեսին...",
//             content: "Ավտոմատացման առավելություններըԿրկնվող առաջադրանքներ կատարելու համար ավտոմատացման օգտագործումը կարող է հսկայական ժամանակ ...",
//             link: "https://haysell.com/static/blog_item.php?id=60",
//         },
//         {
//             id: 5,
//             image: "sacscs.jpg",
//             title: "Սոցիալական մեդիան որպես մարքեթինգային հզոր գործիք...",
//             content: "Տարիների ընթացքում սոցիալական մեդիան պարզապես նորարարական գաղափարից վերածվել է շուկայագետների համար բացարձակ անհրաժեշտու...",
//             link: "https://haysell.com/static/blog_item.php?id=59",
//         },
//         {
//             id: 6,
//             image: "blog_8.png",
//             title: "Ինչպե՞ս բացել առցանց խանութ. քայլ առ քայլ հրահանգներ...",
//             content: "Անցած տարվա ընթացքում սպառողների վարքագիծը փոխվել է. բազմաթիվ արգելափակումները և սոցիալական հեռավորությունը ստիպել են մ...",
//             link: "https://haysell.com/static/blog_item.php?id=57",
//         },
//         {
//             id: 7,
//             image: "blog9.png",
//             title: "Ինչու՞ են հնդկական ստարտափերները արտագաղթում Չիլի...",
//             content: "Հնդկաստանից եկած որոշ ձեռներեցների համար Անդյան երկիրը իդեալական է ամերիկյան շուկա դուրս գալու համար՝ չնայած  մյուս...",
//             link: "https://haysell.com/static/blog_item.php?id=56",
//         },
//         {
//             id: 8,
//             image: "blog5.png",
//             title: "Մաքուր էներգիայի 3 պաշարներ, որոնք պետք է գնել կանաչ ապագայի համար...",
//             content: "Այս մաքուր էներգիայի պաշարները կարող են առաջարկել կանաչ ապագա ձեր պորտֆոլիոյի համարՎերջերս նավթի գների կտրուկ աճը մեզ հ...",
//             link: "https://haysell.com/static/blog_item.php?id=55",
//         },
//     ])


//     return (
//         <div className='blog_section'>

//                 <div className="blog_header">
//                     <h2>Բլոգ</h2>
//                 </div>

//                 <div className="row">
//                     {blog.map((blogs, index) => {
//                         return (
//                             <div className="col-sm-12 col-md-6 col-lg-3" key={index}>
//                                 <div className="blog_items">
//                                     <NavLink to={blogs.link} target="_blank">
//                                         <div className="blog_image">
//                                             <img  src={require("./images/" + blogs.image)} alt="ima" />

//                                             <div className="shadow"></div>
//                                         </div>

//                                         <div className="blog_item_title">
//                                             <h2>{blogs.title}</h2>
//                                         </div>
//                                         <div className="blog_description">
//                                             <p>{blogs.content}</p>
//                                         </div>
//                                     </NavLink>
//                                 </div>
//                             </div>
//                         )
//                     })}
//                 </div>

//                 <div className="btn_section text-center">
//                  <NavLink to='https://haysell.com/static/blog.php' target='_blank'> <button className='btn'>Ավելին</button></NavLink>  
//                 </div>

//         </div>
//     )
// }
import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./style.scss";
import { Randomphoto } from '../section2/random';
import axios from 'axios';
//import { useRef } from 'react';

export const Blog = (props) => {
    const [data, setData] = useState([])
    const [x, setX] = useState(8)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                setData(res.data)
                // console.log(res)

            }).catch((err) => {
                console.log(err)
            })

    }, [data])

    const clickadd = () => {
        setX(x + 8)
    }
    const clickback = () => {
        setX(x - 8)
    }
   // console.log(data)
    
    return (
        <div className='blog_section' >
           
            <div className="blog_header" >
                <h2 >Բլոգ</h2> 
            </div>

            <div className="row " >
                {data.map((blogs) => {
                    return (
                        <div className={"col-sm-12 col-md-6 col-lg-3 "} key={blogs.id}
                        >
                            {blogs.id > x ? false :

                                <div className="blog_items" >
                                    <NavLink to={`/blog/${blogs.id}`} target='_blank'  >

                                        <div className="blog_image" >
                                            <Randomphoto />
                                            <div className="shadow"></div>
                                        </div>

                                        <div className="blog_item_title">
                                            <h2>{blogs.title}</h2>
                                        </div>
                                        <div className="blog_description">
                                            <p>{blogs.body.substring(0, 60) + '  ...'}</p>
                                        </div>
                                    </NavLink>

                                </div>

                            }

                        </div>

                    )
                })}
            </div>

            <div className="btn_section text-center">
                <button className='btn' onClick={clickadd}>Ավելին</button>
                <button className='btn m-lg-5' onClick={clickback}>back</button>
            </div>

        </div>
    )
}
