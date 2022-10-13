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

  @media(max-width: 500px){
    padding: 76px 12px;
  }

`;

export const ImagesContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 130px;
  display: grid;
  grid-template-columns: 442px 442px 442px;
  justify-content: space-between;
  img{
    width: 400px;
    height: 400px;
    transition: transform 0.2s ease-in;
    &:hover{
      transform: scale(0.98)
    }
    margin-bottom: 32px;

    @media(max-width: 1000px){
      width: 220px;
      height: 220px;
    }
    @media(max-width: 550px){
      width: 173px;
      height: 173px;
    }
  }

  @media(max-width: 1000px){
    grid-template-columns: 222px 222px 222px;
    padding: 0;
  }
  
  @media(max-width: 800px){
    grid-template-columns: 222px 222px;
    padding: 0;
  }
  @media(max-width: 500px){
    grid-template-columns: 170px 170px;
    padding: 0;
  }
  

`;
