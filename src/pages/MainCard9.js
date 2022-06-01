import React from "react";

import twitter from '../components/icons/twitter.svg';
import discord from '../components/icons/discord.svg';
import telegram from '../components/icons/telegram.svg';
import web from '../components/icons/web.svg';
import solana from '../components/icons/solana.svg'
import sol from '../components/icons/sol.svg'


export const mcard_link_9 = "/main-card9";
export const title_9 = "Sardine's Revolt"; 
export const small_description_9 = "A chemical accident in the depths of the waters awakened a species of Sardine extinct millions of years ago";
export const price_9 = "1.5";
export const size_9 = "4444";
export const traits_count_9 = "N/A";
export const category_9 = "Collectibles";
export const mint_status_9 = "2nd June";
export const twitter_link_9 = "https://twitter.com/SardinesRevolt";
export const discord_link_9 = "";
export const telegram_link_9 = "";
export const web_link_9 = "https://sardinesrevolt.com/";
export const twitter_count_9 = "5.1K";
export const discord_count_9 = "N/A";
export const blockchain_9 = "solana";
export const blockchain_img_9 = solana;
export const price_icon_9 = sol;

export const mainpicA_9 = "https://pbs.twimg.com/media/FTjiQKEXsAEceSE?format=png&name=900x900";
export const mainpicB_9 = "https://pbs.twimg.com/media/FTi_WiSXsAgkrZQ?format=png&name=900x900";

const MainCard9 = () => {

    return(
        <div className='mainCard'>
            <div className="main-big-flex">
                <div className="main-big-flex-left">
                        <div className="main-title">{title_9}</div>
                    
                    <div className="main-big-description"><div>
A chemical accident in the depths of the waters awakened a species of Sardine extinct millions of years ago. In this sea full of whales and sharks that call themselves the great predators of the market, the sardines revolted and decided to show that the sea is ready for sardines. SARDINES REVOLT is invading the Solana Sea and will prove who is the true predator of this food chain.
                    </div>
 </div>
                    <div className="main-big-bottom-flex">
                        <div className="main-bottom-column-1">
                            PROJECT DETAILS
                            <ul>
                                <li>Price: {price_9}</li>
                                <li>Collection Count: {size_9}</li>
                                <li>Traits Count: {traits_count_9}</li>
                                <li>Category: {category_9}</li>
                                <li>Presale Date: {mint_status_9}</li>
                            </ul>
                            
                            </div>
                        <div className="main-bottom-column-2">
                            <a href={twitter_link_9} target="_blank"rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={twitter} alt=""/>
                                    <div className="new-main-icon-left-text">{twitter_count_9}</div>
                                </div>
                            </a>
                            <a href={discord_link_9} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={discord} alt=""/>
                                    <div className="new-main-icon-left-text">{discord_count_9}</div>
                            </div>
                            </a>
                        </div>
                        <div className="main-bottom-column-3">
                        <a href={telegram_link_9} target="_blank" rel="noreferrer">
                        <div className="new-main-icon-right">
                                <img className="new-main-icon-right-img" src={telegram} alt=""/>
                        </div>
                        </a>         
                        <a href={web_link_9} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-right">
                                    <img className="new-main-icon-right-img" src={web} alt=""/>
                        </div>
                        </a>
                        
                        </div>
                    </div>
                </div>
                
                <div className="main-big-flex-right">
                    <div className="circle-main">{mint_status_9}</div>
                    <img className="main-big-flex-right-img" src={mainpicA_9} alt=""/>
                    <img className="main-big-flex-right-img" src={mainpicB_9} alt=""/>
                
                </div>

                
            </div>
    </div>
    );
    
}

export default MainCard9;