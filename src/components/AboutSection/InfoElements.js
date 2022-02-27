import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? '#ffffff' : '#010606')};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  min-height: 100vh;
  width: 100%;
  margin: auto 0;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 3rem;

  @media (min-width: 768px){
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: 1fr 1.5fr 1.5fr;
    gap: 2rem;
  }

  @media (min-width: 1024px){
    grid-template-columns: repeat(3,1fr);
    gap: 1rem;
  }
`;

export const Column = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 1024px){
    justify-self: start;
  }
`;

export const Img = styled.img`
  width: 50px;  
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const ImgCenterWrap = styled.div`
  margin: 0 auto;
`;

export const ImgCenter = styled.img`
  max-height: 350px;
  width: auto;
`;


export const TextWrapper = styled.div`
  padding-top: 0;
`;

export const TopLine = styled.h1`
  color: #2A374A;
  font-size: 78px;
  text-align: center;
  font-weight: normal;
  letter-spacing: -.5px;
  grid-column: 1/-1;
  font-family: 'Oranienbaum', sans-serif;
`;

export const Heading = styled.h2`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  font-family: 'Oranienbaum', sans-serif;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#2A374A')};
  
  
  @media (min-width: 768px){
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 400px;
  font-size: 18px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#2a374a' : '#fff')};
  font-family: 'Oranienbaum', sans-serif;

  word-break: break-word;



  @media (min-width: 768px){
    max-width: 250px;
  }

  @media (min-width: 1024px){
    margin-bottom: 35px;
  }
`;

export const Subtitle2 = styled.p`
  font-size: 24px;
  color: ${({darkText}) => (darkText ? '#2a374a' : '#fff')};
  font-family: 'Oranienbaum', sans-serif;
  margin-bottom: 32px;
  
  word-break: break-word;
  
  &:last-child{
    margin-bottom: unset;
  }
`;

export const ColumnCenter = styled.div`
  justify-self: center;
  text-align: center;
`;

export const Column2 = styled.div`
  text-align: center;

  @media (min-width: 1024px){
    margin-bottom: auto;
  }
`;

export const Column3 = styled.div`
  text-align: center;
  margin-top: auto;
`;

export const DescriptionLeft = styled.div`
  width: 350px;
  text-align: left;
`;

export const TextWrapperDescription = styled.div`
  max-width: 300px;
  margin: 0 auto;
`;