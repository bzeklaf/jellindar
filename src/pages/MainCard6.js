import React from "react";

import twitter from '../components/icons/twitter.svg';
import discord from '../components/icons/discord.svg';
import telegram from '../components/icons/telegram.svg';
import web from '../components/icons/web.svg';
import ethereum from '../components/icons/ethereum.svg'
import eth from '../components/icons/eth.svg'


export const mcard_link_6 = "/main-card6";
export const title_6 = "Dribblie"; 
export const small_description_6 = "Dribblie is a Play to Earn football manager, where players from different galaxies fight for glory. Earn by staking, owning, or renting NFTs and make income from what you love doing  most - playing football.";
export const price_6 = "0.12";
export const size_6 = "10K";
export const traits_count_6 = "N/A";
export const category_6 = "Gaming";
export const mint_status_6 = "2nd June";
export const twitter_link_6 = "https://twitter.com/DribblieGame";
export const discord_link_6 = "https://discord.gg/dribblie";
export const telegram_link_6 = "";
export const web_link_6 = "https://www.dribblie.com/";
export const twitter_count_6 = "13.1";
export const discord_count_6 = "21.6";
export const blockchain_6 = "ethereum";
export const blockchain_img_6 = ethereum;
export const price_icon_6 = eth;

export const mainpicA_6 = "https://pbs.twimg.com/media/FTdf7NaWYAAdjuw?format=jpg&name=large"
export const mainpicB_6 = "https://pbs.twimg.com/media/FTSSxB5WQAAcOqE?format=jpg&name=large";
 

const MainCard6 = () => {

    return(
        <div className='mainCard'>
            <div className="main-big-flex">
                <div className="main-big-flex-left">
                        <div className="main-title">{title_6}</div>
                    
                    <div className="main-big-description"><div>
Dribblie is a Play to Earn football manager, where players from different galaxies fight for glory. Earn by staking, owning, or renting NFTs and make income from what you love doing most - playing football. Dribblie is the first deflationary play to earn game. Deflationary NFTs mean that the value of the remaining assets increase overtime. Deflation is achieved by unique burning and staking mechanisms which are core drivers of the game and supply chain.
</div>
 </div>
                    <div className="main-big-bottom-flex">
                        <div className="main-bottom-column-1">
                            PROJECT DETAILS
                            <ul>
                                <li>Price: {price_6}</li>
                                <li>Collection Count: {size_6}</li>
                                <li>Traits Count: {traits_count_6}</li>
                                <li>Category: {category_6}</li>
                                <li>Presale Date: {mint_status_6}</li>
                            </ul>
                            
                            </div>
                        <div className="main-bottom-column-2">
                            <a href={twitter_link_6} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={twitter} alt=""/>
                                    <div className="new-main-icon-left-text">{twitter_count_6}</div>
                                </div>
                            </a>
                            <a href={discord_link_6} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={discord} alt=""/>
                                    <div className="new-main-icon-left-text">{discord_count_6}</div>
                            </div>
                            </a>
                        </div>
                        <div className="main-bottom-column-3">
                        <a href={telegram_link_6} target="_blank" rel="noreferrer">
                        <div className="new-main-icon-right">
                                <img className="new-main-icon-right-img" src={telegram} alt=""/>
                        </div>
                        </a>         
                        <a href={web_link_6} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-right" rel="noreferrer">
                                    <img className="new-main-icon-right-img" src={web} alt=""/>
                        </div>
                        </a>
                        
                        </div>
                    </div>
                </div>
                
                <div className="main-big-flex-right">
                    <div className="circle-main">{mint_status_6}</div>
                    <img className="main-big-flex-right-img" src={mainpicA_6} alt=""/>
                    <img className="main-big-flex-right-img" src={mainpicB_6} alt=""/>
                </div>

                
            </div>
    </div>
    );
    
}

export default MainCard6;