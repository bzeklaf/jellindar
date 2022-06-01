import React from "react";

import twitter from '../components/icons/twitter.svg';
import discord from '../components/icons/discord.svg';
import telegram from '../components/icons/telegram.svg';
import web from '../components/icons/web.svg';


export const mcard_link_17 = "/main-card17";
export const title_17 = "Royal Crows NFT"; 
export const small_description_17 = "The Crow has landed Bright-feathered birds, known for their harsh ‘caw’ have inhabited a new ecosystem – the Omnichain.";
export const price_17 = "N/A";
export const size_17 = "7878";
export const traits_count_17 = "N/A";
export const category_17 = "Collectible";
export const mint_status_17 = "6th June";
export const twitter_link_17 = "https://twitter.com/royal_crows";
export const discord_link_17 = "https://discord.com/invite/royalcrows";
export const telegram_link_17 = "";
export const web_link_17 = "https://royalcrows.com/";
export const twitter_count_17 = "12.2K";
export const discord_count_17 = "14.8K";
export const blockchain_17 = "";
export const blockchain_img_17 = ""
export const price_icon_17 = "";

export const mainpicA_17 = "https://pbs.twimg.com/media/FSuuwV5XoAI2pqs?format=jpg&name=large";
export const mainpicB_17 = "https://pbs.twimg.com/media/FSKsqfNXMAEteGl?format=jpg&name=large";
 

const MainCard17 = () => {

    return(
        <div className='mainCard'>
            <div className="main-big-flex">
                <div className="main-big-flex-left">
                        <div className="main-title">{title_17}</div>
                    
                    <div className="main-big-description"><div>
                    The Crow has landed<br/><br/>

Bright-feathered birds, known for their harsh ‘caw’ have inhabited a new ecosystem – the Omnichain.<br/><br/>


Royal Crows species wear randomly mixed pieces of the most exquisite and elegant clothing. And they are smart, really clever. They have sharp claws humor, and supposedly they have damaged some crops lately.<br/><br/>


Well, whether the last part is true or not they have also forged a group.<br/><br/>


The Royal Crows Club has just thrown its grand opening party, with way too much champagne and confetti.<br/><br/>


Joining this unique tribe gives you some dope assets, such as a pass to an exclusive club with a DAO-centered ecosystem, Omniverse and many more in the pipeline.<br/><br/>


Our grandmas used to say that a pair of crows predicted fortune, good luck, and news.<br/><br/>


Call us crazy, but there must be something in it since we have some pretty cool stuff to announce…<br/><br/>


“Royal Crows” is a collection of 7878 NFTs — a unique series to be released on Omnichain, powered by Layer Zero. Get yourself a Crow, join the tribe now! <br/><br/>
                    </div>
 </div>
                    <div className="main-big-bottom-flex">
                        <div className="main-bottom-column-1">
                            PROJECT DETAILS
                            <ul>
                                <li>Price: {price_17}</li>
                                <li>Collection Count: {size_17}</li>
                                <li>Traits Count: {traits_count_17}</li>
                                <li>Category: {category_17}</li>
                                <li>Presale Date: {mint_status_17}</li>
                            </ul>
                            
                            </div>
                        <div className="main-bottom-column-2">
                            <a href={twitter_link_17} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={twitter} alt=""/>
                                    <div className="new-main-icon-left-text">{twitter_count_17}</div>
                                </div>
                            </a>
                            <a href={discord_link_17} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={discord} alt=""/>
                                    <div className="new-main-icon-left-text">{discord_count_17}</div>
                            </div>
                            </a>
                        </div>
                        <div className="main-bottom-column-3">
                        <a href={telegram_link_17} target="_blank" rel="noreferrer">
                        <div className="new-main-icon-right">
                                <img className="new-main-icon-right-img" src={telegram} alt=""/>
                        </div>
                        </a>         
                        <a href={web_link_17} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-right">
                                    <img className="new-main-icon-right-img" src={web} alt=""/>
                        </div>
                        </a>
                        
                        </div>
                    </div>
                </div>
                
                <div className="main-big-flex-right">
                    <div className="circle-main">{mint_status_17}</div>
                    <img className="main-big-flex-right-img" src={mainpicA_17} alt=""/>
                    <img className="main-big-flex-right-img" src={mainpicB_17} alt=""/>
                </div>

                
            </div>
    </div>
    );
    
}

export default MainCard17;