import styled from "styled-components";

export const ServicesContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #F6F6F6;
  padding: 1rem;

`;


export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  gap: 3rem;
  align-items: center;
  padding: 0 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 50px;
    gap: 2rem;
  }

  @media (min-width: 1024px) {
    gap: 12rem;
    height: 50rem;
  }

  & div:last-child {
    margin-top: auto;
  }
`;

export const ServicesCard = styled.a`
  background-repeat: no-repeat;
  width: 200px;
  background-size: auto;
  height: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all .2s ease-in-out;
  text-decoration: none;

  @media (min-width: 315px) {
    min-width: 250px;
  }

  @media (min-width: 450px) {
    min-width: 325px;
  }

  @media (min-width: 768px) {
    min-width: 325px;
  }

  @media (min-width: 1024px) {
    min-width: 375px;
  }

  &:hover {
    transform: scale(1.02);
    transition: all .2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesH = styled.h2`
  font-size: 70px;
  font-family: 'Oranienbaum', sans-serif;
  color: #2A374A;
  margin-bottom: 22px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesSubtitle = styled.p`
  font-size: 34px;
  font-family: 'Oranienbaum', sans-serif;
  color: #2A374A;
`;

export const ServicesH2 = styled.h2`
  font-size: 48px;
  color: #ffffff;
  font-weight: normal;
  font-family: 'Oranienbaum', sans-serif;
  margin-bottom: 10px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 70%;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    align-items: end;
  }

  @media (min-width: 1024px) {
    margin-bottom: -3rem;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const ServicesButton = styled.a`
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  color: #ffffff;
  background-color: #2A374A;
  padding: 14px 32px;
  border-radius: 50px;
  text-decoration: none;

  transition: all .2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    transition: all .2s ease-in-out;
    cursor: pointer;
  }
`;