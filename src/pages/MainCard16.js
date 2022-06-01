import React from "react";

import twitter from '../components/icons/twitter.svg';
import discord from '../components/icons/discord.svg';
import telegram from '../components/icons/telegram.svg';
import web from '../components/icons/web.svg';


export const mcard_link_16 = "/main-card16";
export const title_16 = "Brut(e) NFT"; 
export const small_description_16 = "Brut(e) NFT is not your regular NFT by all means. Using various visual approaches such as pop art, we strive to educate people in the sphere of the NFT world in using eco-friendly materials that are proven to be harmless to the planet Earth. Brut(e) NFT collection will be a total of 6666 collectible pieces, with numerous perks.";
export const price_16 = "N/A";
export const size_16 = "6666";
export const traits_count_16 = "N/A";
export const category_16 = "Collectible";
export const mint_status_16 = "6th June";
export const twitter_link_16 = "https://twitter.com/brutenft";
export const discord_link_16 = "https://discord.gg/brutenft";
export const telegram_link_16 = "";
export const web_link_16 = "https://brutenft.io/";
export const twitter_count_16 = "18.6K";
export const discord_count_16 = "16.7K";
export const blockchain_16 = "";
export const blockchain_img_16 = "";
export const price_icon_16 = "";

export const mainpicA_16 = "https://pbs.twimg.com/media/FTnywFWWQAsDLDh?format=jpg&name=4096x4096";
export const mainpicB_16 = "https://pbs.twimg.com/media/FTXj3kWWYAAnbTD?format=jpg&name=4096x4096";
 

const MainCard16 = () => {

    return(
        <div className='mainCard'>
            <div className="main-big-flex">
                <div className="main-big-flex-left">
                        <div className="main-title">{title_16}</div>
                    
                    <div className="main-big-description"><div>
                    Brut(e) NFT is not your regular NFT by all means. Using various visual approaches such as pop art, we strive to educate people in the sphere of the NFT world in using eco-friendly materials that are proven to be harmless to the planet Earth. Brut(e) NFT collection will be a total of 6666 collectible pieces, with numerous perks.</div>
 </div>
                    <div className="main-big-bottom-flex">
                        <div className="main-bottom-column-1">
                            PROJECT DETAILS
                            <ul>
                                <li>Price: {price_16}</li>
                                <li>Collection Count: {size_16}</li>
                                <li>Traits Count: {traits_count_16}</li>
                                <li>Category: {category_16}</li>
                                <li>Presale Date: {mint_status_16}</li>
                            </ul>
                            
                            </div>
                        <div className="main-bottom-column-2">
                            <a href={twitter_link_16} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={twitter} alt=""/>
                                    <div className="new-main-icon-left-text">{twitter_count_16}</div>
                                </div>
                            </a>
                            <a href={discord_link_16} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={discord} alt=""/>
                                    <div className="new-main-icon-left-text">{discord_count_16}</div>
                            </div>
                            </a>
                        </div>
                        <div className="main-bottom-column-3">
                        <a href={telegram_link_16} target="_blank" rel="noreferrer">
                        <div className="new-main-icon-right">
                                <img className="new-main-icon-right-img" src={telegram} alt=""/>
                        </div>
                        </a>         
                        <a href={web_link_16} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-right">
                                    <img className="new-main-icon-right-img" src={web} alt=""/>
                        </div>
                        </a>
                        
                        </div>
                    </div>
                </div>
                
                <div className="main-big-flex-right">
                    <div className="circle-main">{mint_status_16}</div>
                    <img className="main-big-flex-right-img" src={mainpicA_16} alt=""/>
                    <img className="main-big-flex-right-img" src={mainpicB_16} alt=""/>
                </div>

                
            </div>
    </div>
    );
    
}

export default MainCard16;