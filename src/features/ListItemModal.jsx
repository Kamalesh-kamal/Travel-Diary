/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { HiMiniXMark } from "react-icons/hi2";
import { useParams } from "react-router";
import { getFormData } from "./FormSlice";
import { useSelector } from "react-redux";
import { useModalContext } from "../context/ModalContext";

const ModalDiv = styled.div`
  /* height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center; */
  position: absolute; 
  top: 10rem;
  /* transform: translate(50%, 50%);
  left: 12rem;
  /* height: 20rem;
  width: 30rem; */
  background-color: #fff;
  padding: 5px 10px;
  border-radius: 15px;
  overflow-y: scroll;
  /* z-index: 10; */
  box-shadow:0.5px 0.5px 0.5px rgba(250, 247, 247, 0.985);

  &::-webkit-scrollbar {
    width: 10px; /* Width of the scrollbar */
    background: hwb(0 98% 2%);
    /* z-index: 10; */
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #f9b624; /* Color of the scrollbar thumb */
    border: 2px solid #fff;
    border-radius: 50px; /* Rounded corners of the thumb */
  }

  @media (min-width: 320px) {
    z-index: 20;
    top: 4rem;
    left: 1rem;
    height: 90svh;
    width: 95%;
    /* padding:0 5px; */
  }
  @media (min-width: 700px) {
    z-index: 10;
    top: 0;
    left: 0;
    height: 30rem;
    width: 55rem;
    transform: translate(20%, 10%);
  }
`;

const Cancel = styled.button`
  color: black;
  position: absolute;
  right: 5px;
  background: transparent;
  border: none;
  font-size: 30px;
  cursor: pointer;
`;

const ItmDiv = styled.div`

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 320px) {
    padding: 2px 5px;
  }
`;
const Itms = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SubItms = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
`;

const Img = styled.img`
  width: 20rem;
  height: 15rem;
  background-size: cover;
  border-radius: 10px;
  margin-top: 1rem;
  @media (min-width: 320px) {
    position: sticky;
    transform: translateX(5%);
    width: 15rem;
    height: 12rem;
  }
  @media (min-width: 720px) {
    position: sticky;
    transform: translateX(5%);
    width: 80%;
    height: 18rem;
  }
`;

const Lab = styled.label`
  width: 5rem;
  display: inline-block;
`;

const H4 = styled.h4`
  width: 18rem;
  display: inline-block;
  @media (min-width: 320px) {
    width: 70%;
  }
`;

function ListItemModal() {
  const { ActiveModal } = useParams();
  const formdata = useSelector(getFormData);
  const { place, photo, summary, lat, lng, visitedPlace, date } = formdata;
  const { modalData, setShowModal } = useModalContext();

  const handleCancel = () => {
    setShowModal(false);
  };


  const choosenData = [modalData];
  
  return (
    <div className="modal">
      <ModalDiv>
        <Cancel onClick={handleCancel}>
          <HiMiniXMark />
        </Cancel>
        {choosenData.map((data, i) => (
          <ItmDiv key={i}>
            <Img src={`${data.photo}`} alt="" />
            <Itms>
              <SubItms>
                <Lab>Visited at:</Lab>
                <H4>{data.visitedPlace}</H4>
              </SubItms>
              <SubItms>
                <Lab>Date:</Lab>
                <H4>{data.date}</H4>
              </SubItms>
              <SubItms>
                <Lab>place:</Lab>
                <H4>{data.place}</H4>
              </SubItms>
              <SubItms>
                <Lab>position:</Lab>
                <H4>
                  {data.lat.slice(0, 5)},{data.lng.slice(0, 5)}
                </H4>
              </SubItms>
              <SubItms>
                <Lab>description:</Lab>
                <H4>{data.summary}</H4>
              </SubItms>
            </Itms>
          </ItmDiv>
        ))}
      </ModalDiv>
    </div>
  );
}

export default ListItemModal;
