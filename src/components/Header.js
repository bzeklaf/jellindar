import React, { useEffect, useState } from "react";


import { AiOutlineClose } from "react-icons/ai";
import logo from "./icons/logo-left.svg";
import twitter_icon from "./icons/twitter_icon.svg";
import yt_icon from "./icons/yt_icon.svg";
import jelly from "./icons/jelly_thumb.svg";


import classes from "./Header.module.scss";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
    
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };


    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <Link to="/" className={classes.header__content__logo}>
                    <img className="front-left-img" src={logo} alt=""/>
                </Link>
                <nav
                    className={`${classes.header__content__nav} ${
                        menuOpen && size.width < 768 ? classes.isMenu : ""
                    }`}
                >
                    <HashLink to="#footer" smooth={true}>
                        <button>Submit your Collection</button>
                    </HashLink>
                    
                    <ul>
                        <li>
                            <Link to="/dead-Jellies" onClick={menuToggleHandler}>
                                Dead Jellies
                            </Link>
                        </li>
                        <li>
                            <Link to="/team" onClick={menuToggleHandler}>
                                Team
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={menuToggleHandler}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <a href="https://youtube.com/channel/UCi4ot0pekTGh4S_4L99ARmA"><img className="social_icon" src={yt_icon} alt=""/></a>
                    <a href="https://twitter.com/deadjellies"><img className="social_icon" src={twitter_icon} alt=""/></a>

                                
                
                </nav>
                <div className={classes.header__content__toggle}>
                    {!menuOpen ? (
                        <img src={jelly} onClick={menuToggleHandler} alt=""/>
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;