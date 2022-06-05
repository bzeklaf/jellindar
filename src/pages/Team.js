import me from "../components/icons/me.png";
import andy from "../components/icons/andy.png";
import riccy from "../components/icons/riccy.png";
import boon from "../components/icons/boon.png";

export const Team = () => {
    return (
        
        <div className="team-container">
            <div className="title-team">TEAM</div>
            <div className="team-flex">
                <div className="team-flexA1">CRYPTOPAPERJACK<br/><br/>
                    Szef wszystkich szefów!!! Bos nad bosami, ale z  małym siusiakiem xD Król kodzenia we włąsnej osobie. Sam o sobie mówi że jest mistrzem, i tylko on tak mówi bo nikt inny tego nie potwierdza. Słynie z tego, że jest najsławniejszą żelą na świecie! Nazwa projektu powstała właśnie dzięki jemu i jego figlarnej żeli. W ocenie jego wieku niech nie zmyli was jego młodzieńcza czapeczka, pod nią kryje się prawdziwa moc siwych włosów pokazująca jego prawdziwe oblicze.</div>
                <img className="team-flexB1" src={me}/>   
        </div>
           <div className="team-flex">
                <img className="team-flexA2" src={andy}/>
                <div className="team-flexB2">
                WAIKIKI<br/><br/>
Prawdziwy expert w świecie NFT. Jego ścieżka życiowa dopiero niedawno przecięła się ze ścieżką krypto ale szybko się uczy, bo tak jak każdy chce zarabiać dużo pieniązków siedząc i nic nie robiąc. Zna każdy solidny projekt na tej kuli ziemskiej. Zapowiada się na dobrze prosperującego specjalistę w świecie Blockchainu, czyli kupuj drogo sprzedaj taniej xD. Ogólnie jak ze zdjęcia widać uwielbia pobijać rekordy w jedzeniu pączków w tłusty czawarek i nie tylko.  
                </div>
            </div>
            <div className="team-flex">
                <div className="team-flexA1">
                BLACK RICCARDO:<br/><br/>
Mówi o sobie że jest najlepszym Traderem na świecie, choć rzadko kiedy jego wskazania są trafne. Ostatnimi czasy sam nie wie co porabia Bitcoin i co wogóle z tym wszystkim począć. Biedny Riccardo został zamkniety w łagrze Coincasso i jest pod ścisłą obserwacją Wielkiego Brata Luka, który tylko czycha, aż nasz szpec wypłaci sobie pieniązki z giełdy na poczat swoich niemałych wydatków. </div>
                <img className="team-flexB1" src={riccy}/>   
        </div>
           <div className="team-flex">
                <img className="team-flexA2" src={boon}/>
                <div className="team-flexB2"> BOONIE:<br/><br/>
Ogólnie jako jedyna ogarnieta osoba w teamie zajmuje się wszytskim co przyczynia się do sukcesu tegoż wielkiego przedsięwzięcia jakim jest ten Gigantyczny Projekt. Cyzli takie standardowe przynieś, podaj, pozamiataj. Dodatkowo dba o to żeby nikomu niczego nie zabrakło, czyli oragzanizuje cały catering, żeby tego było mało to oczywiście full servis. A że jest tych chłopów trzech to jest to nielada wyzwanie. 
                </div>
            </div>
        </div>
    )
}

export default Team;

