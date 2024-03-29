import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {IconContext} from "react-icons/lib";
import {animateScroll as scroll} from 'react-scroll';
import Logo from '../../images/boatio-logo.png'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinkContainer,
    NavLinks,
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
                        <NavLogo to='/' onClick={toggleHome}><img src={Logo} alt="The Boatio logo" width='267' height='87'/></NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars/>
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinkContainer>
                                    <NavLinks to='par-mums' smooth={true} duration={500} spy={true} exact='true'
                                          offset={-80}>PAR MUMS</NavLinks>
                                </NavLinkContainer>
                            </NavItem>
                            <NavItem>
                                <NavLinkContainer>
                                <NavLinks to='sasniegumi' smooth={true} duration={500} spy={true} exact='true'
                                          offset={-80}>SASNIEGUMI</NavLinks>
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
