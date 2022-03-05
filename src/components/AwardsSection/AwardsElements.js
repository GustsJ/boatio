import styled from "styled-components";

export const AwardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5rem 3rem;


  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 10rem 3rem;
  }
`;

export const AwardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    margin-top: auto;
    gap: unset;
  }
`;

export const AwardTitle = styled.h2`
  color: #2A374A;
  font-size: 48px;
  font-family: 'Oranienbaum', sans-serif;
  font-weight: normal;
  line-height: 3rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: unset;
    line-height: 3rem;
    margin-bottom: 1rem;
  }

`;

export const AwardSubtitle = styled.p`
  color: #2A374A;
  font-size: 18px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 1rem;
  letter-spacing: 0.25px;

  @media screen and (min-width: 768px) {
    text-align: unset;
    font-size: 22px;
  }
`;

export const AwardImage = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;
