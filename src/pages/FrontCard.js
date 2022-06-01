import { Link } from "react-router-dom";
import eth from '../components/icons/eth.svg';
import discord from '../components/icons/discord.svg';
import telegram from '../components/icons/telegram.svg';
import twitter from '../components/icons/twitter.svg';
import web from '../components/icons/web.svg';
import { useState } from "react";

import {title_2, small_description_2, price_2, mint_status_2, twitter_link_2, discord_link_2, telegram_link_2, web_link_2, twitter_count_2, discord_count_2, mainpicA_2} from "./MainCard2";



const FrontCard = () => {

        function ReadMore ({ children = 100 }) {
                const text = children;
                const [isShown, setIsShownLess] = useState(true);
                const result = isShown ? text.slice(0, 207) : text;
            
                function toggleIsShown() {
                    setIsShownLess((!isShown));
                }
            
                return(
                <p>
                 {result}
                 <Link to="/main-card1">
                 <span onClick={toggleIsShown}>...</span>  
                 </Link> 
                </p>
                )
            }

    return (
       
        <div className='frontCard'>
        <div className='container-1-front'>
            <div className='box-1-front'>
            <Link to="/main-card2">
            <img className='frontImg' src={mainpicA_2} alt=""/>
            </Link>
            </div>
           <div className='box-2-front'>
           <div className='top-flex'>
            <div className="mint-flex">
            <div className='titleFront'>
                {title_2}
                </div>
                <div className='mint-status'>
            <div className='circle'>{mint_status_2}</div>
            </div>
            </div>
                
                <div className='textFront'>
                        <ReadMore>
                        {small_description_2}
                        </ReadMore>
                </div>
                <div className="all-front-icons">
                <div className="new-front-price">
                                <img className="new-front-price-img" src={eth} alt=""/>
                                <div className="new-front-price-text">{price_2}</div>
                        </div>    
                
            <div className='container-1-front-bottom'>
                        <a href={twitter_link_2} target="_blank" rel="noreferrer">
                        <div className="new-front-icon">
                                <img className="new-front-icon-img" src={twitter} alt=""/>
                                <div className="new-front-price-text-bottom">{twitter_count_2}</div>
                        </div>
                        </a>
                        <a href={discord_link_2} target="_blank" rel="noreferrer">
                        <div className="new-front-icon">
                                <img className="new-front-icon-img" src={discord} alt=""/>
                                <div className="new-front-price-text-bottom">{discord_count_2}</div>
                        </div>
                        </a>
                        <a href={web_link_2} target="_blank" rel="noreferrer">
                        <div className="new-front-icon">
                                <img className="new-front-icon-img-rt" src={web} alt=""/>
                        </div>
                        </a>
                        <a href={telegram_link_2} target="_blank" rel="noreferrer">
                        <div className="new-front-icon">
                                <img className="new-front-icon-img-rt" src={telegram}alt=""/>
                        </div> 
                        </a>
                        </div>
                        
             </div>
            </div>
           </div>
            
            
        </div>
        
    </div>
        
            
    );
} 

export default FrontCard;