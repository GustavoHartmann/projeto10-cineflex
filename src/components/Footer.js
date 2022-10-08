import styled from "styled-components";

const Footer = styled.div`
  width: 100%;
  height: 120px;

  background-color: #c3cfd9;

  padding-left: 15px;

  display: flex;
  align-items: center;

  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
  
  img{
    width: 20%;
    height: 80%;

    object-fit: cover;
  }
`;

export default Footer;
