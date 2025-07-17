import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 2.5rem auto 2rem auto;
  padding: 2rem 1.5rem;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageHeading = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.2rem;
  text-align: center;
`; 