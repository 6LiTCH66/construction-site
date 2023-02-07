import React from 'react';
import "./footer.css";
import footer_bg from "../../assets/footer bg.svg"
import { FaFacebookSquare } from 'react-icons/fa';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {BsTelephone} from "react-icons/bs"
import {FiMail} from 'react-icons/fi'
function Footer(props) {
    return (
        <div className="footer-container">
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
                            <a href="#">Строительство</a>
                        </li>
                        <li>
                            <a href="#">Ремонт</a>
                        </li>
                        <li>
                            <a href="#">Консультации</a>
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
                            <FiMail/> mail@gmail.com
                        </li>
                        <li>
                            <BsTelephone/> +372 555 555 55
                        </li>
                        <li>
                            <HiOutlineLocationMarker/> Таллинн
                        </li>
                    </ul>
                    <div className="footer-social-links">
                        <a href="#facebook">
                            <FaFacebookSquare color="white" size={30}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;