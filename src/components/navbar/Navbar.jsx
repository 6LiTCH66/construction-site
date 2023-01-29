import React, {useState} from 'react';
import "./navbar.css"
import { IoIosArrowDown, IoIosConstruct, IoIosArrowUp } from 'react-icons/io';
import Burger from "./burger/Burger";
function Navbar(props) {
    const [mouseOver, setMouseOver] = useState(false);

    return (
        <div className="navbar-container">


            <div className="navbar-logo">
                <span>
                    <IoIosConstruct size={30}/>
                    Semarim
                </span>
            </div>
            <div className="navbar-links_container">
                <div className="navbar-links_wrapper">
                    <Burger/>

                </div>
            </div>
        </div>
    );
}

export default Navbar;