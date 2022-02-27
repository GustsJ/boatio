import styled from "styled-components";
import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #101522;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const SocialMedia = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  width: 100%;

  @media (min-width: 768px){
    flex-direction: unset;
  }
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-self: start;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 auto;
`;

export const WebsiteRights = styled.p`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 42px;
`;