import React from "react";

import twitter from '../components/icons/twitter.svg';
import discord from '../components/icons/discord.svg';
import telegram from '../components/icons/telegram.svg';
import web from '../components/icons/web.svg';
import solana from '../components/icons/solana.svg'
import sol from '../components/icons/sol.svg'


export const mcard_link_19 = "/main-card19";
export const title_19 = "Great Goats"; 
export const small_description_19 = "Great Goats is taking a lifestyle branding approach in web3, more so a label for the community.";
export const price_19 = "2";
export const size_19 = "6000";
export const traits_count_19 = "N/A";
export const category_19 = "Collectible";
export const mint_status_19 = "5th June";
export const twitter_link_19 = "https://twitter.com/GreatGoatsNFT";
export const discord_link_19 = "https://discord.gg/GreatGoats";
export const telegram_link_19 = "";
export const web_link_19 = "https://greatgoats.io/";
export const twitter_count_19 = "404.3K";
export const discord_count_19 = "187.4K";
export const blockchain_19 = "solana";
export const blockchain_img_19 = solana;
export const price_icon_19 = sol;

export const mainpicA_19 = "https://pbs.twimg.com/media/FTkIetdUAAAviXQ?format=jpg&name=large";
export const mainpicB_19 = "https://pbs.twimg.com/media/FTKL-sYVsAAodoQ?format=jpg&name=large";
 

const MainCard19 = () => {

    return(
        <div className='mainCard'>
            <div className="main-big-flex">
                <div className="main-big-flex-left">
                        <div className="main-title">{title_19}</div>
                    
                    <div className="main-big-description"><div>
                    Ever since Great Goats was created, we knew IRL advertising campaigns played a big part in pushing our agenda. With the help of our amazing community, Great Goats managed to become a worldwide name, being spread across multiples countries around the globe.                 
                 </div>
 </div>
                    <div className="main-big-bottom-flex">
                        <div className="main-bottom-column-1">
                            PROJECT DETAILS
                            <ul>
                                <li>Price: {price_19}</li>
                                <li>Collection Count: {size_19}</li>
                                <li>Traits Count: {traits_count_19}</li>
                                <li>Category: {category_19}</li>
                                <li>Presale Date: {mint_status_19}</li>
                            </ul>
                            
                            </div>
                        <div className="main-bottom-column-2">
                            <a href={twitter_link_19} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={twitter} alt=""/>
                                    <div className="new-main-icon-left-text">{twitter_count_19}</div>
                                </div>
                            </a>
                            <a href={discord_link_19} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={discord} alt=""/>
                                    <div className="new-main-icon-left-text">{discord_count_19}</div>
                            </div>
                            </a>
                        </div>
                        <div className="main-bottom-column-3">
                        <a href={telegram_link_19} target="_blank" rel="noreferrer">
                        <div className="new-main-icon-right">
                                <img className="new-main-icon-right-img" src={telegram} alt=""/>
                        </div>
                        </a>         
                        <a href={web_link_19} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-right">
                                    <img className="new-main-icon-right-img" src={web} alt=""/>
                        </div>
                        </a>
                        
                        </div>
                    </div>
                </div>
                
                <div className="main-big-flex-right">
                    <div className="circle-main">{mint_status_19}</div>
                    <img className="main-big-flex-right-img" src={mainpicA_19} alt=""/>
                    <img className="main-big-flex-right-img" src={mainpicB_19} alt=""/>
                </div>

                
            </div>
    </div>
    );
    
}

export default MainCard19;