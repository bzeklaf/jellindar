import React from "react";

import twitter from '../components/icons/twitter.svg';
import discord from '../components/icons/discord.svg';
import telegram from '../components/icons/telegram.svg';
import web from '../components/icons/web.svg';
import ethereum from '../components/icons/ethereum.svg'
import eth from '../components/icons/eth.svg'


export const mcard_link_15 = "/main-card15";
export const title_15 = "Girls Robots Dragons"; 
export const small_description_15 = "Premium fantasy (and sci-fi) artwork is displayed across a 9,000 NFT card collection that consists of 15 unique characters (5 girls, 5 robots, and 5 dragons) existing on the Ethereum blockchain.";
export const price_15 = "0.7";
export const size_15 = "9000";
export const traits_count_15 = "N/A";
export const category_15 = "Collectible";
export const mint_status_15 = "6th June";
export const twitter_link_15 = "https://twitter.com/GRD_Fans";
export const discord_link_15 = "https://discord.com/invite/YAHJghT5ZK";
export const telegram_link_15 = "";
export const web_link_15 = "";
export const twitter_count_15 = "4.6K";
export const discord_count_15 = "3.5K";
export const blockchain_15 = "ethereum";
export const blockchain_img_15 = ethereum;
export const price_icon_15 = eth;

export const mainpicA_15 = "https://pbs.twimg.com/media/FTGnTS5UUAEQhxa?format=jpg&name=small";
export const mainpicB_15 = "https://pbs.twimg.com/media/FTc_IHIUYAAWo1l?format=jpg&name=medium";
 

const MainCard15 = () => {

    return(
        <div className='mainCard'>
            <div className="main-big-flex">
                <div className="main-big-flex-left">
                        <div className="main-title">{title_15}</div>
                    
                    <div className="main-big-description"><div>
                    Premium fantasy (and sci-fi) artwork is displayed across a 9,000 NFT card collection that consists of 15 unique characters (5 girls, 5 robots, and 5 dragons) existing on the Ethereum blockchain.<br/><br/>

 The collection is split into two batches or series - primarily 3,000 NFTs available for sale at 0.07 ETH and 6,000 vaulted cards, which may be purchased via $DUST utility tokens or earned as a Loyalty Reward for holding an Ether Card Founder NFT while purchasing a GRD NFT from the main sale.<br/><br/>

The NFT drop also includes a collectible card game that revolves around collecting 4 types of cards - common, rare, epic, and legendary in order to complete an entire book (of all 15 unique characters) and become eligible for amazing prizes.<br/><br/>

GRD collectible card game prize pools may include 20% of total sale and 25% of royalties - up to a maximum redemption of 3.5 ETH per book!<br/><br/>

The first 3,000 NFT cards also feature Galaxis utility traits that enable the holder to claim various items and/or benefits. Utilities include, but are not limited to: physical redeemable, autographs, and virtual meetings with the artists.<br/><br/>

-High-Quality Masterpiece Artwork NFT Collection<br/><br/>
-Excellent Utility Traits/Benefits<br/><br/>
-ETH Prize Pools - Collect & Win<br/><br/>
-DUST Proof - ETH Purchase Price Back Via DUST Tokens Over 1 Year<br/><br/>
-Legendary illustrators release their first series of NFTs #GRD_fan.<br/><br/>
-Illustrators are known for their #WoW, #StarWars, #Hearthstone, and more.<br/><br/></div>
 </div>
                    <div className="main-big-bottom-flex">
                        <div className="main-bottom-column-1">
                            PROJECT DETAILS
                            <ul>
                                <li>Price: {price_15}</li>
                                <li>Collection Count: {size_15}</li>
                                <li>Traits Count: {traits_count_15}</li>
                                <li>Category: {category_15}</li>
                                <li>Presale Date: {mint_status_15}</li>
                            </ul>
                            
                            </div>
                        <div className="main-bottom-column-2">
                            <a href={twitter_link_15} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={twitter} alt=""/>
                                    <div className="new-main-icon-left-text">{twitter_count_15}</div>
                                </div>
                            </a>
                            <a href={discord_link_15} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={discord} alt=""/>
                                    <div className="new-main-icon-left-text">{discord_count_15}</div>
                            </div>
                            </a>
                        </div>
                        <div className="main-bottom-column-3">
                        <a href={telegram_link_15} target="_blank" rel="noreferrer">
                        <div className="new-main-icon-right">
                                <img className="new-main-icon-right-img" src={telegram} alt=""/>
                        </div>
                        </a>         
                        <a href={web_link_15} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-right">
                                    <img className="new-main-icon-right-img" src={web} alt=""/>
                        </div>
                        </a>
                        
                        </div>
                    </div>
                </div>
                
                <div className="main-big-flex-right">
                    <div className="circle-main">{mint_status_15}</div>
                    <img className="main-big-flex-right-img" src={mainpicA_15} alt=""/>
                    <img className="main-big-flex-right-img" src={mainpicB_15} alt=""/>
                </div>

                
            </div>
    </div>
    );
    
}

export default MainCard15;