import styled from "styled-components";

export const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #fff;
  padding-top: 80px;
  width: 100%;
  
  @media (max-width: 768px) {
    padding-top: 70px;
  }
`;

export const ContentWrapper = styled.div`
  width: 85%;
  max-width: 1600px;
  margin: 0 auto;
  
  @media (max-width: 1200px) {
    width: 90%;
  }
  
  @media (max-width: 768px) {
    width: 92%;
  }
  
  @media (max-width: 480px) {
    width: 95%;
  }
`;