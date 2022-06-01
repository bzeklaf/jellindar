import twitter_img from './components/icons/twitter.svg';
import discord_img from './components/icons/discord.svg';
import size_img from './components/icons/size.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import {mcard_link_1, mainpicA_1, title_1, small_description_1, price_1, mint_status_1, twitter_link_1, discord_link_1, twitter_count_1, discord_count_1, size_1, price_icon_1 } from "./pages/MainCard1";
import {mcard_link_2, mainpicA_2, title_2, small_description_2, price_2, mint_status_2, twitter_link_2, discord_link_2, twitter_count_2, discord_count_2, size_2, price_icon_2 } from "./pages/MainCard2";
import {mcard_link_3, mainpicA_3, title_3, small_description_3, price_3, mint_status_3, twitter_link_3, discord_link_3, twitter_count_3, discord_count_3, size_3, price_icon_3 } from "./pages/MainCard3";
import {mcard_link_4, mainpicA_4, title_4, small_description_4, price_4, mint_status_4, twitter_link_4, discord_link_4, twitter_count_4, discord_count_4, size_4, price_icon_4 } from "./pages/MainCard4";
import {mcard_link_5, mainpicA_5, title_5, small_description_5, price_5, mint_status_5, twitter_link_5, discord_link_5, twitter_count_5, discord_count_5, size_5, price_icon_5 } from "./pages/MainCard5";
import {mcard_link_6, mainpicA_6, title_6, small_description_6, price_6, mint_status_6, twitter_link_6, discord_link_6, twitter_count_6, discord_count_6, size_6, price_icon_6 } from "./pages/MainCard6";
import {mcard_link_7, mainpicA_7, title_7, small_description_7, price_7, mint_status_7, twitter_link_7, discord_link_7, twitter_count_7, discord_count_7, size_7, price_icon_7 } from "./pages/MainCard7";
import {mcard_link_8, mainpicA_8, title_8, small_description_8, price_8, mint_status_8, twitter_link_8, discord_link_8, twitter_count_8, discord_count_8, size_8, price_icon_8 } from "./pages/MainCard8";

export const cards = [
  {
    mcard_link: mcard_link_4,
    mint_status: mint_status_4,
    img: mainpicA_4,
    title:title_4,
    price: price_4,
    price_icon: price_icon_4,
    text: small_description_4,
    size: size_img,
    size_no: size_4,
    discord: discord_img,
    twitter: twitter_img,
    discord_no: discord_count_4,
    twitter_no: twitter_count_4,
    twitter_link: twitter_link_4,
    discord_link: discord_link_4, 
},
{
  mcard_link: mcard_link_5,
  mint_status: mint_status_5,
  img: mainpicA_5,
  title:title_5,
  price: price_5,
  price_icon: price_icon_5,
  text: small_description_5,
  size: size_img,
  size_no: size_5,
  discord: discord_img,
  twitter: twitter_img,
  discord_no: discord_count_5,
  twitter_no: twitter_count_5,
  twitter_link: twitter_link_5,
  discord_link: discord_link_5, 
},
  {
        mcard_link: mcard_link_1,
        mint_status: mint_status_1,
        img: mainpicA_1,
        title:title_1,
        price: price_1,
        price_icon: price_icon_1,
        text: small_description_1,
        size: size_img,
        size_no: size_1,
        discord: discord_img,
        twitter: twitter_img,
        discord_no: discord_count_1,
        twitter_no: twitter_count_1,
        twitter_link: twitter_link_1,
        discord_link: discord_link_1, 
    },
    {
        mcard_link: mcard_link_2,
        mint_status: mint_status_2,
        img: mainpicA_2,
        title:title_2,
        price: price_2,
        price_icon: price_icon_2,
        text: small_description_2,
        size: size_img,
        size_no: size_2,
        discord: discord_img,
        twitter: twitter_img,
        discord_no: discord_count_2,
        twitter_no: twitter_count_2,
        twitter_link: twitter_link_2,
        discord_link: discord_link_2, 
    },
    {
        mcard_link: mcard_link_3,
        mint_status: mint_status_3,
        img: mainpicA_3,
        title:title_3,
        price: price_3,
        price_icon: price_icon_3,
        text: small_description_3,
        size: size_img,
        size_no: size_3,
        discord: discord_img,
        twitter: twitter_img,
        discord_no: discord_count_3,
        twitter_no: twitter_count_3,
        twitter_link: twitter_link_3,
        discord_link: discord_link_3, 
    },
    {
        mcard_link: mcard_link_6,
        mint_status: mint_status_6,
        img: mainpicA_6,
        title:title_6,
        price: price_6,
        price_icon: price_icon_6,
        text: small_description_6,
        size: size_img,
        size_no: size_6,
        discord: discord_img,
        twitter: twitter_img,
        discord_no: discord_count_6,
        twitter_no: twitter_count_6,
        twitter_link: twitter_link_6,
        discord_link: discord_link_6, 
    },
    {
        mcard_link: mcard_link_7,
        mint_status: mint_status_7,
        img: mainpicA_7,
        title:title_7,
        price: price_7,
        price_icon: price_icon_7,
        text: small_description_7,
        size: size_img,
        size_no: size_7,
        discord: discord_img,
        twitter: twitter_img,
        discord_no: discord_count_7,
        twitter_no: twitter_count_7,
        twitter_link: twitter_link_7,
        discord_link: discord_link_7, 
    },
    {
        mcard_link: mcard_link_8,
        mint_status: mint_status_8,
        img: mainpicA_8,
        title:title_8,
        price: price_8,
        price_icon: price_icon_8,
        text: small_description_8,
        size: size_img,
        size_no: size_8,
        discord: discord_img,
        twitter: twitter_img,
        discord_no: discord_count_8,
        twitter_no: twitter_count_8,
        twitter_link: twitter_link_8,
        discord_link: discord_link_8, 
    }
]

const Card = (props) => {
    const { mint_status, img, title, price, price_icon, text, size, discord, twitter, size_no, discord_no, twitter_no, twitter_link, discord_link, mcard_link} = props.card;
   
   

   function ReadMore ({ children = 80 }) {
        const text = children;
        const [isShown, setIsShownLess] = useState(true);
        const result = isShown ? text.slice(0, 80) : text;
    
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
        
       <div className='card'>
            <div className="circle">
                {mint_status}
            </div>
            <Link to={mcard_link} onClick={scrollUp}>
            <img className='img' src={img} alt=''/>
            </Link>
            
           <div className='title'>
             {title}
           </div>
           
          <div className='text'>
          <ReadMore>
            {text}
            </ReadMore>
          </div>
          
           
           <div className="card-icon-price">
                                <img className="card-icon-price-img" src={price_icon} alt=""/>
                                <div className="card-icon-price-text">{price}</div>
            </div> 
         
             <div className='container-1'>
            <div className="card-icon">
                                <img className="card-icon-img" src={size} alt=""/>
                                <div className="card-icon-text">{size_no}</div>
            </div> 
            <a href={discord_link} target="_blank" rel="noreferrer">
                <div className="card-icon">
                                <img className="card-icon-img" src={discord} alt=""/>
                                <div className="card-icon-text">{discord_no}</div>     
            </div> 
            </a>
            <a href={twitter_link} target="_blank" rel="noreferrer">
            <div className="card-icon">
                                <img className="card-icon-img" src={twitter} alt=""/>
                                <div className="card-icon-text">{twitter_no}</div>
            </div> 
            </a>
          </div>
         </div>
    );
} 

export default Card;