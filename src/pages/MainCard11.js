import React from "react";

import twitter from '../components/icons/twitter.svg';
import discord from '../components/icons/discord.svg';
import telegram from '../components/icons/telegram.svg';
import web from '../components/icons/web.svg';
import solana from '../components/icons/solana.svg'
import sol from '../components/icons/sol.svg'


export const mcard_link_11 = "/main-card11";
export const title_11 = "Roadhouse Runts"; 
export const small_description_11 = "the Roadhouse is the home of the Runts, a community of 6942 despicable degens from all over the world, that love to drink, fight, smoke & gamble";
export const price_11 = "1";
export const size_11 = "6842";
export const traits_count_11 = "N/A";
export const category_11 = "Collectible";
export const mint_status_11 = "3rd June";
export const twitter_link_11 = "https://twitter.com/roadhouserunts";
export const discord_link_11 = "https://discord.com/invite/roadhouserunts";
export const telegram_link_11 = "";
export const web_link_11 = "https://theultimatesurvivor.com";
export const twitter_count_11 = "23.9K";
export const discord_count_11 = "5.2K";
export const blockchain_11 = "solana";
export const blockchain_img_11 = solana;
export const price_icon_11 = sol;

export const mainpicA_11 = "https://pbs.twimg.com/media/FTtqqgwXwAsV2l-?format=jpg&name=medium"
export const mainpicB_11 = "https://pbs.twimg.com/media/FTs_msvX0AAUGDU?format=jpg&name=medium";
 

const MainCard11 = () => {

    return(
        <div className='mainCard'>
            <div className="main-big-flex">
                <div className="main-big-flex-left">
                        <div className="main-title">{title_11}</div>
                    
                    <div className="main-big-description"><div>
The Roadhouse is the home of the Runts, a community of 6942 despicable degens from all over the world, that love to drink, fight, smoke & gamble<br/><br/>
existing in an undisclosed location, known only to its members. 4 different dog breeds cohabit and run the underground world of the roadhouse runts</div>
 </div>
                    <div className="main-big-bottom-flex">
                        <div className="main-bottom-column-1">
                            PROJECT DETAILS
                            <ul>
                                <li>Price: {price_11}</li>
                                <li>Collection Count: {size_11}</li>
                                <li>Traits Count: {traits_count_11}</li>
                                <li>Category: {category_11}</li>
                                <li>Presale Date: {mint_status_11}</li>
                            </ul>
                            
                            </div>
                        <div className="main-bottom-column-2">
                            <a href={twitter_link_11} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={twitter} alt=""/>
                                    <div className="new-main-icon-left-text">{twitter_count_11}</div>
                                </div>
                            </a>
                            <a href={discord_link_11} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={discord} alt=""/>
                                    <div className="new-main-icon-left-text">{discord_count_11}</div>
                            </div>
                            </a>
                        </div>
                        <div className="main-bottom-column-3">
                        <a href={telegram_link_11} target="_blank" rel="noreferrer">
                        <div className="new-main-icon-right">
                                <img className="new-main-icon-right-img" src={telegram} alt=""/>
                        </div>
                        </a>         
                        <a href={web_link_11} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-right">
                                    <img className="new-main-icon-right-img" src={web} alt=""/>
                        </div>
                        </a>
                        
                        </div>
                    </div>
                </div>
                
                <div className="main-big-flex-right">
                    <div className="circle-main">{mint_status_11}</div>
                    <img className="main-big-flex-right-img" src={mainpicA_11} alt=""/>
                    <img className="main-big-flex-right-img" src={mainpicB_11} alt=""/>
                </div>

                
            </div>
    </div>
    );
    
}

export default MainCard11;