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
    @media(max-width: 800px){
      font-size: 29px
    }
  }

  small{
    font-size: 16px;
    font-weight: 400;
    margin-top: 1px;
    margin-bottom: 74px;

    @media(max-width: 800px){
      font-size: 14px;
      margin-bottom: 27px;
    }
  }

  @media(max-width: 500px){
    height: 60vh;
    padding: 76px 13px;
  }

  @media(max-width: 800px){
    width: 100vw;
    height: 200px;
    padding: 0;
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

    @media(max-width: 800px){
      width: 221px;
      height: 221px;

      & + img{
        margin-left: 22px;
      }
    }
    @media(max-width: 500px){
      width: 120px;
      height: 120px;

      & + img{
        margin-left: 5px;
      }
    }
  }

  

`;
