import React from 'react';
import styled from "styled-components";
import {IoIosArrowDown} from "react-icons/io";
import {Link} from "react-router-dom"


const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  
  
  @media (max-width: 768px) {
    flex-flow: column;
    background-color: #FFFFFF;
    opacity: 0.95;
    z-index: 10;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 270px;
    padding-top: 5rem;
    transition: transform 0.3s ease-in-out;
    
    li {
      color: #fff;
    }
  }
`;


function RightNavbar(props) {


    return (
        <Ul open={props.open}>
            <li className="nav__listitem">
                <Link to="">Главная</Link>
            </li>
            <li className="dropdown nav__listitem">
                <Link to="#services">Услуги
                    <IoIosArrowDown size={13}/>
                </Link>
                <ul className="nav__listitemdrop">
                    <li>
                        <Link to="terrace-construction">Строительство</Link>
                    </li>
                    <li>
                        <Link to="floor-resurfacing">Ремонт</Link>
                    </li>
                    <li>
                        <Link to="consultation">Консультации</Link>
                    </li>
                </ul>

            </li>
            <li className="nav__listitem">
                <Link to="#gallery">Галерея</Link>
            </li >
            <li className="nav__listitem">
                <Link to="#price">Цены</Link>
            </li>
            <li className="nav__listitem">
                <Link to="#contact">Контакты</Link>
            </li>

            <div className="link-button">
                <Link to="/offer">Предложение</Link>
            </div>

        </Ul>
    );
}

export default RightNavbar;