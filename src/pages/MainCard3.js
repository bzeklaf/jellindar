import React from "react";

import twitter from '../components/icons/twitter.svg';
import discord from '../components/icons/discord.svg';
import telegram from '../components/icons/telegram.svg';
import web from '../components/icons/web.svg';
import solana from '../components/icons/solana.svg'
import sol from '../components/icons/sol.svg'



export const mcard_link_3 = "/main-card3";
export const title_3 = "Blobby Boo Crew"; 
export const small_description_3 = "The Blobby Boo Crew collection will feature 4,444 blobfish deployed on the Solana blockchain. We are a community-driven project in which members provide value back to our community and oceans. The release will be split into two mint phases, with the launch supply being 2,222. Initial roadmap includes staking ($BLOB), NFT evolution (Feeding Frenzy), Baby Blobs (Gen 2 Mint), and formation of our community DAO.";
export const price_3 = "0.95";
export const size_3 = "4444";
export const traits_count_3 = "200";
export const category_3 = "Collectible";
export const mint_status_3 = "2nd June";
export const twitter_link_3 = "https://twitter.com/BlobbyBooCrew";
export const discord_link_3 = "https://discord.gg/fqA7nasx2K";
export const telegram_link_3 = "";
export const web_link_3 = "https://www.blobbyboocrew.com/";
export const twitter_count_3 = "7.9K";
export const discord_count_3 = "6.8K";
export const blockchain_3 = "solana";
export const blockchain_img_3 = solana;
export const price_icon_3 = sol;

export const mainpicA_3 = "https://pbs.twimg.com/media/FTXzTj9XwAA8HnJ?format=jpg&name=medium";
export const mainpicB_3 = "https://pbs.twimg.com/media/FTXygoOWAAAUopn?format=jpg&name=medium";
 

const MainCard3 = () => {

    return(
        <div className='mainCard'>
            <div className="main-big-flex">
                <div className="main-big-flex-left">
                        <div className="main-title">{title_3}</div>
                    
                    <div className="main-big-description"><div>
                    The launch NFT collection will feature 4,444<br/><br/>
digital blobfish swimming on the Solana blockchain. This will be split into two mint phases during 2022, with the first mint supply being 2,222.<br/><br/>

The Blobby Boo Crew (BBCrew) is a community-driven organization in which collectors provide value back to the community and environment. Additionally, we have assembled an incredibly passionate and devoted team of like minded individuals, who all share a common vision of supporting decentralized finance and combating the effects of climate change.<br/><br/>

The BBCrew collection offers a unique opportunity to collect bespoke digital art pieces, while also supporting our oceans and our community.<br/><br/>

We also hope to help raise awareness for the endangered state of the blobfish species.</div>
 </div>
                    <div className="main-big-bottom-flex">
                        <div className="main-bottom-column-1">
                            PROJECT DETAILS
                            <ul>
                                <li>Price: {price_3}</li>
                                <li>Collection Count: {size_3}</li>
                                <li>Traits Count: {traits_count_3}</li>
                                <li>Category: {category_3}</li>
                                <li>Presale Date: {mint_status_3}</li>
                            </ul>
                            
                            </div>
                        <div className="main-bottom-column-2">
                            <a href={twitter_link_3} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={twitter} alt=""/>
                                    <div className="new-main-icon-left-text">{twitter_count_3}</div>
                                </div>
                            </a>
                            <a href={discord_link_3} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={discord} alt=""/>
                                    <div className="new-main-icon-left-text">{discord_count_3}</div>
                            </div>
                            </a>
                        </div>
                        <div className="main-bottom-column-3">
                        <a href={telegram_link_3} target="_blank" rel="noreferrer">
                        <div className="new-main-icon-right">
                                <img className="new-main-icon-right-img" src={telegram} alt=""/>
                        </div>
                        </a>         
                        <a href={web_link_3} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-right">
                                    <img className="new-main-icon-right-img" src={web} alt=""/>
                        </div>
                        </a>
                        
                        </div>
                    </div>
                </div>
                
                <div className="main-big-flex-right">
                    <div className="circle-main">{mint_status_3}</div>
                    <img className="main-big-flex-right-img" src={mainpicA_3} alt=""/>
                    <img className="main-big-flex-right-img" src={mainpicB_3} alt=""/>
                </div>

                
            </div>
    </div>
    );
    
}

export default MainCard3;