import React from "react";

import twitter from '../components/icons/twitter.svg';
import discord from '../components/icons/discord.svg';
import telegram from '../components/icons/telegram.svg';
import web from '../components/icons/web.svg';
import ethereum from '../components/icons/ethereum.svg'
import eth from '../components/icons/eth.svg'


export const mcard_link_10 = "/main-card10";
export const title_10 = "Ultimate Survivor"; 
export const small_description_10 = "When they announced the impact was imminent I closed my eyes, imagining the end of our world. Now that's all I see";
export const price_10 = "0.5/0.7";
export const size_10 = "875";
export const traits_count_10 = "";
export const category_10 = "Collectible";
export const mint_status_10 = "3rd June";
export const twitter_link_10 = "https://twitter.com/survivorsnft";
export const discord_link_10 = "https://discord.com/invite/tusnft";
export const telegram_link_10 = "";
export const web_link_10 = "https://theultimatesurvivor.com";
export const twitter_count_10 = "12.7K";
export const discord_count_10 = "2.2K";
export const blockchain_10 = "ethereum";
export const blockchain_img_10 = ethereum;
export const price_icon_10 = eth;

export const mainpicA_10 = "https://pbs.twimg.com/media/FTWZggGWQAE3fyY?format=jpg&name=medium"
export const mainpicB_10 = "https://pbs.twimg.com/media/FTBb4tYWAAM-MIO?format=jpg&name=medium";
 

const MainCard10 = () => {

    return(
        <div className='mainCard'>
            <div className="main-big-flex">
                <div className="main-big-flex-left">
                        <div className="main-title">{title_10}</div>
                    
                    <div className="main-big-description"><div>
                   
                    The end is here!<br/><br/>
Are you going to survive?<br/><br/>
When they announced the impact was imminent I closed my eyes, imagining the end of our world. Now that's all I see. I need to close my eyes to try and escape for a few moments, but reality always drags me back. Now my old world is just a memory, a long forgotten place which remains as a treasure buried deep in my heart. What happens next will shape the future of our new world.<br/><br/>

Staying strong and being bold is crucial as we embark on a journey to write the history of this daunting new world before us. <br/><br/>                 
                   
                    Art・ Narrative・NFT Utility ・ P2E <br/><br/>

Synthesizing unique art with a compelling storyline & NFT HUB. We're building the future of tomorrow, today.<br/><br/>

TUS NF Mint of Season 1<br/><br/>
ONLY 875 NFTs<br/><br/>

WL Price 0.07 ETH (max 3/wallet)<br/><br/>

Public mint 0.09 ETH (max 10/wallet)<br/><br/>

10 FRE MINT + 150 Whitelist spots<br/><br/>

1 Follow us on Twitter @survivorsnft<br/><br/>

2 Tweet about us and tag @survivorsnft<br/><br/>

3 Complete the form https://forms.gle/4JrRztfKbhk415JdA<br/><br/>

The Ultimate Survivor is more than just a game, it's a community that helps build & develop within the NFT space. Our primary goal is to deliver a fantastic, compelling, and engaging P2E game based on an apocalyptic storyline. We also have an incubator to grow & develop other projects and give access to whitelists for all of our NFT holders.<br/><br/>

TUS FORGE<br/><br/>
 - the first utility of TUS NFT project<br/><br/>

 Accelerating projects  with TUS support<br/><br/>

Pitch Deck Creator with pro tips<br/><br/>

 Advisory & experts for your project<br/><br/>

 Premint lists with verified collectors<br/><br/>

& more 
                    </div>
 </div>
                    <div className="main-big-bottom-flex">
                        <div className="main-bottom-column-1">
                            PROJECT DETAILS
                            <ul>
                                <li>Price: {price_10}</li>
                                <li>Collection Count: {size_10}</li>
                                <li>Traits Count: {traits_count_10}</li>
                                <li>Category: {category_10}</li>
                                <li>Presale Date: {mint_status_10}</li>
                            </ul>
                            
                            </div>
                        <div className="main-bottom-column-2">
                            <a href={twitter_link_10} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={twitter} alt=""/>
                                    <div className="new-main-icon-left-text">{twitter_count_10}</div>
                                </div>
                            </a>
                            <a href={discord_link_10} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-left">
                                    <img className="new-main-icon-left-img" src={discord} alt=""/>
                                    <div className="new-main-icon-left-text">{discord_count_10}</div>
                            </div>
                            </a>
                        </div>
                        <div className="main-bottom-column-3">
                        <a href={telegram_link_10} target="_blank" rel="noreferrer">
                        <div className="new-main-icon-right">
                                <img className="new-main-icon-right-img" src={telegram} alt=""/>
                        </div>
                        </a>         
                        <a href={web_link_10} target="_blank" rel="noreferrer">
                                <div className="new-main-icon-right">
                                    <img className="new-main-icon-right-img" src={web} alt=""/>
                        </div>
                        </a>
                        
                        </div>
                    </div>
                </div>
                
                <div className="main-big-flex-right">
                    <div className="circle-main">{mint_status_10}</div>
                    <img className="main-big-flex-right-img" src={mainpicA_10} alt=""/>
                    <img className="main-big-flex-right-img" src={mainpicB_10} alt=""/>
                </div>

                
            </div>
    </div>
    );
    
}

export default MainCard10;