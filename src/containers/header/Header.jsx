import React, {useEffect} from 'react';
import "./header.css"
import header_image from "../../assets/header-vector.svg"
import ru from "../../languages/ru.json"
function Header(props) {
    // useEffect(() => {
    //     console.log(header_image)
    // }, []);

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