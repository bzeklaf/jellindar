import React from "react";

import twitter from '../components/icons/twitter.svg';
import discord from '../components/icons/discord.svg';
import telegram from '../components/icons/telegram.svg';
import web from '../components/icons/web.svg';
import ethereum from '../components/icons/ethereum.svg'
import eth from '../components/icons/eth.svg'


export const mcard_link_4 = "/main-card4";
export const title_4 = "Grand Ape Gang"; 
export const small_description_4 = "Grand Ape Gang is our vision of NFT linked to rap culture based on ETH. 9999 Ape Gang Collection will provide you full exclusive access to our gangsta themed infrastructure and community with all the benefits";
export const price_4 = "0.15";
export const size_4 = "9999";
export const traits_count_4 = "N/A";
export const category_4 = "Collectible";
export const mint_status_4 = "31st May";
export const twitter_link_4 = "https://twitter.com/GrandApeGang";
export const discord_link_4 = "https://discord.com/invite/grandapegang";
export const telegram_link_4 = "";
export const web_link_4 = "https://thegag.biz/?upcomingnft";
export const twitter_count_4 = "65.1K";
export const discord_count_4 = "49K";
export const blockchain_4 = "ethereum";
export const blockchain_img_4 = ethereum;
export const price_icon_4 = eth;

export const mainpicA_4 = "https://pbs.twimg.com/media/FTJWK41UUAY1rPC?format=png&name=small";
export const mainpicB_4 = "https://pbs.twimg.com/media/FTMyj9EWIAAw_0y?format=png&name=small";
 

const MainCard4 = () => {

    return(
        <div className='mainCard'>
            <div className="main-big-flex">
                <div className="main-big-flex-left">
                        <div className="main-title">{title_4}</div>
                    
                    <div className="main-big-description"><div>
                    Grand Ape Gang is our vision of NFT linked to rap culture based on ETH. 9999 Ape Gang Collection will provide you full exclusive access to our gangsta themed infrastructure and community with all the benefits. Collect your crew and become a part of our fam. Hustle and earn without breaking the law, bro.<br/><br/>

GAG is a project that covers a lot of different areas, not just rap. We have lots of exclusive benefits for holders. GAG can be staked to Earn $COCO on daily basis. In the future, with your gangsta ape you can be able to work with us on new music project and more, probably there are some future stars hidden in our holders. What is more, GAG community will grow and expand through time and developed projects, you will never hustle alone.</div>
 </div>
                    <div className="main-big-bottom-flex">
                        <div className="main-bottom-column-1">
                            PROJECT DETAILS
                            <ul>
                                <li>Price: {price_4}</li>
                                <li>Collection Count: {size_4}</li>
                                <li>Traits Count: {traits_count_4}</li>
                                <li>Category: {category_4}</li>
                                <li>Presale Date: {mint_status_4}</li>
                            </ul>
                            
                            </div>
                        <div className="main-bottom-column-2">
                            <a href={twitter_link_4} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={twitter} alt=""/>
                                    <div className="new-main-icon-left-text">{twitter_count_4}</div>
                                </div>
                            </a>
                            <a href={discord_link_4} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={discord} alt=""/>
                                    <div className="new-main-icon-left-text">{discord_count_4}</div>
                            </div>
                            </a>
                        </div>
                        <div className="main-bottom-column-3">
                        <a href={telegram_link_4} target="_blank" rel="noreferrer">
                        <div className="new-main-icon-right">
                                <img className="new-main-icon-right-img" src={telegram} alt=""/>
                        </div>
                        </a>         
                        <a href={web_link_4} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-right">
                                    <img className="new-main-icon-right-img" src={web} alt=""/>
                        </div>
                        </a>
                        
                        </div>
                    </div>
                </div>
                
                <div className="main-big-flex-right">
                    <div className="circle-main">{mint_status_4}</div>
                    <img className="main-big-flex-right-img" src={mainpicA_4} alt=""/>
                    <img className="main-big-flex-right-img" src={mainpicB_4} alt=""/>
                </div>

                
            </div>
    </div>
    );
    
}

export default MainCard4;