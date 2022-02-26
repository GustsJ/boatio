import styled from "styled-components";

export const ContactSectionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 6rem 3rem;
  background-color: rgba(0, 47, 73, 0.3);
  flex-direction: column;
  gap: 3rem;
  
  @media screen and (min-width: 480px){
    flex-direction: row;
    gap: unset;
  }
`;

export const ContactSectionInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const ContactSectionTitle = styled.h2`
  color: #2A374A;
  text-align: center;
  
  @media screen and (min-width: 480px){
    text-align: unset;
  }
`;

export const ContactSectionText = styled.p`
  color: #2A374A;
  text-align: center;

  @media screen and (min-width: 480px){
    text-align: unset;
  }
`;

export const ContactSectionImg = styled.a`

`;

export const ContactSectionEmail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const ContactSectionEmailLink = styled.a`
  color: #2A374A;
  text-decoration: none;
`;