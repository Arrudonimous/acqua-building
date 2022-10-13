import styled from 'styled-components';

export const Container = styled.header`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const ContentContainer = styled.div`
  background-color: #F1F1F1;
  padding: 180px 31px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;

  h1{
    background-image: linear-gradient(270deg, #3498DB 9.74%, #34495E 98.57%);
    font-weight: bold;
    font-size: 52px;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  span{
    font-weight: 600;
    font-size: 18px;
    margin-top: 13px;
    margin-bottom: 23px;
  }

  small{
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 39px;
  }
`;

export const FormContainer = styled.div`
  width: 408px;
  display: flex;
  flex-direction: column;

  input{
    margin-bottom: 14px;
    padding: 15px 21px;
    font-size: 14px;
    font-weight: 400;
    color: #000;
    border-radius: 101px;
    border: 1px solid #bbbbbb;
    &::placeholder{
      color: #606060;
    }
  }

  button{
    padding: 14px 134px;
    border-radius: 101px;
    color: #fff;
    border: none;
    font-size: 16px;
    font-weight: 500;
    background: linear-gradient(270deg, #3498DB 9.74%, #34495E 98.57%), #FFFFFF;
    cursor: pointer;
    &:hover{
      background: #6CAFDA;
    }
  }
`;
