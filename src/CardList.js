import React, { useState } from 'react';
import './App.css';
import Card from './Card';
import {cards} from './Card';
import BottomCard from './BottomCard';
import {bottomCards} from './BottomCard';
import Nav from './Nav';
import './components/Header.module.scss';
import HeadingCard from './Heading-Card';
import HeadingBottomCard from './HeadingBottomCard';
import Footer from './Footer';
import Pictures from "./Pictures";
import BackToTopButton from './BackToTopButton';

export const CardList = () => {
   
const [state, setState] = useState(bottomCards);

const handleBtns=(e)=>{

let word = e.target.value;

  if(word === 'all'){
    setState(bottomCards)
  }

  else if(word==='ethereum'){
    const filtered = bottomCards.filter(bottomCard=>bottomCard.blockchain==='ethereum');

  setState(filtered);
}

else if(word==='solana'){
  const filtered = bottomCards.filter(bottomCard=>bottomCard.blockchain==='solana');

setState(filtered);
}
}

 const[noOfElement, setnoOfElement] = useState(10);
    const loadMore = () =>{
        setnoOfElement(noOfElement + noOfElement);
    }
    const slice = state.slice(0, noOfElement);
   
   
    return (
     <> 
          <div><Nav/></div>
          <HeadingCard />
     <div className='grid'>
          {cards.map((card) => {
            return <Card card={card}></Card>;
          })}
         </div>
         <HeadingBottomCard />
         
        <div className='button-box'>
          <button value="all" className='cat-btn' onClick={handleBtns}>All</button>
          <button value="ethereum" className='cat-btn' onClick={handleBtns}>Ethereum</button> 
          <button value="solana" className='cat-btn' onClick={handleBtns}>Solana</button>
        </div> 
        
        <div className='finalFlex'>
          <div>
        <div className='bottomGrid'>
             {slice.map((bottomCard) => {
            return <BottomCard bottomCard={bottomCard}></BottomCard>;
          })}
         </div>
         <button 
         className='button-load'
         onClick= {() => loadMore()}>
       Load More
       </button> 
         </div>
          <div>
          <Pictures/>
          </div>
        
        </div>
         
        
        <BackToTopButton/>
          <Footer></Footer>
   </> 
    );
        }

  export default CardList;