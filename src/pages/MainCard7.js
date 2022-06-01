import React from "react";

import twitter from '../components/icons/twitter.svg';
import discord from '../components/icons/discord.svg';
import telegram from '../components/icons/telegram.svg';
import web from '../components/icons/web.svg';
import ethereum from '../components/icons/ethereum.svg'
import eth from '../components/icons/eth.svg'


export const mcard_link_7 = "/main-card7";
export const title_7 = "ZombiesCat Genesis"; 
export const small_description_7 = "ZOMBIESCAT was then born in the early 2010s. With 10+ years experience in the contemporary art and creative industries, Yuhi and the ZOMBIESCAT IP he created has gained great traction both in China and internationally.";
export const price_7 = "0.16";
export const size_7 = "2666";
export const traits_count_7 = "N/A";
export const category_7 = "Collectible";
export const mint_status_7 = "3rd June";
export const twitter_link_7 = "https://mobile.twitter.com/UNE_METAVERSE";
export const discord_link_7 = "";
export const telegram_link_7 = "";
export const web_link_7 = "https://www.unemeta.com/?upcomingnft";
export const twitter_count_7 = "27.9K";
export const discord_count_7 = "";
export const blockchain_7 = "ethereum";
export const blockchain_img_7 = ethereum;
export const price_icon_7 = eth;

export const mainpicA_7 = "https://pbs.twimg.com/media/FSINzVfXsAADajj?format=jpg&name=large"
export const mainpicB_7 = "https://pbs.twimg.com/media/FSCaAhHWYAAVPs0?format=jpg&name=large";
 

const MainCard7 = () => {

    return(
        <div className='mainCard'>
            <div className="main-big-flex">
                <div className="main-big-flex-left">
                        <div className="main-title">{title_7}</div>
                    
                    <div className="main-big-description"><div>
                    ZOMBIESCAT, Devour Negative Energy<br/><br/>

The prototype of ZOMBIESCAT originated from one of Yuhi's childhood memories from a fossil exhibition. As a young entrepreneur, Yuhi suffered from depression in his first years working in the creative industry. The faint image of ZOMBIESCAT came back to him in those dark times, and has since quickly became the symbol of a yearning for positivity in his life.<br/><br/>

The story of ZOMBIESCAT starts in the year 2666. By then, the Galactic Zombie Army has invaded multiple planets, spreading a zombie virus that causes the infected to consume blood for survival. Planet ZC66 is under attack, forcing ZC66 residents to travel back in time through a black hole, landing on planet Earth. Though now free from the reign of the invaders, the infected ZC66 residents faced one major problem: they cannot consume blood for survival, because the ZC66 race carries a gene that makes blood extremely repulsive. Luckily, they found some strange greyish matter floating in the air of Earth, and this matter can be converted to provide the energy necessary for survival. This matter is in fact the negative energy and emotions of human beings. The appearance of mutated ZC66 residents resembles cats covered in red fur, therefore giving them the name of ZOMBIESCAT.
</div>
 </div>
                    <div className="main-big-bottom-flex">
                        <div className="main-bottom-column-1">
                            PROJECT DETAILS
                            <ul>
                                <li>Price: {price_7}</li>
                                <li>Collection Count: {size_7}</li>
                                <li>Traits Count: {traits_count_7}</li>
                                <li>Category: {category_7}</li>
                                <li>Presale Date: {mint_status_7}</li>
                            </ul>
                            
                            </div>
                        <div className="main-bottom-column-2">
                            <a href={twitter_link_7} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={twitter} alt=""/>
                                    <div className="new-main-icon-left-text">{twitter_count_7}</div>
                                </div>
                            </a>
                            <a href={discord_link_7} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={discord} alt=""/>
                                    <div className="new-main-icon-left-text">{discord_count_7}</div>
                            </div>
                            </a>
                        </div>
                        <div className="main-bottom-column-3">
                        <a href={telegram_link_7} target="_blank" rel="noreferrer">
                        <div className="new-main-icon-right">
                                <img className="new-main-icon-right-img" src={telegram} alt=""/>
                        </div>
                        </a>         
                        <a href={web_link_7} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-right">
                                    <img className="new-main-icon-right-img" src={web} alt=""/>
                        </div>
                        </a>
                        
                        </div>
                    </div>
                </div>
                
                <div className="main-big-flex-right">
                    <div className="circle-main">{mint_status_7}</div>
                    <img className="main-big-flex-right-img" src={mainpicA_7} alt=""/>
                    <img className="main-big-flex-right-img" src={mainpicB_7} alt=""/>
                </div>

                
            </div>
    </div>
    );
    
}

export default MainCard7;