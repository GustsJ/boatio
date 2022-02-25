import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {IconContext} from "react-icons/lib";
import {animateScroll as scroll} from 'react-scroll';
import Logo from '../../images/boatio-logo.svg'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinkContainer,
    NavLinks,
    NavBtn,
    NavBtnLink
} from "./NavbarElements";

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY > 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}><img src={Logo} alt="The Boatio logo"/></NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars/>
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinkContainer>
                                    <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true'
                                          offset={-80}>PAR MUMS</NavLinks>
                                </NavLinkContainer>
                            </NavItem>
                            <NavItem>
                                <NavLinkContainer>
                                <NavLinks to='discover' smooth={true} duration={500} spy={true} exact='true'
                                          offset={-80}>REZERVĀCIJAS</NavLinks>
                                </NavLinkContainer>
                            </NavItem>
                            <NavItem>
                                <NavLinkContainer>
                                <NavLinks to='services' smooth={true} duration={500} spy={true} exact='true'
                                          offset={-80}>SASNIEGUMI</NavLinks>
                                </NavLinkContainer>
                            </NavItem>
                            <NavItem>
                                <NavLinkContainer>
                                <NavLinks to='signup' smooth={true} duration={500} spy={true} exact='true'
                                          offset={-80}>GALERIJA</NavLinks>
                                </NavLinkContainer>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
