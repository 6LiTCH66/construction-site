import React from 'react';
import "./header.css"
import header_image from "../../assets/header-vector.svg"
import ru from "../../languages/ru.json"
import {Link} from "react-router-dom";

function Header(props) {

    return (
        <div className="header-container">
            <div className="header-wrapper">
                <div className="header-content">
                    <span className="header-content_title">
                        {ru.header.header_title}
                    </span>
                    <span className="header-content_description">
                        <span className="header-content_company">Semarim</span>{ru.header.header_description}
                    </span>

                    <Link to="/offer" className="header-content_button">Нанять нас</Link>

                </div>
                <div className="header-image">
                    <img src={header_image} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Header;