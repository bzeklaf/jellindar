import React from "react";

import twitter from '../components/icons/twitter.svg';
import discord from '../components/icons/discord.svg';
import telegram from '../components/icons/telegram.svg';
import web from '../components/icons/web.svg';
import cardano from '../components/icons/cardano.svg'
import car from '../components/icons/car.svg'


export const mcard_link_14 = "/main-card14";
export const title_14 = "3QY"; 
export const small_description_14 = "3QY is the first Mahjong collection to drop on the CNFT Community. We are building a P2E web and mobile application where players will be able to earn while enjoying the game of mahjong. Inexperienced players will be able to join our discord to learn how to play mahjong or they can rent out their NFT to other players and earn at the same time.";
export const price_14 = "N/A";
export const size_14 = "N/A";
export const traits_count_14 = "N/A";
export const category_14 = "Collectible";
export const mint_status_14 = "5th June";
export const twitter_link_14 = "https://twitter.com/3QY_CNFT";
export const discord_link_14 = "https://discord.com/invite/v97H4C9M2m";
export const telegram_link_14 = "";
export const web_link_14 = "N/A";
export const twitter_count_14 = "1K";
export const discord_count_14 = "2.1K";
export const blockchain_14 = "cardano";
export const blockchain_img_14 = cardano;
export const price_icon_14 = car;

export const mainpicA_14 = "https://pbs.twimg.com/media/FTJ5ktvUAAERxRg?format=jpg&name=large"
export const mainpicB_14 = "https://pbs.twimg.com/media/FTs6xCHVsAA67bp?format=jpg&name=large";
 

const MainCard14 = () => {

    return(
        <div className='mainCard'>
            <div className="main-big-flex">
                <div className="main-big-flex-left">
                        <div className="main-title">{title_14}</div>
                    
                    <div className="main-big-description"><div>
3QY is the first Mahjong collection to drop on the CNFT Community. We are building a P2E web and mobile application where players will be able to earn while enjoying the game of mahjong. Inexperienced players will be able to join our discord to learn how to play mahjong or they can rent out their NFT to other players and earn at the same time. 
                    </div>
 </div>
                    <div className="main-big-bottom-flex">
                        <div className="main-bottom-column-1">
                            PROJECT DETAILS
                            <ul>
                                <li>Price: {price_14}</li>
                                <li>Collection Count: {size_14}</li>
                                <li>Traits Count: {traits_count_14}</li>
                                <li>Category: {category_14}</li>
                                <li>Presale Date: {mint_status_14}</li>
                            </ul>
                            
                            </div>
                        <div className="main-bottom-column-2">
                            <a href={twitter_link_14} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={twitter} alt=""/>
                                    <div className="new-main-icon-left-text">{twitter_count_14}</div>
                                </div>
                            </a>
                            <a href={discord_link_14} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={discord} alt=""/>
                                    <div className="new-main-icon-left-text">{discord_count_14}</div>
                            </div>
                            </a>
                        </div>
                        <div className="main-bottom-column-3">
                        <a href={telegram_link_14} target="_blank" rel="noreferrer">
                        <div className="new-main-icon-right">
                                <img className="new-main-icon-right-img" src={telegram} alt=""/>
                        </div>
                        </a>         
                        <a href={web_link_14} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-right">
                                    <img className="new-main-icon-right-img" src={web} alt=""/>
                        </div>
                        </a>
                        
                        </div>
                    </div>
                </div>
                
                <div className="main-big-flex-right">
                    <div className="circle-main">{mint_status_14}</div>
                    <img className="main-big-flex-right-img" src={mainpicA_14} alt=""/>
                    <img className="main-big-flex-right-img" src={mainpicB_14} alt=""/>
                </div>

                
            </div>
    </div>
    );
    
}

export default MainCard14;