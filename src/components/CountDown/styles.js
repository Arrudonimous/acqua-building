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
  ul{
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &+ul{
      margin-left: 89px;
    }

    .number{
      font-size: 59px;
      font-weight: bold;
      filter: drop-shadow(4px 4px 9px rgba(0, 0, 0, 0.45));
    }
  }

  li{
    list-style-type: none;
    font-size: 14px;
    text-transform: uppercase;
    filter: drop-shadow(4px 4px 9px rgba(0, 0, 0, 0.45));
  }
`;
