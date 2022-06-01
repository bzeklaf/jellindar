import React from "react";

import twitter from '../components/icons/twitter.svg';
import discord from '../components/icons/discord.svg';
import telegram from '../components/icons/telegram.svg';
import web from '../components/icons/web.svg';
import solana from '../components/icons/solana.svg'
import sol from '../components/icons/sol.svg'


export const mcard_link_18 = "/main-card18";
export const title_18 = "Secret Llama Agency NFT"; 
export const small_description_18 = "UltimaThule is more than just an NFT Collection. We’re glad to anounce you something new and unusual. We are building a strong community to gift them amazing experience on the blockchain.";
export const price_18 = "1.5";
export const size_18 = "6000";
export const traits_count_18 = "N/A";
export const category_18 = "Collectible";
export const mint_status_18 = "6th June";
export const twitter_link_18 = "https://twitter.com/SecretLlama_A";
export const discord_link_18 = "https://discord.com/invite/5STFvY9nu5";
export const telegram_link_18 = "";
export const web_link_18 = "https://www.secretllamaagency.com/";
export const twitter_count_18 = "11.2K";
export const discord_count_18 = "13.4K";
export const blockchain_18 = "solana";
export const blockchain_img_18 = solana;
export const price_icon_18 = sol;

export const mainpicA_18 = "https://pbs.twimg.com/media/FTmzQCJX0AAvgBq?format=png&name=medium";
export const mainpicB_18 = "https://pbs.twimg.com/media/FS6lIs4UcAIu3Fm?format=jpg&name=medium";
 

const MainCard18 = () => {

    return(
        <div className='mainCard'>
            <div className="main-big-flex">
                <div className="main-big-flex-left">
                        <div className="main-title">{title_18}</div>
                    
                    <div className="main-big-description"><div>
                    secret llama agency<br/><br/>
The first ever PFP project with customizable traits and aliases.<br/><br/>

Our community of Llamas will represent your online identity, and earn you $HAY daily. The token can be used to purchase blue chip NFTs from our Agency Marketplace, mint Traits, Promotion Badges, ID Cards and much more!
                    </div>
 </div>
                    <div className="main-big-bottom-flex">
                        <div className="main-bottom-column-1">
                            PROJECT DETAILS
                            <ul>
                                <li>Price: {price_18}</li>
                                <li>Collection Count: {size_18}</li>
                                <li>Traits Count: {traits_count_18}</li>
                                <li>Category: {category_18}</li>
                                <li>Presale Date: {mint_status_18}</li>
                            </ul>
                            
                            </div>
                        <div className="main-bottom-column-2">
                            <a href={twitter_link_18} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={twitter} alt=""/>
                                    <div className="new-main-icon-left-text">{twitter_count_18}</div>
                                </div>
                            </a>
                            <a href={discord_link_18} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={discord} alt=""/>
                                    <div className="new-main-icon-left-text">{discord_count_18}</div>
                            </div>
                            </a>
                        </div>
                        <div className="main-bottom-column-3">
                        <a href={telegram_link_18} target="_blank" rel="noreferrer">
                        <div className="new-main-icon-right">
                                <img className="new-main-icon-right-img" src={telegram} alt=""/>
                        </div>
                        </a>         
                        <a href={web_link_18} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-right">
                                    <img className="new-main-icon-right-img" src={web} alt=""/>
                        </div>
                        </a>
                        
                        </div>
                    </div>
                </div>
                
                <div className="main-big-flex-right">
                    <div className="circle-main">{mint_status_18}</div>
                    <img className="main-big-flex-right-img" src={mainpicA_18} alt=""/>
                    <img className="main-big-flex-right-img" src={mainpicB_18} alt=""/>
                </div>

                
            </div>
    </div>
    );
    
}

export default MainCard18;