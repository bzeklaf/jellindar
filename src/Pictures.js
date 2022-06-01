import { mainpicA_1, mcard_link_1 } from "./pages/MainCard1";
import { mainpicA_2, mcard_link_2 } from "./pages/MainCard2";
import { mainpicA_3, mcard_link_3 } from "./pages/MainCard3";
import { mainpicA_4, mcard_link_4 } from "./pages/MainCard4";
import { mainpicA_5, mcard_link_5 } from "./pages/MainCard5";
import { mainpicA_6, mcard_link_6 } from "./pages/MainCard6";
import { mainpicA_7, mcard_link_7 } from "./pages/MainCard7";
import { mainpicA_8, mcard_link_8 } from "./pages/MainCard8";
import { mainpicA_9, mcard_link_9 } from "./pages/MainCard9";

import { Link } from "react-router-dom";


const Pictures = () => {


const scrollUp = () => {
  window.scrollTo({
    top:0,
    behavior: "smooth"
  })
}
    
    
    return (
        <>
        <div className="heading-pic" id="heading-card">
                <h1>Exciting Projects</h1>
            </div>
        <div className="pic-main-column">
        <Link to={mcard_link_1} onClick={scrollUp}>
            <img className="pic-column" src={mainpicA_1} alt=""/>
        </Link>
        <Link to={mcard_link_2} onClick={scrollUp}>
            <img className="pic-column" src={mainpicA_2} alt=""/>
        </Link>
        <Link to={mcard_link_3} onClick={scrollUp}>
            <img className="pic-column" src={mainpicA_3} alt=""/>
        </Link>
        <Link to={mcard_link_4} onClick={scrollUp}>
            <img className="pic-column" src={mainpicA_4} alt=""/>
        </Link>
        <Link to={mcard_link_5} onClick={scrollUp}>
            <img className="pic-column" src={mainpicA_5} alt=""/>
        </Link>
        <Link to={mcard_link_6} onClick={scrollUp}>    
            <img className="pic-column" src={mainpicA_6} alt=""/>
        </Link>
        <Link to={mcard_link_7} onClick={scrollUp}>
            <img className="pic-column" src={mainpicA_7} alt=""/>
        </Link> 
        <Link to={mcard_link_8} onClick={scrollUp}>   
            <img className="pic-column" src={mainpicA_8} alt=""/>
        </Link>
        <Link to={mcard_link_9} onClick={scrollUp}>    
            <img className="pic-column" src={mainpicA_9} alt=""/>
        </Link> 
        </div>
        </>
    )
}

export default Pictures;