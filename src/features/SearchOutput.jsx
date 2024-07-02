/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { MdLocationPin } from "react-icons/md";
import { useState } from "react";
import { nomatimGeoJson } from "../hooks/NomatimGeoJson";
import { FaRegCircleXmark } from "react-icons/fa6";
import { useSearchParams } from "react-router-dom";

const SearchOp = styled.div`
  @media (min-width: 320px) {
    display: flex;
    /* z-index: -20; */
    width: 100%;
  }
  @media (min-width: 700px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  /* background-color:#e21818; */
`;
const Input = styled.input`
  @media (min-width: 320px) {
    text-align: center;
    height: 3rem;
    width: 100%;
    outline: none;
    border: none;
    border-radius: 15px;
  }

  @media (min-width: 700px) {
    position: absolute;
    top: 0rem;
    left: 0rem;
    width: 21.7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* z-index: 10; */
  }
`;

const SearchDiv = styled.div`
  position: absolute;
  transform: translate(50%, -50%);
  right: 80px;
  top: 30px;
  background-color: none;
`;

const LocDiv = styled.div`
  position: absolute;
  top: 10px;
  left: 45px;
  z-index: 10;

  @media (min-width: 320px) {
    top: 15px;
    left: 7px;
  }
`;

const SearchButton = styled.button`
  border: transparent;
  background-color: transparent;
  cursor: pointer;
  font-size: 17px;
  padding: 2px 30px;

  @media (min-width: 320px) {
    position: absolute;
    top: -18px;
    right: -70px;
    font-size: 21px;
    width: 0px;
  }
  @media (min-width: 700px) {
    position: absolute;
    top: -50px;
    right: -70px;
    font-size: 21px;
    width: 0px;
  }
`;

const TextCancel = styled.div`
  position: absolute;
  right: 120px;
  top: 17px;
  @media (max-width: 700px) {
    right: 60px;
    top: 15px;
    z-index: 10;
  }
  @media (min-width: 700px) {
    right: 60px;
    top: -13px;
    z-index: 10;
  }
`;

const ShCl = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  @media (min-width:320px) {
    position: absolute;
    
  }
`;

// const Nomatim_Base_Url = "https://nominatim.openstreetmap.org/search?";

function SearchOutput() {
  // eslint-disable-next-line no-unused-vars
  const [searchText, setSearchText] = useState("");
  // console.log(searchText);

  const [searchData, setSearchData] = useState([]);

  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = async (searchText) => {
    try {
      const data = await nomatimGeoJson(searchText);
      setSearchData(data);
      console.log(searchData);
    } catch (error) {
      console.error("err", error);
    }
  };

  const handleText = () => {
    setSearchText("");
    setSearchData([]);
  };

  const handleLoc = (data) => {
    searchParams.set("lat", data.lat);
    searchParams.set("lng", data.lon);
    searchParams.set("place", data.display_name);
    setSearchParams(searchParams);
    console.log(data);
    setLat(data.lat);
    setLng(data.lon);
    console.log(data.lat);
    console.log(data.lon);
    return data;
  };

  return (
    <>
      <SearchOp>
        <LocDiv>
          <MdLocationPin />
        </LocDiv>
        <Input
          type="text"
          placeholder="search here"
          value={searchText}
          onChange={(e) => {
            const newSearchText = e.target.value;
            setSearchText(newSearchText);
            handleClick(newSearchText);
          }}
        />

        <ShCl>
          {searchText && (
            <TextCancel>
              <FaRegCircleXmark onClick={handleText} />
            </TextCancel>
          )}

          <SearchDiv>
            <SearchButton
              onClick={() => {
                handleClick(searchText);
              }}
            >
              <CiSearch />
            </SearchButton>
          </SearchDiv>
        </ShCl>
      </SearchOp>

      <div>
        {searchData.map((data) => (
          <div key={data.osm_id} onClick={() => handleLoc(data)}>
            <h6>
              <MdLocationPin /> {data.display_name}
            </h6>
          </div>
        ))}
      </div>
    </>
  );
}

export default SearchOutput;
