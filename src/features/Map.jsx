/* eslint-disable no-unused-vars */
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import styled from "styled-components";
import SearchOutput from "./SearchOutput";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import List from "./List";
import Forms from "./Form";
import { getFormData } from "./FormSlice";
import { useSelector } from "react-redux";

const Page = styled.div`
  @media (min-width: 320px) {
    /* margin-top: rem; */
    /* background:#111; */
    z-index: 10;
  }
  @media (min-width: 700px) {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 10px;
    /* background-color: blue; */
  }
`;

// const ListDiv = styled.div`
// @media (min-width: 700px) {
//   display: flex;
//   width: 30%;
//   }
//   /* border: 2px solid blue; */

// `;

const MapDiv = styled.div`
  @media (min-width: 320px) {
    /* border: 2px solid black; */
    /* background-color: #1f1f1f; */
    margin: 0px;
    padding: 0;
    width: 100%;
    height: 100vh;
    z-index: -10;
    margin-top: 3rem;
    position: absolute;
    top: 0px;
  }
  @media (min-width: 700px) {
    width: 49rem;
    height: 100%;
    /* position: absolute; */
    top: 3rem;
    transform: translateX(60%);
    /* background-color: black; */
    z-index: 0;
  }
`;

const SearchText = styled.div`
  background-color: #fff;
  border-radius: 30px;
  @media (min-width: 320px) {
    /* background:red; */
    border: 2px solid black;
    border: none;
    position: absolute;
    top: 60px;
    left: 3.5rem;
    width: 15rem;
    padding: 0px 6px;
    /* z-index: -1; */
  }

  @media (min-width: 700px) {
    display: flex;
    flex-direction: column;
    z-index: -1;
    width: 20.5rem;
    height: auto;
    align-items: center;
    left: 45rem;
    top: 7rem;
    padding-top: 2rem;
    padding-left: 1rem;
    /* z-index: -10; */
  }
`;

const FormCancel = styled.div`
  /* border: 2px solid #111; */
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: right;
`;

const CancelButton = styled.button`
  @media (min-width: 320px) {
    background: none;
    border: none;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    /* position: absolute;
    left: 280px;
    top: 10px; */
  }
  @media (min-width: 700px) {
    background: none;
    border: none;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    position: absolute;
    left: 340px;
    top: 10px;
  }
`;

const Img = styled.img`
  @media (min-width: 320px) {
    height: 50px;
    width: 80px;
  }
  @media (min-width: 700px) {
    height: 50px;
    width: 80px;
  }
`;
const ImgDiv = styled.div`
  @media (min-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ListBtn = styled.button`
  background: linear-gradient(to top left, #e79720, #f1c149, #eed58e);
  color: #fff;
  list-style-type: none;
  text-align: center;
  border: 3px solid #eed58e;
  outline: 1px solid #f4f3f1;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  position: absolute;
  @media (min-width: 320px) {
    padding: 3px 5px;
    margin: 5px 3px;
    width: 90px;
    border-radius: 10px;
    font-size: 12px;
    top: 5px;
    right: 10px;
  }
  @media (min-width: 700px) {
    padding: 3px 5px;
    margin: 5px 3px;
    width: 120px;
    border-radius: 10px;
    top: 25px;
    left: 115px;
  }
`;

const ListLap = styled.div`
  @media (min-width: 320px) {
    display: none;
  }
  @media (min-width: 700px) {
    display: flex;
    flex-direction: column;
    transform: translateX(7%);
  }
`;
const ListMob = styled.div`
  @media (min-width: 320px) {
    display: block;
    z-index: 30;
  }
  @media (min-width: 700px) {
    display: none;
  }
`;

const LapListBtn = styled.div`
  background: linear-gradient(to top left, #e79720, #f1c149, #eed58e);
  color: #fff;
  list-style-type: none;
  text-align: center;
  border: 3px solid #eed58e;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  position: absolute;
  top: 1rem;
  left: 2rem;
  width: 20rem;
  border-radius: 50px;
  font-size: 22px;
`;

const ItmDiv = styled.div`
  display: flex;
  z-index: 10;
`;

const Move = styled.div`
  @media (min-width: 320px) {
    display: none;
  }
  @media (min-width: 700px) {
    display: inline-block;
  }
`;

const H1 = styled.h4`
  background: linear-gradient(to top left, #eb9d27, #fadc8f);
  color: #fff;
  border-radius: 5px;
  position: absolute;
  bottom: 75px;
  padding: 0px 5px;
`;

function Map() {
  // getting lat and lng using search params
  const [searchParams] = useSearchParams();
  const [lat, setLat] = useState(11.361085); // Initialize with default latitude
  const [lng, setLng] = useState(76.776903); // Initialize with default longitude
  // const [data, setData] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showSearch, setShowSearch] = useState(true);

  function MapPosition() {
    const latValue = parseFloat(searchParams.get("lat"));
    const lngValue = parseFloat(searchParams.get("lng"));

    const map = useMap();

    // console.log(data);

    useEffect(() => {
      if (!isNaN(latValue) && !isNaN(lngValue)) {
        map.setView([latValue, lngValue], map.getZoom());
        setLat(latValue);
        setLng(lngValue);
      }
    }, [latValue, lngValue, map]);
  }

  const formData = useSelector(getFormData);

  function handleShowList() {
    setShowList((prevState) => !prevState);
  }
  function handleShowForm() {
    setShowForm((prevState) => !prevState);
  }

  function handleSearch() {
    setShowSearch(false);
    console.log(showSearch);
  }

  return (
    <Page>
      <ItmDiv>
        <ListMob>
          <ListBtn onClick={handleShowList}>
            {showList ? "Go to Map" : "Your Journey"}
          </ListBtn>
          <div className={showList ? "listDiv" : "listNone"}>
            <List className="mobileList" handleSearch={handleSearch} />
          </div>
        </ListMob>

        <ListLap>
          <LapListBtn>Your Journey</LapListBtn>
          <List className="lapList" />
        </ListLap>
        <div className={showForm ? "formDiv" : "noForm"}>
          <FormCancel>
            <CancelButton
              onClick={() => {
                setShowForm(false);
              }}
            >
              x
            </CancelButton>
          </FormCancel>
          <Forms />
        </div>
        {showSearch && (
          <SearchText>
            <SearchOutput />
          </SearchText>
        )}
      </ItmDiv>
      <MapDiv onClick={handleShowForm}>
        {/* <PosButton>get location</PosButton> */}
        <Move>
          <H1>use ⬆️⬇️⬅️➡️ to move around in the map</H1>
        </Move>
        <MapContainer
          center={[lat, lng]}
          zoom={16}
          scrollWheelZoom={false}
          className="map"
        >
          <TileLayer
            // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            // url="https://t{s}.ssl.ak.tiles.virtualearth.net/tiles/a{q}.jpeg?g=854&mkt=en&n=z"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          {formData.map((itm) => (
            <Marker
              position={[itm.lat, itm.lng]}
              key={itm.id}
              onClick={() => setShowForm(false)}
            >
              <Popup>
                <ImgDiv>
                  <Img src={`${itm.photo}`} alt={itm.visitedPlace} />
                  <h4>{itm.visitedPlace}</h4>
                </ImgDiv>
              </Popup>
            </Marker>
          ))}

          <MapPosition />
          <DetectClick />
        </MapContainer>
      </MapDiv>
    </Page>
  );
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: async (e) => {
      const { lat, lng } = e.latlng;
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
      );
      const data = await response.json();
      const placeName = data.display_name; // Extract the place name from the response

      // console.log("Clicked coordinates:", lat, lng);
      // console.log("Clicked place:", placeName);

      // Navigate or perform any other action with the place name, latitude, and longitude
      // navigate(`?lat=${lat}&lng=${lng}&place=${placeName}`);
      navigate(`?lat=${lat}&lng=${lng}&place=${encodeURIComponent(placeName)}`);
    },
  });
}

export default Map;
