import React from "react";

import twitter from '../components/icons/twitter.svg';
import discord from '../components/icons/discord.svg';
import telegram from '../components/icons/telegram.svg';
import web from '../components/icons/web.svg';
import solana from '../components/icons/solana.svg'
import sol from '../components/icons/sol.svg'


export const mcard_link_8 = "/main-card8";
export const title_8 = "Suteki"; 
export const small_description_8 = "Suteki is a collection of incredibly unique and detailed anime NFTs created to cultivate a community of passionate peers on the Solona network.";
export const price_8 = "0.035";
export const size_8 = "6000";
export const traits_count_8 = "660";
export const category_8 = "Collectible";
export const mint_status_8 = "3rd June";
export const twitter_link_8 = "https://twitter.com/Moonies_NFT";
export const discord_link_8 = "https://discord.com/invite/HBrpKP6Pz8";
export const telegram_link_8 = "";
export const web_link_8 = "";
export const twitter_count_8 = "100K";
export const discord_count_8 = "89.9K";
export const blockchain_8 = "solana";
export const blockchain_img_8 = solana;
export const price_icon_8 = sol;

export const mainpicA_8 = "https://pbs.twimg.com/media/FTjxEAfXwAMDhiP?format=jpg&name=large"
export const mainpicB_8 = "https://pbs.twimg.com/media/FTjxEAiWAAEGitN?format=jpg&name=large";
 

const MainCard8 = () => {

    return(
        <div className='mainCard'>
            <div className="main-big-flex">
                <div className="main-big-flex-left">
                        <div className="main-title">{title_8}</div>
                    
                    <div className="main-big-description"><div>
Suteki is a collection of incredibly unique and detailed anime NFTs created to cultivate a community of passionate peers on the Solona network. Their focus is to create a platform via their discord, as well as a custom blog site, for up and coming anime artists/writers to help put a spotlight on their talent and reach a broader audience!
                    </div>
 </div>
                    <div className="main-big-bottom-flex">
                        <div className="main-bottom-column-1">
                            PROJECT DETAILS
                            <ul>
                                <li>Price: {price_8}</li>
                                <li>Collection Count: {size_8}</li>
                                <li>Traits Count: {traits_count_8}</li>
                                <li>Category: {category_8}</li>
                                <li>Presale Date: {mint_status_8}</li>
                            </ul>
                            
                            </div>
                        <div className="main-bottom-column-2">
                            <a href={twitter_link_8} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={twitter} alt=""/>
                                    <div className="new-main-icon-left-text">{twitter_count_8}</div>
                                </div>
                            </a>
                            <a href={discord_link_8} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={discord} alt=""/>
                                    <div className="new-main-icon-left-text">{discord_count_8}</div>
                            </div>
                            </a>
                        </div>
                        <div className="main-bottom-column-3">
                        <a href={telegram_link_8} target="_blank" rel="noreferrer">
                        <div className="new-main-icon-right">
                                <img className="new-main-icon-right-img" src={telegram} alt=""/>
                        </div>
                        </a>         
                        <a href={web_link_8} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-right">
                                    <img className="new-main-icon-right-img" src={web} alt=""/>
                        </div>
                        </a>
                        
                        </div>
                    </div>
                </div>
                
                <div className="main-big-flex-right">
                    <div className="circle-main">{mint_status_8}</div>
                    <img className="main-big-flex-right-img" src={mainpicA_8} alt=""/>
                    <img className="main-big-flex-right-img" src={mainpicB_8} alt=""/>
                </div>

                
            </div>
    </div>
    );
    
}

export default MainCard8;