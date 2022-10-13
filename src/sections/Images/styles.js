import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 53px 76px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1{
    font-size: 32px;
  }

  small{
    font-size: 16px;
    font-weight: 400;
    margin-top: 1px;
    margin-bottom: 74px;
  }
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
  img{
    width: 402px;
    height: 402px;
    & + img{
      margin-left: 40px;
    }
    transition: transform 0.2s ease-in;
    &:hover{
      transform: scale(0.98)
    }
  }

`;
