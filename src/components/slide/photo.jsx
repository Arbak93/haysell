
import { React,} from 'react'
import t from './images/blog5.png';
import t1 from './images/blog55.jpg';
import t2 from './images/blog9.png';
import t3 from './images/blog_8.png';
import t4 from './images/Lean-Canvas(1).jpg';
import t5 from './images/money_tree.jpg';
import './photo.scss'
import { Images } from './photo1';
export const Photo = (props) => {
    const arr = [
        t, t1, t2, t3, t4, t5, t, t1, t2, t3, t4, t5

    ]

    return <div className='photoslide'>

        <div className="wrapper">
            <div className="slider">
                <div className="slide-track">

                    {arr.map((el, id) =>
                        <div className="slide" key={id}>
                          
                           <Images el={el} id={id} />
                        </div>
                    )

                    }
                </div>
            </div>

        </div>
        <div className="wrapper">
            <div className="slider">
                <div className="slide-track2">

                    {arr.map((el, id) =>
                        <div className="slide" key={id}>
                          
                           <Images el={el} id={id} />
                        </div>
                    )

                    }
                </div>
            </div>

        </div>
       
    </div>
}
