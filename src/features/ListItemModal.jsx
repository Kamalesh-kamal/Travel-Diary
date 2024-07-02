/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";
import { HiMiniXMark } from "react-icons/hi2";

const ModalDiv = styled.div`
  display: flex;
  align-items: start;
  position: absolute;
  transform: translate(50%, 50%);
  left: 12rem;
  background-color: #fff;
  height: 20rem;
  width: 30rem;
  padding: 5px 10px;
  border-radius: 15px;
  overflow-y: scroll;

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
    left: -9rem;
    height: 25rem;
    width: 20rem;
    /* padding:0 5px; */
  }
  @media (min-width: 700px) {
    z-index: 20;
    top: -10rem;
    left: 18rem;
    height: 25rem;
    width: 25rem;
    /* padding:0 5px; */
  }
`;

const Cancel = styled.button`
  color: black;
  position: absolute;
  right: 5px;
  background: transparent;
  border: none;
  font-size: 20px;
`;

const ItmDiv = styled.div`
  /* border: 2px solid black; */

  width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 320px) {
    padding: 2px 5px;
  }
`;
const Itms = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubItms = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Img = styled.img`
  width: 20rem;
  height: 15rem;
  background-size: cover;
  border-radius: 10px;
  @media (min-width: 320px) {
    position: sticky;
    transform: translateX(5%);
    width: 15rem;
    height: 12rem;
  }
`;

const Lab = styled.label`
  width: 5rem;
  display: inline-block;
  /* text-align: center; */
`;

const H4 = styled.h4`
  /* border: 2px solid black; */
  width: 18rem;
  display: inline-block;
  @media (min-width: 320px) {
    width: 13rem;
  }
`;

function ListItemModal({ data, changeItem }) {
  const { place, photo, summary, lat, lng, visitedPlace, date } = data;

  const handleCancel = () => {
    changeItem();
  };

  const handleClick = (e) => {
    console.log(e.target);
    if (e.target.classList.contains("modal")) {
      changeItem();
    }
  };

  return (
    <div className="modal" onClick={handleClick}>
      <ModalDiv>
        <Cancel onClick={handleCancel}>
          <HiMiniXMark />
        </Cancel>
        <ItmDiv>
          <Img src={`${photo}`} alt="" />
          <Itms>
            <SubItms>
              <Lab>Visited at:</Lab>
              <H4>{visitedPlace}</H4>
            </SubItms>
            <SubItms>
              <Lab>Date:</Lab>
              <H4>{date}</H4>
            </SubItms>
            <SubItms>
              <Lab>place:</Lab>
              <H4>{place}</H4>
            </SubItms>
            <SubItms>
              <Lab>position:</Lab>
              <H4>
                {lat.slice(0, 5)},{lng.slice(0, 5)}
              </H4>
            </SubItms>
            <SubItms>
              <Lab>description:</Lab>
              <H4>{summary}</H4>
            </SubItms>
          </Itms>
        </ItmDiv>
      </ModalDiv>
    </div>
  );
}

export default ListItemModal;
