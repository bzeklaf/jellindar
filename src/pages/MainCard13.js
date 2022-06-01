import React from "react";

import twitter from '../components/icons/twitter.svg';
import discord from '../components/icons/discord.svg';
import telegram from '../components/icons/telegram.svg';
import web from '../components/icons/web.svg';
import ethereum from '../components/icons/ethereum.svg'
import eth from '../components/icons/eth.svg'


export const mcard_link_13 = "/main-card13";
export const title_13 = "CyberDoodlekids"; 
export const small_description_13 = "Cyberdoodlekids is a collection of 4,000 unique little aspiring athletes on the Ethereum blockchain by founder Eva. These amazing athletes carry different sports traits and";
export const price_13 = "0.6";
export const size_13 = "4000";
export const traits_count_13 = "N/A";
export const category_13 = "Collectible";
export const mint_status_13 = "4th June";
export const twitter_link_13 = "https://twitter.com/Cyberdoodlekids";
export const discord_link_13 = "";
export const telegram_link_13 = "";
export const web_link_13 = "http://cyberdoodlekids.com/?upcomingnfts";
export const twitter_count_13 = "7.3K";
export const discord_count_13 = "N/A";
export const blockchain_13 = "ethereum";
export const blockchain_img_13 = ethereum;
export const price_icon_13 = eth;

export const mainpicA_13 = "https://pbs.twimg.com/media/FTuuy65VUAAoWaz?format=jpg&name=medium"
export const mainpicB_13 = "https://pbs.twimg.com/media/FTfrh8SUEAEcKvh?format=jpg&name=large";
 

const MainCard13 = () => {

    return(
        <div className='mainCard'>
            <div className="main-big-flex">
                <div className="main-big-flex-left">
                        <div className="main-title">{title_13}</div>
                    
                    <div className="main-big-description"><div>
                    Cyberdoodlekids is a collection of 4,000 unique little aspiring athletes on the Ethereum blockchain by founder Eva. These amazing athletes carry different sports traits and want to show everyone their ambition to play any sport they love! They are positive thinkers, kind and determined to make it to the pros one day! They need our support to help them stay focused. Our little athletes are here for the long run!<br/><br/>

- NFT Giveaways<br/><br/>

- Donations to legitimate youth sports organizations <br/><br/>

- Merchandise <br/><br/>

- Priority for future collections and airdrops <br/><br/>

- More! <br/><br/>

CyberdoodlekidsMap<br/><br/>

Our first goal is to create our Cyberdoodlekids family through our social media platforms, Twitter and Instagram. Spread the message of why we are here and how we want to utilize our platform to help others. Our goal is to support and elevate our youth through our mini athletes. We have seen and heard the need to assist young athletes that can’t either afford equipment or just need to hear words of encouragement to pursue their dreams. With that being said, once we are 100% sold through, we will be donating 10% of total sales that will be distributed evenly with in 3 different legitimate charitable youth programs.<br/><br/>

Also, we will set aside 5% of total sales to keep in the Cyberdoodlekids treasury to help feed families during this 2022 holiday season. Together we will decide via Twitter community on the programs we will be donating!<br/><br/>
                    
                    </div>
 </div>
                    <div className="main-big-bottom-flex">
                        <div className="main-bottom-column-1">
                            PROJECT DETAILS
                            <ul>
                                <li>Price: {price_13}</li>
                                <li>Collection Count: {size_13}</li>
                                <li>Traits Count: {traits_count_13}</li>
                                <li>Category: {category_13}</li>
                                <li>Presale Date: {mint_status_13}</li>
                            </ul>
                            
                            </div>
                        <div className="main-bottom-column-2">
                            <a href={twitter_link_13} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={twitter} alt=""/>
                                    <div className="new-main-icon-left-text">{twitter_count_13}</div>
                                </div>
                            </a>
                            <a href={discord_link_13} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={discord} alt=""/>
                                    <div className="new-main-icon-left-text">{discord_count_13}</div>
                            </div>
                            </a>
                        </div>
                        <div className="main-bottom-column-3">
                        <a href={telegram_link_13} target="_blank" rel="noreferrer">
                        <div className="new-main-icon-right">
                                <img className="new-main-icon-right-img" src={telegram} alt=""/>
                        </div>
                        </a>         
                        <a href={web_link_13} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-right">
                                    <img className="new-main-icon-right-img" src={web} alt=""/>
                        </div>
                        </a>
                        
                        </div>
                    </div>
                </div>
                
                <div className="main-big-flex-right">
                    <div className="circle-main">{mint_status_13}</div>
                    <img className="main-big-flex-right-img" src={mainpicA_13} alt=""/>
                    <img className="main-big-flex-right-img" src={mainpicB_13} alt=""/>
                </div>

                
            </div>
    </div>
    );
    
}

export default MainCard13;