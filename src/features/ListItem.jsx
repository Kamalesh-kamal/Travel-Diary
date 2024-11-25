/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, getFormData } from "./FormSlice";
import styled from "styled-components";
import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineVisibility } from "react-icons/md";
import { useSearchParams } from "react-router-dom";
import { useModalContext } from "../context/ModalContext";

const ListItemDiv = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 10;

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
`;
const Items = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
  height: auto;
  border: 1px solid #fff;
  border-radius: 15px;
  margin: 5px 7px;
  padding: 10px 15px;
`;

const Cancel = styled.button`
  position: sticky;

  z-index: 10;
  font-size: 15px;
  background: transparent;
  border: none;
  color: #fff;
`;

const View = styled.button`
  position: sticky;
  z-index: 10;
  font-size: 15px;
  background: transparent;
  border: none;
  color: #fff;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20rem;
`;

const ListMsg = styled.p`
  text-align: center;
`;

const ListBtn = styled.button`
  background: linear-gradient(to top left, #e79720, #f1c149, #eed58e);
  color: #fff;
  list-style-type: none;
  /* text-align: center; */
  border: 3px solid #eed58e;
  outline: 1px solid #f4f3f1;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  width: 50%;
  font-size: 22px;
  border-radius: 50px;
`;

const BtnDiv = styled.div`
  @media (min-width: 320px) {
    display: none;
  }
  @media (min-width: 700px) {
    height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }
`;

const ImgDiv = styled.div`
  /* height: 10px;
  width: 10px;
  border-radius: 50px; */
`;

const Img=styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50px;
`

const Contents=styled.div`
  display: flex;
  gap: 1rem;
`

function ListItem() {
  const formData = useSelector(getFormData);
  // console.log(formData);
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const { showModal, setShowModal, setModalData } = useModalContext();

  // const [searchParams] = useSearchParams();
  // const lat = searchParams.get("lat");
  // const lng = searchParams.get("lng");

  const handleCancel = (lat, lng) => {
    dispatch(deleteItem(lat, lng));
  };

  const handleSelectedItem = (item) => {
    setSelectedItem(item);
  };

  function handleCancelItem() {
    setSelectedItem({});
    setShowModal(false);
  }

  const SelectedId = searchParams.get("id");
  console.log(formData);
  return (
    <>
      {formData.length ? (
        <ListItemDiv>
          <BtnDiv>
            <ListBtn>Your Journey</ListBtn>
          </BtnDiv>
          {formData.map((data, i) => {
            return (
              <Items key={i}>
                <Buttons>
                  <Cancel onClick={() => handleCancel(data.lat, data.lng)}>
                    <RiDeleteBinLine />
                  </Cancel>
                  <View
                    onClick={() => {
                      handleSelectedItem(data);
                      setShowModal(true);
                      setModalData(data);
                    }}
                  >
                    <MdOutlineVisibility />
                  </View>
                </Buttons>

                <Contents>
                  <ImgDiv>
                    <Img src={data.photo} />
                  </ImgDiv>
                  <h5>{data.place}</h5>
                </Contents>
              </Items>
            );
          })}
        </ListItemDiv>
      ) : (
        <ListItemDiv>
          <ListMsg>All your journies appears here</ListMsg>
        </ListItemDiv>
      )}
    </>
  );
}

export default ListItem;
