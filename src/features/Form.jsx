import { useEffect, useState } from "react";
import { Form, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { addItem } from "./FormSlice";
import { useDispatch } from "react-redux";
import { imagedata } from "../api/imageData";

// const FormDiv = styled.div`

//   display: none;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 40vh;
//   border: 1px solid white;
//   margin: 10px;
//   border-radius: 20px;
//   padding-left: 20px;
//   box-shadow: 5px 5px 1px rgba(246, 244, 244, 0.984);
//   display: block;
// `;

const Frm = styled.div`
  @media (min-width: 320px) {
    padding-top: 3rem;
    /* border: 2px solid black; */
    display: flex;
    width: 100%;
    height: 23rem;
    justify-content: center;
    align-items: start;
    gap: 20px;
  }
  @media (min-width: 700px) {
    display: flex;
    /* flex-direction: column; */
    /* justify-content: space-between; */
    align-items: start;
    gap: 20px;
  }
`;
const Frm1 = styled.div`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    /* justify-content: start; */
    align-items: start;
    gap: 20px;
  }
  @media (min-width: 700px) {
    display: flex;
    flex-direction: column;
    /* justify-content: start; */
    align-items: start;
    gap: 20px;
  }
`;

const FrmButton = styled.button`
  @media (min-width: 320px) {
    width: 5rem;
    background: linear-gradient(to top left, #e79720, #f1c149);
    color: white;
    padding: 5px 10px;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    font-size: 15px;
  }

  @media (min-width: 700px) {
    display: inline-block;
    width: 5rem;
    background: linear-gradient(to top left, #e79720, #f1c149);
    color: white;
    padding: 5px 10px;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    font-size: 15px;
  }
`;

const Btn = styled.div`
  width: 100%;
  height: 2rem;
  /* border: 2px solid #111; */
  @media (min-width: 320px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Itms = styled.div`
  @media (min-width: 320px) {
    display: flex;
    align-items: center;
    gap: 50px;
  }
  @media (min-width: 700px) {
    display: flex;
    align-items: center;
    gap: 50px;
  }
`;

function Forms() {
  const [place, setPlace] = useState("");
  const [visitedPlace, setVisitedPlace] = useState("");
  const [photo, setPhoto] = useState("");
  const [date, setDate] = useState("");
  const [img, setImg] = useState([]);
  const [summary, setSummary] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const latitude = searchParams.get("lat");
    const longitude = searchParams.get("lng");
    const placeName = searchParams.get("place");
    if ((placeName, latitude, longitude)) {
      setPlace(placeName);
      setLat(latitude);
      setLng(longitude);
    }

    // Fetch image data when component mounts
    async function fetchImageData() {
      try {
        const data = await imagedata();
        setImg(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching image data:", error);
      }
    }

    fetchImageData();
  }, [searchParams]);

  const handlePlaceChange = (e) => {
    setPlace(e.target.value);
  };
  const handleVisitedPlaceChange = (e) => {
    setVisitedPlace(e.target.value);
  };
  const handleSummaryChange = (e) => {
    setSummary(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.value;
    // console.log(file);
    const selectedFile = img.find((itm) => itm.id === file);
    console.log(selectedFile);
    const imgUrl = selectedFile.img;
    console.log(imgUrl);
    setPhoto(imgUrl);
    // Update the photo state with the selected file
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem({ place, photo, summary, lat, lng, date, visitedPlace }));
    console.log(place, photo, summary, date, visitedPlace);
    // FormDiv.style.display = "hidden";
    setSummary("");
    // setPhoto("");
    setPlace("");
    // setDate("");
    setVisitedPlace("");
  };

  return (
    <div>
      <Form>
        <Frm>
          <Frm1>
            <Itms>
              <label>Place </label>
              <input type="text" value={place} onChange={handlePlaceChange} />
            </Itms>
            <Itms>
              <label>Visited at</label>
              <input
                type="text"
                value={visitedPlace}
                onChange={handleVisitedPlaceChange}
              />
            </Itms>
            <Itms>
              <label>Date</label>

              <input type="date" onChange={handleDateChange} />
            </Itms>
            <Itms>
              <label>Position</label>
              <h4>
                {lat.slice(0, 5)},{lng.slice(0, 5)}
              </h4>
            </Itms>
            <Itms>
              <label>Photo</label>
              <select onChange={handlePhotoChange} name="choose">
                <option value="">Select an image</option>
                {img.length > 0 ? (
                  img.map((data) => (
                    <option key={data.id} value={data.id}>
                      {data.type}
                    </option>
                  ))
                ) : (
                  <option disabled>Loading...</option>
                )}
              </select>
            </Itms>
            <Itms>
              <label>Description</label>
              <input
                type="text"
                rows="4"
                value={summary}
                onChange={handleSummaryChange}
              />
            </Itms>

            <Btn>
              <FrmButton type="submit" onClick={handleSubmit}>
                submit
              </FrmButton>
            </Btn>
          </Frm1>
        </Frm>
      </Form>
    </div>
  );
}

export default Forms;
