/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// const NavDiv = styled.div`
//   display: flex;
//   justify-content: space-between;
//   gap: 30px;
//   margin-right: 10px;
// `;

const NavLinks = styled(NavLink)`
  text-decoration: none;
  color: #1f1f1f;
  width: 8rem;
  margin-top: 30px;

  &.active {
    background: linear-gradient(to top left, #eb9d27, #fadc8f);
    padding: 2px 7px;
    border-radius: 9px;
    color: #fff;
    text-align: center;
    /* transition: 2s ease; */
    /* font-size:30px; */
  }

  @media (min-width: 320px) {
    /* border: 2px solid black; */
    width: 6rem;
    font-size: 20px;
  }
  @media (min-width: 700px) {
    width: 5rem;
    font-size: 20px;
  }

  &.active {
    background: linear-gradient(to top left, #eb9d27, #fadc8f);
    padding: 2px 7px;
    border-radius: 9px;
    color: #fff;
    text-align: center;
    /* transition: 2s ease; */
    /* font-size:30px; */
  }
`;

function Nav({ hamIcn, icnChange }) {
  // console.log(hamIcn);
  return (
    <div className={hamIcn ? "divNav" : "hiddenNav"} onClick={icnChange}>
      <NavLinks to="/">Home</NavLinks>
      <NavLinks to="/aboutus">About us</NavLinks>

      <NavLinks to="/SignUp">SignUp</NavLinks>
    </div>
  );
}

export default Nav;
