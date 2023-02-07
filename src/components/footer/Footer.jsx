import React from 'react';
import "./footer.css";
import footer_bg from "../../assets/footer bg.svg"
function Footer(props) {
    return (
        <div className="footer-container">
            {/*<img src={footer_bg} alt="" className="footer-background"/>*/}
            <div className="footer-wrapper">
                <div className="company-vision">
                    <span className="company-name">
                        Semarim
                    </span>
                    <span className="company-text">
                        Есть идея? Свяжитесь с нами, и давайте поговорим об этом.
                    </span>
                </div>
                <div className="company-quick-links">
                    <span className="quick-links-title">
                        Быстрые ссылки:
                    </span>
                    <ul className="footer-links">
                        <li>
                            <a href="#">Главная</a>
                        </li>
                        <li>
                            <a href="#">Услуги</a>
                        </li>
                        <li>
                            <a href="#">Связвться с нами</a>
                        </li>
                    </ul>
                </div>
                <div className="company-contact">
                    <span className="contact-title">
                        Контакты:
                    </span>
                    <ul className="contact-links">
                        <li>
                            mail@gmail.com
                        </li>
                        <li>
                            +372 555 555 55
                        </li>
                        <li>
                            Таллинн
                        </li>
                    </ul>
                    <div className="footer-social-links">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;