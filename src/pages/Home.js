import React from "react";
import FrontCard from "./FrontCard";

import { HashLink } from "react-router-hash-link";

const Home = () => {
    return (
        
        <>  
    
    <div className="totalFlex">
        <div className="frontbox1">
                <h1>Alpha shit only</h1>

                <HashLink to="#heading-card" smooth={true}>
                <button className="button-top">See Collections</button>
                 </HashLink>
                
            </div>

            <div className="frontbox2">
                <FrontCard></FrontCard>
        </div>
    </div>
            
            

    </>
      
    
                
     
            
         
        
        
   
      
    );
};

export default Home;