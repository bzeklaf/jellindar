import React from "react";

import twitter from '../components/icons/twitter.svg';
import discord from '../components/icons/discord.svg';
import telegram from '../components/icons/telegram.svg';
import web from '../components/icons/web.svg';
import ethereum from '../components/icons/ethereum.svg'
import eth from '../components/icons/eth.svg'

export const mcard_link_1 = "/main-card1";
export const title_1 = "Vogu:Miami"; 
export const small_description_1 = "Nifty Gateway’s first ever fully verified & curated PFP NFT Drop in partnership with Vogu Miami.  One of last summer's hottest drops with almost 9 thousand ETH sold on the secondary market is back this summer to replicate its success";
export const price_1 = "TBA";
export const size_1 = "7777";
export const traits_count_1 = "N/A";
export const category_1 = "Fashion";
export const mint_status_1 = "2nd June";
export const twitter_link_1 = "https://twitter.com/the_vogu";
export const discord_link_1 = "https://discord.gg/vogu";
export const telegram_link_1 = "";
export const web_link_1 = "https://www.thevogu.io/vogumiami";
export const twitter_count_1 = "78.3K";
export const discord_count_1 = "17K";
export const blockchain_1 = "ethereum";
export const blockchain_img_1 = ethereum;
export const price_icon_1 = eth;

export const mainpicA_1 = "https://pbs.twimg.com/media/FTa9h4YWIAAbR_e?format=jpg&name=large";
export const mainpicB_1 = "https://pbs.twimg.com/media/FTEvw_3VsAADmrZ?format=jpg&name=4096x4096";
 


const MainCard1 = () => {

    return(
        <div className='mainCard'>
            <div className="main-big-flex">
                <div className="main-big-flex-left">
                        <div className="main-title">{title_1}</div>
                    
                    <div className="main-big-description"><div>
                    Nifty Gateway’s first ever fully verified & curated PFP NFT Drop in partnership with Vogu Miami.  One of last summer's hottest drops with almost 9 thousand ETH sold on the secondary market is back this summer to replicate its success, teaming up with some of Miami's hottest young talents and offering some of the most unique utilities in the NFT market, such as mayor for the day for a lucky NFT holder and access to the most exclusive drip & art in Miami. <br/><br/>

Jared Rok from the famous and respected Rok real estate dynasty has his Rok MIA threads on some of the NBA’s hottest talents. From NBA game days to NFL pro bowls you are bound to spot someone wearing a Rok drip. Mya Diodati’s hand painted jackets are made to order and have made their way courtside as well. Last but not least, we have one of the most positive human beings, Vic Garcia. A staple in the Miami scene, Vic's positivity shines through in all of his paintings. With celebrities, athletes and socialites all sporting his art on their walls and wearing his clothing line in major events. Schools, businesses and events around Miami have all reached out to Vic for his amazing murals.<br/><br/>

Vogu Miami’s NFT holder’s utilities in partnership with JRok, Mya, and Vic include these claimable items: <br/><br/>
30 jrok hats
20 jrok shirts
10 Hype x Vogu
5 Vic pants
5 Vic shirts
4 jackets (including the all in one)
5 Vic Backgrounds<br/><br/>

In addition to the claimable items, Vogu Miami is offering exclusive events, access, and giveaways listed below:<br/><br/>
Mayor for the day 
Surfboard giveaway 
1 art session with Mya a month for 12 month
2 Vic Garcia painting events
Glass box party w Vic Jason and Mya
JRok real estate session
                  </div>
 </div>
                    <div className="main-big-bottom-flex">
                        <div className="main-bottom-column-1">
                            PROJECT DETAILS
                            <ul>
                                <li>Price: {price_1}</li>
                                <li>Collection Count: {size_1}</li>
                                <li>Traits Count: {traits_count_1}</li>
                                <li>Category: {category_1}</li>
                                <li>Presale Date: {mint_status_1}</li>
                            </ul>
                            
                            </div>
                        <div className="main-bottom-column-2">
                            <a href={twitter_link_1} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={twitter} alt=""/>
                                    <div className="new-main-icon-left-text">{twitter_count_1}</div>
                                </div>
                            </a>
                            <a href={discord_link_1} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={discord} alt=""/>
                                    <div className="new-main-icon-left-text">{discord_count_1}</div>
                            </div>
                            </a>
                        </div>
                        <div className="main-bottom-column-3">
                        <a href={telegram_link_1} target="_blank" rel="noreferrer">
                        <div className="new-main-icon-right">
                                <img className="new-main-icon-right-img" src={telegram} alt=""/>
                        </div>
                        </a>         
                        <a href={web_link_1} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-right">
                                    <img className="new-main-icon-right-img" src={web} alt=""/>
                        </div>
                        </a>
                        
                        </div>
                    </div>
                </div>
                
                <div className="main-big-flex-right">
                    <div className="circle-main">{mint_status_1}</div>
                    <img className="main-big-flex-right-img" src={mainpicA_1} alt=""/>
                    <img className="main-big-flex-right-img" src={mainpicB_1} alt=""/>
                </div>

                
            </div>
    </div>
    );
    
}

export default MainCard1;