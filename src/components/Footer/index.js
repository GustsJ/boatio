import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {
    FooterContainer,
    FooterWrap,
    FooterLinkItems,
    FooterLinksWrapper,
    FooterLinksContainer,
    FooterLinkTitle,
    FooterLink,
    SocialLogo,
    SocialMedia,
    SocialIcons,
    SocialMediaWrap,
    SocialIconLink,
    WebsiteRights
} from "./FooterElements";
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to='/signin'>How it works</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Terms of Service</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to='/signin'>How it works</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Terms of Service</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to='/signin'>How it works</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Terms of Service</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to='/signin'>How it works</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Terms of Service</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/' onClick={toggleHome}>dolla</SocialLogo>
                            <WebsiteRights>dolla {new Date().getFullYear()} All rights reserved</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href='/' targe='blank' aria-label='Instagram'>
                                    <FaInstagram/>
                                </SocialIconLink>
                                <SocialIconLink href='/' targe='blank' aria-label='Facebook'>
                                    <FaFacebook/>
                                </SocialIconLink>
                                <SocialIconLink href='/' targe='blank' aria-label='Youtube'>
                                    <FaYoutube/>
                                </SocialIconLink>
                                <SocialIconLink href='//www.twitter.com' targe='blank' aria-label='Twitter'>
                                    <FaTwitter/>
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer