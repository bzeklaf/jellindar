import React from "react";

import twitter from '../components/icons/twitter.svg';
import discord from '../components/icons/discord.svg';
import telegram from '../components/icons/telegram.svg';
import web from '../components/icons/web.svg';
import solana from '../components/icons/solana.svg'
import sol from '../components/icons/sol.svg'


export const mcard_link_12 = "/main-card12";
export const title_12 = "Dinodawgs 3D"; 
export const small_description_12 = "Dinodawg Kingdom™ is a collection of cheeky critters from Oscar winning VFX artist Adam Dewhirst (movie credits include Guardians of the Galaxy, Batman the Dark Knight and Tenet)";
export const price_12 = "2";
export const size_12 = "N/A";
export const traits_count_12 = "N/A";   
export const category_12 = "Metaverse";
export const mint_status_12 = "12th June";
export const twitter_link_12 = "https://twitter.com/DinodawgKingdom";
export const discord_link_12 = "https://discord.com/users/dinodawgs";
export const telegram_link_12 = "";
export const web_link_12 = "https://dinodawgs.io/";
export const twitter_count_12 = "32.7K";
export const discord_count_12 = "31K";
export const blockchain_12 = "solana";
export const blockchain_img_12 = solana;
export const price_icon_12 = sol;

export const mainpicA_12 = "https://pbs.twimg.com/media/FTrB4IwXsAAZdEk?format=jpg&name=large";
export const mainpicB_12 = "https://pbs.twimg.com/media/FTrB6RNWIAE0G9H?format=jpg&name=large";
 

const MainCard12 = () => {

    return(
        <div className='mainCard'>
            <div className="main-big-flex">
                <div className="main-big-flex-left">
                        <div className="main-title">{title_12}</div>
                    
                    <div className="main-big-description"><div>
                    Tell me about these Dinodawgs! <br/><br/>
Dinodawg Kingdom™ is a collection of cheeky critters from Oscar winning VFX artist Adam Dewhirst (movie credits include Guardians of the Galaxy, Batman the Dark Knight and Tenet). <br/><br/>



Dinodawgs 3D™ - Fully rigged, Metaverse ready. <br/><br/>



Dinodawgs™ original collection sold out in 4 minutes - we now have set the date for our highly anticipated 3D Dinodawgs™ collection on Sunday, May 15th exclusively on Magic Eden. <br/><br/>



With HUGE utilty Dinodawgs™ 3D is leading the way:<br/><br/>



Each 3D dino PFP will grant it's owner a unique playable avatar in our expansive Dinodawg metaverse, built on Netvrk. Think “World of Warcraft” with Dinos!  <br/><br/>



Our fully rigged Dino avatars can be used in our DDK Battle Royale P2E game - including crazy weapons such as our Frog Launcher™️<br/><br/>



Earn our native token $BONE. Our staking program is already live - meaning you can stake your NFT immediately after mint. Use $BONE to upgrade your Dino, enter our whitelists, auctions, purchase incredible weapons, vehicles and more!<br/><br/>



We also have upcoming Mine Runner and Karting P2E games. Maximising utility, and fun, for our holders is at the heart of Dinodawg Kingdom™️. <br/><br/>



With even more utility for $BONE to be announced - it's a very exciting time indeed to secure your membership to the Kingdom.  <br/><br/>



Partnerships:<br/><br/>



Selected by multichain metaverse Netvrk to be their first ever Solana metaverse partner. <br/><br/>

Selected by Magic Eden for their launchpad <br/><br/>

Selected by Opensea as one of their Solana launch partners <br/><br/>

Yaku Corp <br/><br/>

Moonland<br/><br/>

Skate X<br/><br/>

More being announced each week! <br/><br/>




                    </div>
 </div>
                    <div className="main-big-bottom-flex">
                        <div className="main-bottom-column-1">
                            PROJECT DETAILS
                            <ul>
                                <li>Price: {price_12}</li>
                                <li>Collection Count: {size_12}</li>
                                <li>Traits Count: {traits_count_12}</li>
                                <li>Category: {category_12}</li>
                                <li>Presale Date: {mint_status_12}</li>
                            </ul>
                            
                            </div>
                        <div className="main-bottom-column-2">
                            <a href={twitter_link_12} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={twitter} alt=""/>
                                    <div className="new-main-icon-left-text">{twitter_count_12}</div>
                                </div>
                            </a>
                            <a href={discord_link_12} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={discord} alt=""/>
                                    <div className="new-main-icon-left-text">{discord_count_12}</div>
                            </div>
                            </a>
                        </div>
                        <div className="main-bottom-column-3">
                        <a href={telegram_link_12} target="_blank" rel="noreferrer">
                        <div className="new-main-icon-right">
                                <img className="new-main-icon-right-img" src={telegram} alt=""/>
                        </div>
                        </a>         
                        <a href={web_link_12} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-right">
                                    <img className="new-main-icon-right-img" src={web} alt=""/>
                        </div>
                        </a>
                        
                        </div>
                    </div>
                </div>
                
                <div className="main-big-flex-right">
                    <div className="circle-main">{mint_status_12}</div>
                    <img className="main-big-flex-right-img" src={mainpicA_12} alt=""/>
                    <img className="main-big-flex-right-img" src={mainpicB_12} alt=""/>
                </div>

                
            </div>
    </div>
    );
    
}

export default MainCard12;