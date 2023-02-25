import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import open from "./image/open_plus.png";
import close from "./image/close_minus.png";
import i1 from './image/i1.png'; import i9 from './image/i9.png';
import i2 from './image/i2.svg'; import i10 from './image/i10.png';
import i3 from './image/i3.svg'; import i11 from './image/i11.svg';
import i4 from './image/i4.svg'; import i12 from './image/i12.png';
import i5 from './image/i5.svg'; import i13 from './image/i13.png';
import i6 from './image/i6.svg'; import i14 from './image/i14.svg';
import i7 from './image/i7.svg'; import i15 from './image/i15.png';
import i8 from './image/i8.svg';
import './stayle.scss';
import Modal1 from '../modal1/modal1';

export default function SimpleAccordion() {
    const [list] = useState(
        [{
            img1: i1, img2: i2, img3: i3, img4: i4, img5: i5, img6: i6, img7: i7, img8: i8,
            id: 1,
            title1: "ինտեգրացիաներ",
            text2: "Marketplace-ի ինտեգրացիա Այսօր ցանկացած առևտրային կազմակերպության համար ապրանքների իրացումը Marketplace-ի միջոցով հանդիսանում է վաճառքի ամենաարդյունավետ տարբերակներից մեկը։ Որպեսզի վաճառքներն ինտերնետ հարթակում ապահովվեն իրական եկամուտ, անհրաժեշտ է կատարել առևտրային համակարգի և Marketplace-ի ինտեգրացիա։ Մենք իրականացնում ենք համալիր ինտեգրացիա Haysell-ի և ՀՀ-ում առկա բոլոր Marketplace-երի հետ։",
            text3: "API ինտեգրացիաները հանդիսանում են առավել տարածված տարբերակ, քանի որ դա թույլ է տալիս օնլայն ռեժիմով թարմացնել ապրանքատեսականին Marketplace-ի կայքում։",
            text4: "Bitrix 24 CRM համակարգի ինտեգրացիա։ Այն թույլ է տալիս հեշտությամբ հավաքել և մշակել հաճախորդների բազան: Կոնտակտների և ընկերությունների վերաբերյալ բոլոր մանրամասն տվյալները և ակտուալ տեղեկությունները։",
            text5: "WordPress համակարգով ստեղծված օնլայն խանութների ինտեգրացիա։",
            text6: "Zegashop հարթակի միջոցով ստեղծված օնլայն խանութի ինտեգրացիա: Zegashop-ը թույլ է տալիս յուրաքանչյուրին հեշտությամբ ստեղծել խանութ և վաճառել առցանց: Դա հիանալի հարթակ է, որն ապահովում է ցանկացած չափի մանրածախ բիզնես սկսելու և կառավարելու գործիքներ:",
            text7: "Dexatel SMS հաղորդագրությունները հաճախորդների հետ շփման ամենաարդյունավետ տարբերակներից մեկն է. օգտատերը վստահում է SMS հաղորդագրություններին, որպես գործարքը հաստատելու հուսալի միջոց։ Haysell-ի և Dexatel-ի ինտեգրացիայի շնորհիվ կարող եք Ձեր հաճախորդներին և աշխատակիցներին ուղարկել հաղորդագրություններ Ձեր նախընտրած լեզվով և ձևանմուշով։",
            text8: "Omni Haysell-ի և Omni-ի կողմից մշակվել են նորարարական մոտեցումներ հայաստանյան շուկայի բիզնեսների համար։ OmniPost-ը ամբողջական փոտային ծառայություն է, որն իրականացնում է թե՛ ներհանրապետական և թե՛ միջազգային հասցեական առաքման ծառայություն։ Haysell-ն առաքումների գրանցման գործընթացը դարձնում է ավելի արագ, և ավտոմատացնելով պատվերի գրանցման պրոցեսը բացառում է հնարավոր բոլոր թերացումները։ Արդյունքում առաքանին հասնում է պատվիրատուին հնարավորինս սեղմ ժամկետներում և անսխալ։",

        },
        {
            img1: i9,
            id: 2,
            title1: "Մոբայլ դրամարկղ",
            text2: "Հայսելն առաջինն է ՀՀ-ում, որն առաջարկում է բազմաֆունկցիոնալ «Մոբայլ դրամարկղ», այն միաժամանակ կատարում է մի քանի սարքավորումների ֆունկցիա, որոնք են՝ ՀԴՄ , տպիչ , բանկային տերմինալ, սկաներ, համակարգիչ։ Դա նշանակում է, որ 1 սարքավորում ձեռք բերելով, կրճատվում է մի քանի սարքավորումների ձեռքբերման ծախսերը։ Ներդրված NFC մոդուլը հնարավորություն է տալիս կատարել անկանխիկ վճարումներ, օգտագործել կուտակային, զեղչի և նվեր քարտեր",

        },
        {
            img1: i10,
            id: 3,
            title1: "էլեկտրոնային ՀԴՄ",
            text2: "Նույնիսկ ինտերնետի բացակայության դեպքում կարող եք շարունակել աշխատանքը համակարգում առանց որևէ խնդրի։ Վաճառքների ամբողջ տվյալները պահպանվում են և ինտերնետի առկայության դեպքում տեղի է ունենում ինֆորմացիայի սինխրոնիզացիա։",

        },
        {
            img1: i11,
            id: 4,
            title1: "Օֆլայն ֆունկցիոնալություն",
            text2: "Ապրանքների տեսակավորում՝ ըստ չափի, գույնի, կամ այլ անհրաժեշտ պարամետրերի",

        },

        {
            img1: i12,
            id: 6,
            title1: "Ամպային հարթակ",
            text2: "Վերահսկեք Ձեր բիզնեսը աշխարհի ցանկացած կետից Ձեր սմարթֆոնով։ Ամպային հարթակը հնարավորություն է տալիս հասանելիություն ունենալ առևտրային ողջ գործընթացին օրվա ցանկացած պահի։",

        },
        {
            img1: i13,
            id: 7,
            title1: "Առաքումների համակարգ",
            text2: "Հայսելը հնարավորություն է տալիս ավտոմատացնել նաև առաքման գործընթացը։ Հավելվածի ծանուցումների շնորհիվ առաքիչները ստանում են նոր առաքումների կամ առաքման փոփոխությունների վերաբերյալ ինֆորմացիա։ Ինչպես նաև կարող եք հետևել պատվերների կարգավիճակի փոփոխություններին, տեսնել առաքիչների երթուղիների պատմությունը, կատարել վարորդների և առաքիչների մոնիտորինգ։",

        },
        {
            img1: i14,
            id: 8,
            title1: "Անհպում վճարումներ",
            text2: "Համակարգի ներդրմամբ Ձեր հաճախորդները կարող են կատարել անհպում վճարումներ Idram, Telcell և PayX վճարային համակարգերով։",

        },
        {
            img1: i15,
            id: 5,
            title1: "Բազմաթիվ սարքերի աջակցություն",
            text2: "Համակարգը հասանելի է ցանկացած սարքավորման վրա և աշխատում է ցանկացած օպերացիոն համակարգով։",

        },
        ]
    );
    const [expanded, setExpanded] = useState(false);
    const [panel1, setPanel1] = useState(true);

    const handleChangeopenclose = (panel) =>
        () => {
            setExpanded((panel1 ? panel :false))
             setPanel1((panel1 ? false: panel))

        };
    const ent = (panel) => {
        setPanel1(panel)
    }
   
    const ref = React.useRef()

    return <div className='bigbox'>

        <div className="title" >
            <span>Առանձնահատկություններ</span>
            <p>Մենք առաջարկում ենք ծառայությունների լայն շրջանակ</p>
        </div>

        {list.map((elem, index) => {


            return <Accordion key={index} className='smallboxs' expanded={expanded === elem.id} onClick={handleChangeopenclose(elem.id)} onMouseEnter={ent}
                sx={{ marginBottom: "35px", borderRadius: "15px", boxShadow: 'none', padding: 'none' }} >

                <AccordionSummary ref={ref} sx={{paddingLeft5:'55px' , display: "flex", alignItems: "center", height: "110px", boxShadow: 'none', textDecoration: "none"  }} >

                    <div>
                        < img src={elem.img1} alt="12" />
                    </div>
                    <Typography sx={{ border: "none", display: "flex", alignItems: "center", width: "100%", fontSize: "24px", fontWeight: "700", lineHeight: "34px", }}>

                        <span>{elem.title1} </span>
                    </Typography>
                    <div className='iconplus_minus'>
                        < img src={expanded === elem.id ? close : open} alt="12" />
                    </div>
                </AccordionSummary >
                <AccordionDetails className='accordion' sx={{ padding: "0px", }}>
                    <div sx={{ padding: "unset", marginTop: '50px', height: "auto", }}>
                        <div className='textboxss'>
                            <div className='textimg'><img src={elem.img2} alt='' /></div>
                            <div className='text2'>{elem.text2}</div>
                        </div>
                        <div className='textboxss'>
                            <div className='textimg'><img src={elem.img3} alt='' /></div>
                            <div className='text2'>{elem.text3}</div>
                        </div>
                        <div className='textboxss'>
                            <div className='textimg'><img src={elem.img4} alt='' /></div>
                            <div className='text2'>{elem.text4}</div>
                        </div>
                        <div className='textboxss'>
                            <div className='textimg'><img src={elem.img5} alt='' /></div>
                            <div className='text2'>{elem.text6}</div>
                        </div>
                        <div className='textboxss'>
                            <div className='textimg'><img src={elem.img7} alt='' /></div>
                            <div className='text2'>{elem.text3}</div>
                        </div>
                        <div className='textboxss' >
                            <div className='textimg'><img src={elem.img8} alt='' /></div>
                            <div className='text2'>{elem.text8}</div>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        })}
        <div className="btnbox">

            <Modal1 />

        </div>
    </div >
}
