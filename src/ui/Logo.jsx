import styled from "styled-components";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const LogoDiv = styled.div`
  @media (min-width: 320px) {
    display: flex;
    align-items: center;
    gap: 25px;
    height: auto;
    width: 100%;
    z-index: 10;
    padding-left: 10px;
  }
  @media (min-width: 700px) {
    display: flex;
    align-items: center;
    gap: 40px;
    height: auto;
    width: 40%;
    z-index: 10;
    margin-left: 10px;
  }
`;
const LogoImg = styled.img`
  @media (min-width: 320px) {
    height: 80px;
    width: 80px;
    border: 1px solid #fff;
    border-radius: 50px;
  }
  @media (min-width: 700px) {
    height: 4rem;
    width: 4rem;
    border: 1px solid #fff;
    border-radius: 70px;
  }
`;

const Head = styled.h1`
  @media (min-width: 320px) {
    color: #fffdfd;
    border: 1px solid white;
    padding: 1px 6px;
    border-radius: 5px;
    z-index: 10;
    font-size: 30px;
  }
  @media (min-width: 700px) {
    color: #fffdfd;
    border: 1px solid white;
    padding: 1px 6px;
    border-radius: 5px;
    z-index: 10;
    font-size: 2rem;
    width: 11rem;
  }
`;

function Logo() {
  return (
    <LogoDiv>
      <Link to="/">
        <LogoImg src={logo} alt="logo" />
      </Link>
      <Head>Travel Diary</Head>
    </LogoDiv>
  );
}

export default Logo;
