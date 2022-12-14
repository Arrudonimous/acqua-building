import styled from 'styled-components';
import Image from '../../assets/images/predio.jpg';

export const Container = styled.div`
  width: 50%;
  height: 100%;
  background-image: url(${Image});
  background-size: cover;
  background-position: center;
  background-color: black;
  display: flex;
  justify-content: center;
  @media(max-width: 1000px){
    width: 100%;
    height: 100vh;
  }
  @media(max-width: 500px){
    width: 100%;
    height: 70vh;
  }

  ul{
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &+ul{
      margin-left: 89px;
      @media(max-width: 550px){
        margin-left: 53px;
      }
    }

    .number{
      font-size: 59px;
      font-weight: bold;
      filter: drop-shadow(4px 4px 9px rgba(0, 0, 0, 0.45));
      @media(max-width: 550px){
        font-size: 32px;
      }
    }

    li{
      list-style-type: none;
      font-size: 14px;
      text-transform: uppercase;
      filter: drop-shadow(4px 4px 9px rgba(0, 0, 0, 0.45));
      @media(max-width: 550px){
        font-size: 10px;
      }
    }
  }
`;
