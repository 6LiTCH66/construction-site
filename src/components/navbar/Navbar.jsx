import React, {useState} from 'react';
import "./navbar.css"
import { IoIosArrowDown, IoIosConstruct, IoIosArrowUp } from 'react-icons/io';
import Burger from "./burger/Burger";
import {Link} from "react-router-dom";

function Navbar(props) {
    const [mouseOver, setMouseOver] = useState(false);

    return (
        <div className="navbar-box">
            <div className="navbar-container">

                <div className="navbar-logo">
                    <Link to="/">
                        <span>
                            <IoIosConstruct size={30}/>
                            Semarim
                        </span>
                    </Link>

                </div>
                <div className="navbar-links_container">
                    <div className="navbar-links_wrapper">
                        <Burger/>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Navbar;