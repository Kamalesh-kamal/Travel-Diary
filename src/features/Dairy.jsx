/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from "react-router";
// import List from "./List";
import Map from "./Map";
import styled from "styled-components";
import List from "./List";
import ListItemModal from "./ListItemModal";
import { ModalProvider, useModalContext } from "../context/ModalContext";

const Container = styled.div`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100svh;
  }
  @media (min-width: 700px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100vh;
  }
`;

const Back = styled.button`
  background: linear-gradient(to top left, #eb9d27, #fadc8f);
  color: #fff;
  font-weight: 600;
  border-radius: 50px;
  border-color: transparent;
  @media (min-width: 320px) {
    padding: 1px 3px;
    width: 5rem;
    z-index: 10;
    font-size: 13px;
  }
  @media (min-width: 720px) {
    padding: 5px 3px;
    width: 5rem;
    z-index: 10;
    font-size: 15px;
  }
`;

const ListDiv = styled.div`
  @media (min-width: 320px) {
    display: none;
  }
  @media (min-width: 700px) {
    display: block;
  }
`;

function Dairy() {
  const navigate = useNavigate();

  // const { Active } = useParams();
  const { showModal } = useModalContext();
  return (
    <>
      {showModal && <ListItemModal />}
      <Container>
        <Back onClick={() => navigate("/")}> ⬅back</Back>
        <ListDiv>
          <List className="lapList" />
        </ListDiv>
        <Map />
      </Container>
    </>
  );
}

export default Dairy;
