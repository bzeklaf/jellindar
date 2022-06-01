import React from "react";

import twitter from '../components/icons/twitter.svg';
import discord from '../components/icons/discord.svg';
import telegram from '../components/icons/telegram.svg';
import web from '../components/icons/web.svg';
import solana from '../components/icons/solana.svg'
import sol from '../components/icons/sol.svg'


export const mcard_link_5 = "/main-card5";
export const title_5 = "Degen Islands"; 
export const small_description_5 = "Degen Islands a play-to-earn metaverse built on the Solana blockchain. Users can purchase their own islands and then enter a Minecraft-style metaverse to mine their land, collect materials and resources,";
export const price_5 = "1.2";
export const size_5 = "10K";
export const traits_count_5 = "N/A";
export const category_5 = "Metavers";
export const mint_status_5 = "1st June";
export const twitter_link_5 = "https://twitter.com/degenislands";
export const discord_link_5 = "https://discord.gg/M2QaedEGC2";
export const telegram_link_5 = "";
export const web_link_5 = "https://www.degenislands.com/";
export const twitter_count_5 = "23.7K";
export const discord_count_5 = "44.4K";
export const blockchain_5 = "solana";
export const blockchain_img_5 = solana;
export const price_icon_5 = sol;


export const mainpicA_5 = "https://pbs.twimg.com/media/FTTj65IXEAEbMQi?format=jpg&name=small"
export const mainpicB_5 = "https://pbs.twimg.com/media/FTNpyCNacAAOVFV?format=jpg&name=small";
 

const MainCard5 = () => {

    return(
        <div className='mainCard'>
            <div className="main-big-flex">
                <div className="main-big-flex-left">
                        <div className="main-title">{title_5}</div>
                    
                    <div className="main-big-description"><div>
                    Degen Islands a play-to-earn metaverse built on the Solana blockchain.

Users can purchase their own islands and then enter a Minecraft-style metaverse to mine their land, collect materials and resources, and then build, craft, farm, stake and rent to earn $NUGGETS and $DGOLD <br/><br/>

Think: Decentraland x Minecraft + Solana<br/><br/>

Our vision is to make the most accessible and fun P2E game on any blockchain.
</div>
 </div>
                    <div className="main-big-bottom-flex">
                        <div className="main-bottom-column-1">
                            PROJECT DETAILS
                            <ul>
                                <li>Price: {price_5}</li>
                                <li>Collection Count: {size_5}</li>
                                <li>Traits Count: {traits_count_5}</li>
                                <li>Category: {category_5}</li>
                                <li>Presale Date: {mint_status_5}</li>
                            </ul>
                            
                            </div>
                        <div className="main-bottom-column-2">
                            <a href={twitter_link_5} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={twitter} alt=""/>
                                    <div className="new-main-icon-left-text">{twitter_count_5}</div>
                                </div>
                            </a>
                            <a href={discord_link_5} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={discord} alt=""/>
                                    <div className="new-main-icon-left-text">{discord_count_5}</div>
                            </div>
                            </a>
                        </div>
                        <div className="main-bottom-column-3">
                        <a href={telegram_link_5} target="_blank" rel="noreferrer">
                        <div className="new-main-icon-right">
                                <img className="new-main-icon-right-img" src={telegram} alt=""/>
                        </div>
                        </a>         
                        <a href={web_link_5} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-right">
                                    <img className="new-main-icon-right-img" src={web} alt=""/>
                        </div>
                        </a>
                        
                        </div>
                    </div>
                </div>
                
                <div className="main-big-flex-right">
                    <div className="circle-main">{mint_status_5}</div>
                    <img className="main-big-flex-right-img" src={mainpicA_5} alt=""/>
                    <img className="main-big-flex-right-img" src={mainpicB_5} alt=""/>
                </div>

                
            </div>
    </div>
    );
    
}

export default MainCard5;