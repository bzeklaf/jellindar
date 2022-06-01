import size_img from './components/icons/size.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ReadMoreTitle from './ReadMoreTitle';

import {mcard_link_1, mainpicA_1, title_1, small_description_1, price_1, mint_status_1, size_1, blockchain_1, category_1, blockchain_img_1, price_icon_1 } from "./pages/MainCard1";
import {mcard_link_2, mainpicA_2, title_2, small_description_2, price_2, mint_status_2, size_2, blockchain_2, category_2, blockchain_img_2, price_icon_2 } from "./pages/MainCard2";
import {mcard_link_3, mainpicA_3, title_3, small_description_3, price_3, mint_status_3, size_3, blockchain_3, category_3, blockchain_img_3, price_icon_3 } from "./pages/MainCard3";
import {mcard_link_4, mainpicA_4, title_4, small_description_4, price_4, mint_status_4, size_4, blockchain_4, category_4, blockchain_img_4, price_icon_4 } from "./pages/MainCard4";
import {mcard_link_5, mainpicA_5, title_5, small_description_5, price_5, mint_status_5, size_5, blockchain_5, category_5, blockchain_img_5, price_icon_5 } from "./pages/MainCard5";
import {mcard_link_6, mainpicA_6, title_6, small_description_6, price_6, mint_status_6, size_6, blockchain_6, category_6, blockchain_img_6, price_icon_6 } from "./pages/MainCard6";
import {mcard_link_7, mainpicA_7, title_7, small_description_7, price_7, mint_status_7, size_7, blockchain_7, category_7, blockchain_img_7, price_icon_7 } from "./pages/MainCard7";
import {mcard_link_8, mainpicA_8, title_8, small_description_8, price_8, mint_status_8, size_8, blockchain_8, category_8, blockchain_img_8, price_icon_8 } from "./pages/MainCard8";
import {mcard_link_9, mainpicA_9, title_9, small_description_9, price_9, mint_status_9, size_9, blockchain_9, category_9, blockchain_img_9, price_icon_9 } from "./pages/MainCard9";
import {mcard_link_10, mainpicA_10, title_10, small_description_10, price_10, mint_status_10, size_10, blockchain_10, category_10, blockchain_img_10, price_icon_10 } from "./pages/MainCard10";
import {mcard_link_11, mainpicA_11, title_11, small_description_11, price_11, mint_status_11, size_11, blockchain_11, category_11, blockchain_img_11, price_icon_11 } from "./pages/MainCard11";
import {mcard_link_12, mainpicA_12, title_12, small_description_12, price_12, mint_status_12, size_12, blockchain_12, category_12, blockchain_img_12, price_icon_12 } from "./pages/MainCard12";
import {mcard_link_13, mainpicA_13, title_13, small_description_13, price_13, mint_status_13, size_13, blockchain_13, category_13, blockchain_img_13, price_icon_13 } from "./pages/MainCard13";
import {mcard_link_14, mainpicA_14, title_14, small_description_14, price_14, mint_status_14, size_14, blockchain_14, category_14, blockchain_img_14, price_icon_14 } from "./pages/MainCard14";
import {mcard_link_15, mainpicA_15, title_15, small_description_15, price_15, mint_status_15, size_15, blockchain_15, category_15, blockchain_img_15, price_icon_15 } from "./pages/MainCard15";
import {mcard_link_16, mainpicA_16, title_16, small_description_16, price_16, mint_status_16, size_16, blockchain_16, category_16, blockchain_img_16, price_icon_16 } from "./pages/MainCard16";
import {mcard_link_17, mainpicA_17, title_17, small_description_17, price_17, mint_status_17, size_17, blockchain_17, category_17, blockchain_img_17, price_icon_17 } from "./pages/MainCard17";
import {mcard_link_18, mainpicA_18, title_18, small_description_18, price_18, mint_status_18, size_18, blockchain_18, category_18, blockchain_img_18, price_icon_18 } from "./pages/MainCard18";
import {mcard_link_19, mainpicA_19, title_19, small_description_19, price_19, mint_status_19, size_19, blockchain_19, category_19, blockchain_img_19, price_icon_19 } from "./pages/MainCard19";


export const bottomCards = [
    {
        id:4,
        mcard_link: mcard_link_4,
        mint_status: mint_status_4,
        img: mainpicA_4,
        title:title_4,
        text:small_description_4,
        category: category_4,
        price_icon: price_icon_4,
        price_no: price_4,
        size: size_img,
        size_no: size_4,
        blockchain: blockchain_4,
        blockchain_img: blockchain_img_4
    },
    {
        id:5,
        mcard_link: mcard_link_5,
        mint_status: mint_status_5,
        img: mainpicA_5,
        title:title_5,
        text:small_description_5,
        category: category_5,
        price_icon: price_icon_5,
        price_no: price_5,
        size: size_img,
        size_no: size_5,
        blockchain: blockchain_5,
        blockchain_img: blockchain_img_5
    },
    {
        id:2,
        mcard_link: mcard_link_2,
        mint_status: mint_status_2,
        img: mainpicA_2,
        title:title_2,
        text:small_description_2,
        category: category_2,
        price_icon: price_icon_2,
        price_no: price_2,
        size: size_img,
        size_no: size_2,
        blockchain: blockchain_2,
        blockchain_img: blockchain_img_2
    },
    {
        id:3,
        mcard_link: mcard_link_3,
        mint_status: mint_status_3,
        img: mainpicA_3,
        title:title_3,
        text:small_description_3,
        category: category_3,
        price_icon: price_icon_3,
        price_no: price_3,
        size: size_img,
        size_no: size_3,
        blockchain: blockchain_3,
        blockchain_img: blockchain_img_3
    },
    {
        id:9,
        mcard_link: mcard_link_9,
        mint_status: mint_status_9,
        img: mainpicA_9,
        title:title_9,
        text:small_description_9,
        category: category_9,
        price_icon: price_icon_9,
        price_no: price_9,
        size: size_img,
        size_no: size_9,
        blockchain: blockchain_9,
        blockchain_img: blockchain_img_9
    },
    {
        id:1,
        mcard_link: mcard_link_1,
        mint_status: mint_status_1,
        img: mainpicA_1,
        title:title_1,
        text:small_description_1,
        category: category_1,
        price_icon: price_icon_1,
        price_no: price_1,
        size: size_img,
        size_no: size_1,
        blockchain: blockchain_1,
        blockchain_img: blockchain_img_1
    },
    {
        id:6,
        mcard_link: mcard_link_6,
        mint_status: mint_status_6,
        img: mainpicA_6,
        title:title_6,
        text:small_description_6,
        category: category_6,
        price_icon: price_icon_6,
        price_no: price_6,
        size: size_img,
        size_no: size_6,
        blockchain: blockchain_6,
        blockchain_img: blockchain_img_6
    },
    {
        id:7,
        mcard_link: mcard_link_7,
        mint_status: mint_status_7,
        img: mainpicA_7,
        title:title_7,
        text:small_description_7,
        category: category_7,
        price_icon: price_icon_7,
        price_no: price_7,
        size: size_img,
        size_no: size_7,
        blockchain: blockchain_7,
        blockchain_img: blockchain_img_7
    },
    {
        id:8,
        mcard_link: mcard_link_8,
        mint_status: mint_status_8,
        img: mainpicA_8,
        title:title_8,
        text:small_description_8,
        category: category_8,
        price_icon: price_icon_8,
        price_no: price_8,
        size: size_img,
        size_no: size_8,
        blockchain: blockchain_8,
        blockchain_img: blockchain_img_8
    },
    {
        id:10,
        mcard_link: mcard_link_10,
        mint_status: mint_status_10,
        img: mainpicA_10,
        title:title_10,
        text:small_description_10,
        category: category_10,
        price_icon: price_icon_10,
        price_no: price_10,
        size: size_img,
        size_no: size_10,
        blockchain: blockchain_10,
        blockchain_img: blockchain_img_10
    },
    {
        id:11,
        mcard_link: mcard_link_11,
        mint_status: mint_status_11,
        img: mainpicA_11,
        title:title_11,
        text:small_description_11,
        category: category_11,
        price_icon: price_icon_11,
        price_no: price_11,
        size: size_img,
        size_no: size_11,
        blockchain: blockchain_11,
        blockchain_img: blockchain_img_11
    },
    {
        id:13,
        mcard_link: mcard_link_13,
        mint_status: mint_status_13,
        img: mainpicA_13,
        title:title_13,
        text:small_description_13,
        category: category_13,
        price_icon: price_icon_13,
        price_no: price_13,
        size: size_img,
        size_no: size_13,
        blockchain: blockchain_13,
        blockchain_img: blockchain_img_13
    },
    {
        id:14,
        mcard_link: mcard_link_14,
        mint_status: mint_status_14,
        img: mainpicA_14,
        title:title_14,
        text:small_description_14,
        category: category_14,
        price_icon: price_icon_14,
        price_no: price_14,
        size: size_img,
        size_no: size_14,
        blockchain: blockchain_14,
        blockchain_img: blockchain_img_14
    },
    {
        id:19,
        mcard_link: mcard_link_19,
        mint_status: mint_status_19,
        img: mainpicA_19,
        title:title_19,
        text:small_description_19,
        category: category_19,
        price_icon: price_icon_19,
        price_no: price_19,
        size: size_img,
        size_no: size_19,
        blockchain: blockchain_19,
        blockchain_img: blockchain_img_19
    },
    {
        id:15,
        mcard_link: mcard_link_15,
        mint_status: mint_status_15,
        img: mainpicA_15,
        title:title_15,
        text:small_description_15,
        category: category_15,
        price_icon: price_icon_15,
        price_no: price_15,
        size: size_img,
        size_no: size_15,
        blockchain: blockchain_15,
        blockchain_img: blockchain_img_15
    },
    {
        id:16,
        mcard_link: mcard_link_16,
        mint_status: mint_status_16,
        img: mainpicA_16,
        title:title_16,
        text:small_description_16,
        category: category_16,
        price_icon: price_icon_16,
        price_no: price_16,
        size: size_img,
        size_no: size_16,
        blockchain: blockchain_16,
        blockchain_img: blockchain_img_16
    },
    {
        id:17,
        mcard_link: mcard_link_17,
        mint_status: mint_status_17,
        img: mainpicA_17,
        title:title_17,
        text:small_description_17,
        category: category_17,
        price_icon: price_icon_17,
        price_no: price_17,
        size: size_img,
        size_no: size_17,
        blockchain: blockchain_17,
        blockchain_img: blockchain_img_17
    },
    {
        id:18,
        mcard_link: mcard_link_18,
        mint_status: mint_status_18,
        img: mainpicA_18,
        title:title_18,
        text:small_description_18,
        category: category_18,
        price_icon: price_icon_18,
        price_no: price_18,
        size: size_img,
        size_no: size_18,
        blockchain: blockchain_18,
        blockchain_img: blockchain_img_18
    },
    {
        id:12,
        mcard_link: mcard_link_12,
        mint_status: mint_status_12,
        img: mainpicA_12,
        title:title_12,
        text:small_description_12,
        category: category_12,
        price_icon: price_icon_12,
        price_no: price_12,
        size: size_img,
        size_no: size_12,
        blockchain: blockchain_12,
        blockchain_img: blockchain_img_12
    }
]


const BottomCard = (props) => {
    const { mint_status, img, title, text, size, size_no, price_no, blockchain_img, mcard_link, price_icon} = props.bottomCard;
    
    
    function ReadMore ({ children = 100 }) {
        const text = children;
        const [isShown, setIsShownLess] = useState(true);
        const result = isShown ? text.slice(0, 105) : text;
    
        function toggleIsShown() {
            setIsShownLess((!isShown));
        }

        function togetherness() {
            toggleIsShown();
            scrollUp();
          }
    
        return(
        <p>
         {result}
         <Link to={mcard_link}>
         <span onClick={togetherness}>...</span>  
         </Link> 
        </p>
        )
    }
  
  const scrollUp = () => {
    window.scrollTo({
      top:0,
      behavior: "smooth"
    })
  }

    return (

<div className='bottomCard'>
    <div className='container-1-bottom'>
            <div className='box-1-bottom'>
                <Link to={mcard_link} onClick={scrollUp}>
                <img className='bottomImg' src={img} alt=''/>
                </Link>
            </div>
        <div className='box-2-bottom'>
            <div className='top-flex'>
                <div className='mint-flex'>
                    <div className='titleBottom'>
                        <ReadMoreTitle>
                        {title} 
                        </ReadMoreTitle>
                        
                        
                    </div>
                    <div className='mint-status'>
                        <div className='circle'>{mint_status}</div>
                    </div>
                </div>
                    <div className='textBottom'>
                        <ReadMore>
                        {text}
                        </ReadMore>
                        
                    </div>
                    <div className='container-1-bottom-2'>
                        <div className="bottom-card-icon">
                                <img className="bottom-card-icon-img" src={price_icon} alt=""/>
                                <div className="bottom-card-icon-text">{price_no}</div>
                        </div>  
                        <img className="bottom-card-icon" src={blockchain_img} alt=""/>
                        <div className="bottom-card-icon">
                                <img className="bottom-card-icon-img" src={size} alt=""/>
                                <div className="bottom-card-icon-text">{size_no}</div>
                        </div>   
                 </div>
            </div>
        </div>      
    </div>
</div>
           
    );
} 

export default BottomCard;