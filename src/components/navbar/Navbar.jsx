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

                {/*<ul className="navbar-links_wrapper">*/}
                {/*    <li className="nav__listitem">*/}
                {/*        <a href="#home">Главная</a>*/}
                {/*    </li>*/}
                {/*    <li className="dropdown nav__listitem" onMouseEnter={() => setMouseOver(true)}*/}
                {/*        onMouseLeave={() => setMouseOver(false)}>*/}
                {/*        <a href="#services">Услуги*/}
                {/*            {mouseOver ? <IoIosArrowUp size={13}/>: <IoIosArrowDown size={13}/> }*/}
                {/*        </a>*/}
                {/*        <ul className="nav__listitemdrop">*/}
                {/*            <li>*/}
                {/*                <a href="#building">Строительство</a>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <a href="#repair">Ремонт</a>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <a href="#consultations">Консультации</a>*/}
                {/*            </li>*/}
                {/*        </ul>*/}

                {/*    </li>*/}
                {/*    <li className="nav__listitem">*/}
                {/*        <a href="#gallery">Галерея</a>*/}
                {/*    </li >*/}
                {/*    <li className="nav__listitem">*/}
                {/*        <a href="#price">Цены</a>*/}
                {/*    </li>*/}
                {/*    <li className="nav__listitem">*/}
                {/*        <a href="#contact">Контакты</a>*/}
                {/*    </li>*/}

                {/*</ul>*/}



            </div>
        </div>
    );
}

export default Navbar;