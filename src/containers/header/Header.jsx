import React from 'react';
import "./header.css"
import header_image from "../../assets/header-vector.svg"
function Header(props) {
    return (
        <div className="header-container">
            <div className="header-wrapper">
                <div className="header-content">
                    <span className="header-content_title">
                        Строите что-то?
                    </span>
                    <span className="header-content_description">
                        <span className="header-content_company">Semarim</span> - команда профессионалов, которые помогут вам воплотить в жизнь ваши желания, по строительству террасы, навеса или домика для садового инвентаря.
                    </span>

                    <a href="#offer" className="header-content_button">Нанять нас</a>

                </div>
                <div className="header-image">
                    <img src={header_image} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Header;