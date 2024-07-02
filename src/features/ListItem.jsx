/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, getFormData } from "./FormSlice";
import styled from "styled-components";
import ListItemModal from "./ListItemModal";
import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineVisibility } from "react-icons/md";

const ListItemDiv = styled.div`
  /* border: 1px solid #fff; */
  /* overflow: scroll; */
  overflow-y: auto;
  overflow-x: hidden;

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
  width: 20rem;
  height: auto;
  border: 1px solid #fff;
  border-radius: 15px;
  margin: 5px 7px;
  padding: 10px 15px;
`;

const Cancel = styled.button`
  position: sticky;
  /* transform: translate(-10%, -35%);
  left: 250px; */
  z-index: 10;
  font-size: 15px;
  background: transparent;
  border: none;
  color: #fff;
`;

const View = styled.button`
  position: sticky;
  /* transform: translate(-10%, -35%);
  left: 340px; */
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

function ListItem() {
  const formData = useSelector(getFormData);
  // console.log(formData);
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState({});
  const [showModal, setShowModal] = useState(false);
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

  return (
    <>
      <ListItemDiv>
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
                  }}
                >
                  <MdOutlineVisibility />
                </View>
              </Buttons>

              <div>
                <h5>{data.place}</h5>
              </div>
            </Items>
          );
        })}
      </ListItemDiv>
      {showModal && (
        <ListItemModal data={selectedItem} changeItem={handleCancelItem} />
      )}
    </>
  );
}

export default ListItem;
