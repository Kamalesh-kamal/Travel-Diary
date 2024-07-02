import styled from "styled-components";
import Logo from "./Logo";
import Nav from "./Nav";
import { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";

const NavBarDiv = styled.div`
  display: flex;
  @media (min-width: 320px) {
    /* border: 1px solid #fff; */
    width: 100%;
  }
  @media (min-width: 700px) {
    display: flex;
    width: 100%;
    height: 5rem;
    justify-content: space-between;
    align-items: center;
  }
`;

const NavElm = styled.div`
  @media (min-width: 320px) {
  }
  @media (max-width: 700px) {
    display: none;
  }
`;
const HamCont = styled.div`
  @media (min-width: 700px) {
    display: none;
  }
`;
const HamIcn = styled.button`
  position: absolute;
  background: transparent;
  outline: none;
  border: none;
  right: 15px;
  top: 10px;
  font-size: 55px;
  font-weight: 1000;
  color: #fff;
  z-index: 10;
`;

const HiddenContainer = styled.div`
  position: absolute;
  top: 4rem;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  background: #fff;
  background: #75caf7;
  /* border: 2px solid black; */

  /* transition:10s; */
`;

function Navbar() {
  const [hamIcn, setHamIcn] = useState(true);

  function handleIcnChange() {
    console.log("handleIcnChange called"); // Check if this is logged
    setHamIcn((prevHamIcn) => !prevHamIcn);
    console.log("hamIcn after setState:", !hamIcn);
  }
  console.log("hamIcn initial value:", hamIcn);
  return (
    <div className={!hamIcn ? "mobileNav" : "none"}>
      <NavBarDiv>
        <Logo />
        <NavElm>
          <Nav hamIcn={hamIcn} />
        </NavElm>
        <HamCont>
          <HamIcn onClick={handleIcnChange}>
            {hamIcn ? "≡" : <HiMiniXMark />}
          </HamIcn>
        </HamCont>
        {!hamIcn && (
          <HiddenContainer>
            <Nav className="hiddenNav" hamIcn={hamIcn}/>
          </HiddenContainer>
        )}
      </NavBarDiv>
    </div>
  );
}

export default Navbar;
