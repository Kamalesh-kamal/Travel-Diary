import { FaPhone } from "react-icons/fa6";

import { IoMdMail } from "react-icons/io";
import styled from "styled-components";

const Container = styled.div`
  @media (min-width: 320px) {
    background: linear-gradient(to top left, #eb9d27, #fadc8f);
    color: #fff;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 5rem;
  }
  @media (min-width: 700px) {
    background: linear-gradient(to top left, #eb9d27, #fadc8f);
    color: #fff;
    /* color: black; */
    display: flex;
    flex-direction: column;
    height: 5.5rem;
    width: 100%;
  }
  @media (min-width: 1024px) {
    background: linear-gradient(to top left, #eb9d27, #fadc8f);
    color: #fff;
    /* color: black; */
    display: flex;
    flex-direction: column;
    height: 7.5rem;
    width: 100%;
  }
`;

const Itms = styled.div`
  @media (min-width: 320px) {
    display: flex;
    gap: 5px;
    padding: 0px 20px;
  }
  @media (min-width: 700px) {
    display: flex;
    gap: 10px;
  }
`;
const Rights = styled.div`
  @media (min-width: 320px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
  @media (min-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }
`;

const ItmDiv = styled.div`
  @media (min-width: 320px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  @media (min-width: 700px) {
    display: flex;
    justify-content: space-between;
    padding: 0px 2rem;
    width: 90%;
  }
`;

const H1 = styled.div`
  @media (min-width: 320px) {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    font-size: 15px;
    font-weight: 700;
  }

  @media (min-width: 700px) {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    font-size: 18px;
    font-weight: 700;
  }
  @media (min-width: 1024px) {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    font-size: 25px;
    font-weight: 700;
  }
`;
const H2 = styled.div`
  @media (min-width: 320px) {
    font-size: 12px;
  }
  @media (min-width: 700px) {
    font-size: 15px;
  }
  @media (min-width: 1024px) {
    font-size: 25px;
  }
`;

function Footer() {
  return (
    <Container>
      <H1> Contact Us</H1>

      <ItmDiv>
        <Itms>
          <H2>
            <FaPhone />
            <span>+91 12345 1234</span>
          </H2>
        </Itms>

        <Itms>
          <H2>
            <IoMdMail />
            <span>TravelDairy@mail.com</span>
          </H2>
        </Itms>
      </ItmDiv>
      <Rights>
        <H1> All rights reserved ©️2024</H1>
      </Rights>
    </Container>
  );
}

export default Footer;
