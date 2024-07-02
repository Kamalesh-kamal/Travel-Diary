import styled from "styled-components";
import bgImg from "../images/Bg-home.jpg";
import Navbar from "./Navbar";
import { useNavigate } from "react-router";

const HomeDiv = styled.div`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }
  @media (min-width: 720px) {
    background: #111;
    height: 100vh;
    width: 100%;
  }
  @media (min-width: 1024px) {
    height: 100vh;
    width: 100%;
  }
`;
const BgImg = styled.div`
  @media (min-width: 320px) {
    background-image: url(${bgImg});
    height: 100svh;
    width: 100%;
    background-size: cover;
    background-position: center;
  }

  @media (min-width: 700px) {
    /* background-image: url(${bgImg}); */
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-position: center;
  }

  @media (min-width: 1024px) {
    background-image: url(${bgImg});
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-position: center;
  }
`;

const H1Home = styled.h1`
  @media (min-width: 320px) {
    width:95%;
    text-align: center;
    color: #fcf9f9;
    font-size: 25px;
    position: absolute;
    top: 9rem;
  }
  @media (min-width: 720px) {
    position: absolute;
    top: 7rem;
    text-align: center;
    color: #fcf9f9;
    font-size: 28px;
    width: 45rem;
    z-index: 10;
  }
  @media (min-width: 1024px) {
    position: absolute;
    top: 9rem;
    text-align: center;
    color: #fcf9f9;
    font-size: 35px;
    width: 90%;
    z-index: 10;
  }
`;

const H3Home = styled.h3`
  @media (min-width: 320px) {
    position: absolute;
    top: 20rem;
    text-align: center;
    color: #fcf9f9;
    font-size: 22px;
    width: 95%;
    /* background:#111; */
  }
  @media (min-width: 720px) {
    position: absolute;
    width: 95%;
    top: 15rem;
    font-size: 20px;
  }
  @media (min-width: 1024px) {
    position: absolute;
    top: 18rem;
    text-align: center;
    color: #fcf9f9;
    font-size: 28px;
    width: 95%;
  }
`;
const HomeButton = styled.button`
  @media (min-width: 320px) {
    background: linear-gradient(to top left, #eb9d27, #fadc8f);
    font-weight: 600;
    padding: 10px 0px;
    border-color: transparent;
    border-radius: 50px;
    color: #fff;
    width: 13rem;
    /* z-index: -10; */
    position: absolute;
    bottom: 30px;
    font-size: 27px;
  }
  @media (min-width: 720px) {
    background: linear-gradient(to top left, #eb9d27, #fadc8f);
    font-weight: 600;
    padding: 10px 5px;
    border-color: transparent;
    border-radius: 50px;
    color: #fff;
    width: 15rem;
    z-index: 10;
    position: absolute;
    bottom: 1rem;
    font-size: 15px;

    &:hover {
      color: #dee7e0;
      font-size: 20px;
      box-shadow: 2px 3px 5px rgba(246, 244, 244, 0.984);
      cursor: pointer;
    }
  }
  @media (min-width: 1024px) {
    background: linear-gradient(to top left, #eb9d27, #fadc8f);
    font-weight: 600;
    padding: 5px;
    border-color: transparent;
    border-radius: 50px;
    color: #fff;
    width: 15rem;
    font-size: 30px;
    z-index: 10;
    position: absolute;
    bottom: 1rem;
  }
`;

const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 150px;

  /* @media (min-width: 320px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  } */
`;
const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  /* @media (min-width: 320px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  } */
`;

function Home() {
  const navigate = useNavigate();
  return (
    <HomeDiv>
      <BgImg>
        <Navbar />
        <Div1>
          <H1Home>
            You travel the world. Travel Diary keeps track of your adventures
          </H1Home>
          <Div2>
            <H3Home>
              A world map that tracks your footsteps into every city you can
              think of. Never forget your wonderful experiences, and show your
              friends how you have wandered the world.
            </H3Home>

            <HomeButton onClick={() => navigate("/login")}>
              Start Tracking
            </HomeButton>
          </Div2>
        </Div1>
      </BgImg>
    </HomeDiv>
  );
}

export default Home;
