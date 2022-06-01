import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DeadJellies from "./pages/DeadJellies";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import MainCard1 from "./pages/MainCard1";
import MainCard2 from "./pages/MainCard2";
import MainCard3 from "./pages/MainCard3";
import MainCard4 from "./pages/MainCard4";
import MainCard5 from "./pages/MainCard5";
import MainCard6 from "./pages/MainCard6";
import MainCard7 from "./pages/MainCard7";
import MainCard8 from "./pages/MainCard8";
import MainCard9 from "./pages/MainCard9";
import MainCard10 from "./pages/MainCard10";
import MainCard11 from "./pages/MainCard11";
import MainCard12 from "./pages/MainCard12";
import MainCard13 from "./pages/MainCard13";
import MainCard14 from "./pages/MainCard14";
import MainCard15 from "./pages/MainCard15";
import MainCard16 from "./pages/MainCard16";
import MainCard17 from "./pages/MainCard17";
import MainCard18 from "./pages/MainCard18";
import MainCard19 from "./pages/MainCard19";
import MainCard20 from "./pages/MainCard20";

function Nav() {
    return (
        <Layout>
            <Routes>
                
                <Route path="/" element={<Home />}/>
                    
                <Route path="/dead-jellies" element={<DeadJellies />} />
                    
                <Route path="/team" element={<Team />} />

                <Route path="/contact" element={<Contact />} />

                <Route path="/main-card1" element={ <MainCard1 />} />

                <Route path="/main-card2" element={ <MainCard2 />} />

                <Route path="/main-card3" element={ <MainCard3 />} />

                <Route path="/main-card4" element={ <MainCard4 />} />

                <Route path="/main-card5" element={ <MainCard5 />} />

                <Route path="/main-card6" element={ <MainCard6 />} />

                <Route path="/main-card7" element={ <MainCard7 />} />

                <Route path="/main-card8" element={ <MainCard8 />} />

                <Route path="/main-card9" element={ <MainCard9 />} />

                <Route path="/main-card10" element={ <MainCard10 />} />

                <Route path="/main-card11" element={ <MainCard11 />} />

                <Route path="/main-card12" element={ <MainCard12 />} />

                <Route path="/main-card13" element={ <MainCard13 />} />

                <Route path="/main-card14" element={ <MainCard14 />} />

                <Route path="/main-card15" element={ <MainCard15 />} />

                <Route path="/main-card16" element={ <MainCard16 />} />

                <Route path="/main-card17" element={ <MainCard17 />} />

                <Route path="/main-card18" element={ <MainCard18 />} />

                <Route path="/main-card19" element={ <MainCard19 />} />
                
                <Route path="/main-card20" element={ <MainCard20 />} />

            </Routes>
        </Layout>
    );
}

export default Nav;