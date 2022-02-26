import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    SocialLogo,
    SocialMedia,
    SocialIcons,
    SocialMediaWrap,
    SocialIconLink,
    WebsiteRights
} from "./FooterElements";
import {FaFacebook, FaInstagram} from "react-icons/fa";
import Logo from "../../images/boatio-logo-white.svg";

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialLogo to='/' onClick={toggleHome}><img src={Logo} alt="The Boatio logo"/></SocialLogo>
                        <SocialMediaWrap>
                            <SocialIcons>
                                <SocialIconLink href='https://www.instagram.com/theboatio/' target='_blank'
                                                aria-label='Instagram'>
                                    <FaInstagram/>
                                </SocialIconLink>
                                <SocialIconLink href='https://www.facebook.com/theboatio/' target='_blank' aria-label='Facebook'>
                                    <FaFacebook/>
                                </SocialIconLink>
                            </SocialIcons>
                            <WebsiteRights>The Boatio {new Date().getFullYear()} visas tiesības aizsargātas</WebsiteRights>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer