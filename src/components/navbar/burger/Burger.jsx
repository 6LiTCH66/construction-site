import React, {useEffect, useState} from 'react';
import RightNavbar from "../RightNavbar/RightNavbar";
import styled from "styled-components";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: sticky;
  z-index: 20;  
  display: none;

  
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  
  div {
    //background: black;
    width: 2rem;
    height: 3px;
    background-color: ${({ open }) => open ? '#000' : '#000'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;


function Burger(props) {
    const [open, setOpen] = useState(false)

    const handleLinkClick = () => {
        setOpen(false);
    }

    useEffect(() => {
        document.body.style.overflow = !open ? 'auto' : 'hidden';
    }, [open]);

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>

            <RightNavbar open={open} onClick={handleLinkClick}/>
            <div className={open ? "header-mobile-menu-blackout" : ""}>

            </div>
        </>
    );
}

export default Burger;