import React from "react";

import twitter from '../components/icons/twitter.svg';
import discord from '../components/icons/discord.svg';
import telegram from '../components/icons/telegram.svg';
import web from '../components/icons/web.svg';
import solana from '../components/icons/solana.svg'
import sol from '../components/icons/sol.svg'

export const mcard_link_2 = "/main-card2";
export const title_2 = "Midnight Panthers"; 
export const small_description_2 = "HANGOVER FROM THE NIGHT BEFORE WE TRY TO KEEP OUR SH** TOGETHER. A bad headache and some foggy memories are the only things we now have.";
export const price_2 = "TBC";
export const size_2 = "TBC";
export const traits_count_2 = "TBC";
export const category_2 = "Collectible";
export const mint_status_2 = "TBC";
export const twitter_link_2 = "https://twitter.com/MidnightPanthrs";
export const discord_link_2 = "https://t.co/9FUs1f0a9r";
export const telegram_link_2 = "";
export const web_link_2 = "https://www.midnightpanthers.com/";
export const twitter_count_2 = "60.9K";
export const discord_count_2 = "91.7K";
export const blockchain_2 = "solana";
export const blockchain_img_2 = solana;
export const price_icon_2 = sol;

export const mainpicA_2 = "https://pbs.twimg.com/media/FTS_FPxWQAU4oYE?format=png&name=900x900";
export const mainpicB_2 = "https://pbs.twimg.com/media/FTIpf0bUYAIpOM2?format=jpg&name=4096x4096";
 

const MainCard2 = () => {

    return(
        <div className='mainCard'>
            <div className="main-big-flex">
                <div className="main-big-flex-left">
                        <div className="main-title">{title_2}</div>
                    
                    <div className="main-big-description"><div>
                    HANGOVER FROM THE NIGHT BEFORE WE TRY TO KEEP OUR SH** TOGETHER.<br/><br/>
A bad headache and some foggy memories are the only things we now have.
But there is no time to rest. We are dreamers who love confusing the day with the night.
Our credo stands with the stars and the neon lights. It’s from there that we rise.<br/><br/>

A quick shower to clean up our minds and we meet at the bar. Bring the rest, I try to bring myself.<br/><br/>

Tonight is the night. Let's get ready.


</div>
 </div>
                    <div className="main-big-bottom-flex">
                        <div className="main-bottom-column-1">
                            PROJECT DETAILS
                            <ul>
                                <li>Price: {price_2}</li>
                                <li>Collection Count: {size_2}</li>
                                <li>Traits Count: {traits_count_2}</li>
                                <li>Category: {category_2}</li>
                                <li>Presale Date: {mint_status_2}</li>
                            </ul>
                            
                            </div>
                        <div className="main-bottom-column-2">
                            <a href={twitter_link_2} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={twitter} alt=""/>
                                    <div className="new-main-icon-left-text">{twitter_count_2}</div>
                                </div>
                            </a>
                            <a href={discord_link_2} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={discord} alt=""/>
                                    <div className="new-main-icon-left-text">{discord_count_2}</div>
                            </div>
                            </a>
                        </div>
                        <div className="main-bottom-column-3">
                        <a href={telegram_link_2} target="_blank" rel="noreferrer">
                        <div className="new-main-icon-right">
                                <img className="new-main-icon-right-img" src={telegram} alt=""/>
                        </div>
                        </a>         
                        <a href={web_link_2} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-right">
                                    <img className="new-main-icon-right-img" src={web} alt=""/>
                        </div>
                        </a>
                        
                        </div>
                    </div>
                </div>
                
                <div className="main-big-flex-right">
                    <div className="circle-main">{mint_status_2}</div>
                    <img className="main-big-flex-right-img" src={mainpicA_2} alt=""/>
                    <img className="main-big-flex-right-img" src={mainpicB_2} alt=""/>
                </div>

                
            </div>
    </div>
    );
    
}

export default MainCard2;