import styled from "styled-components";
import bgImg from "../images/Bg-home.jpg";
import about1 from "../images/about1.JPEG";
import about3 from "../images/about3.JPEG";
import Navbar from "./Navbar";
const AboutDiv = styled.div`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }
  @media (min-width: 700px) {
    width: 100%;
    height: 110vh;
  }
  @media (min-width: 1024px) {
    width: 100%;
    height: 150vh;
  }
`;
const Div1 = styled.div`
  @media (min-width: 320px) {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    /* margin: 5rem 10px;  */
  }
  @media (min-width: 700px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    z-index: 10;
    margin-top: 30px;
  }
  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    z-index: 10;
    /* margin-top: 7rem; */
  }
`;

const Div2 = styled.div`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #f5efef;
    width: 90%;
    height: 22rem;
    border-radius: 15px;
  }
  @media (min-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    height: 25rem;
    border: 1px solid #f5efef;
    margin: 0 20px;
    border-radius: 15px;
    margin-bottom: 1rem;
  }
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row-reverse;

    justify-content: space-between;
    width: 90%;
    height: 15rem;
    border: 1px solid #f5efef;
    border-radius: 15px;
    margin-bottom: 1rem;
  }
`;
const Div3 = styled.div`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #f5efef;
    width: 90%;
    height: 22rem;
    border-radius: 15px;
  }
  @media (min-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 90%;
    height: 25rem;
    border: 1px solid #f5efef;
    margin: 0 20px;
    border-radius: 15px;
    margin-bottom: 1rem;
  }
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 15rem;
    border: 1px solid #f5efef;
    border-radius: 15px;
    margin-bottom: 1rem;
  }
`;

const AboutImg = styled.img`
  @media (min-width: 320px) {
    width: 130px;
    height: 130px;
    border-radius: 150px;
    /* border: 2px solid black; */
  }
  @media (min-width: 700px) {
    width: 120px;
    height: 120px;
    border-radius: 90px;
    /* border: 2px solid black; */
  }
  @media (min-width: 1024px) {
    width: 160px;
    height: 160px;
    border-radius: 90px;
    /* border: 2px solid black; */
  }
`;
const ImgDiv = styled.div`
  /* border: 2px solid black; */
  @media (min-width: 320px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 10px;
  }
  @media (min-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 10px;
  }
  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 10px;
  }
`;

const BgImg = styled.div`
  @media (min-width: 320px) {
    background-image: url(${bgImg});
    height: 150vh;
    width: 100%;
    background-size: cover;
    background-position: center;
  }
  @media (min-width: 700px) {
    background-image: url(${bgImg});
    height: 110vh;
    width: 100%;
    background-size: cover;
    background-position: center;
  }
  @media (min-width: 1024px) {
    background-image: url(${bgImg});
    height: 150vh;
    width: 100%;
    background-size: cover;
    background-position: center;
  }
`;

const H3Div = styled.div`
  @media (min-width: 320px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 700px) {
    width: 90%;
    display: flex;
    justify-content: end;
    align-items: center;
  }
  @media (min-width: 1024px) {
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
  }
`;
const H3Div1 = styled.div`
  @media (min-width: 320px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 700px) {
    width: 90%;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  @media (min-width: 1024px) {
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  /* width: 60rem;
  display: flex;
  justify-content: start;
  align-items: center; */
`;

const Abouth3 = styled.h3`
  @media (min-width: 320px) {
    background: linear-gradient(to top left, #eb9d27, #fadc8f);
    border-radius: 30px;
    width: 80%;
    /* text-align: center; */
    color: #fff;
    z-index: 10;
    padding: 5px 10px;
    font-size: 17px;
    text-align: justify;
  }
  @media (min-width: 700px) {
    background: linear-gradient(to top left, #eb9d27, #fadc8f);
    border-radius: 30px;
    width: 37rem;
    /* text-align: center; */
    color: #fff;
    z-index: 10;
    padding: 5px 10px;
    font-size: 25px;
  }
  @media (min-width: 1024px) {
    background: linear-gradient(to top left, #eb9d27, #fadc8f);
    border-radius: 30px;
    width: 40rem;
    /* text-align: center; */
    color: #fff;
    z-index: 10;
    padding: 5px 10px;
    font-size: 25px;
  }
`;
const H1 = styled.h1`
  @media (min-width: 320px) {
    text-align: center;
    color: #fcf9f9;
    font-size: 25px;
  }
  @media (min-width: 700px) {
    text-align: center;
    color: #fcf9f9;
    font-size: 30px;
  }
  @media (min-width: 1024px) {
    text-align: center;
    color: #fcf9f9;
    font-size: 35px;
    width: 95%;
  }
`;

function AboutUs() {
  return (
    <AboutDiv>
      <BgImg>
        <Navbar />
        <H1>
          You travel the world. Travel Diary keeps track of your adventures
        </H1>
        <Div1>
          <Div2>
            <ImgDiv>
              <AboutImg src={about1} />
            </ImgDiv>
            <H3Div>
              <Abouth3>
                Travel Diary allows you to effortlessly record your travel
                experiences, from the bustling streets of vibrant cities to the
                tranquil beauty of remote landscapes.Our mission is to inspire
                and empower travelers to preserve their memories in a meaningful
                way. By keeping track of your travels with Travel Diary.
              </Abouth3>
            </H3Div>
          </Div2>
          <Div3>
            <ImgDiv>
              <AboutImg src={about3} />
            </ImgDiv>
            <H3Div1>
              <Abouth3>
                You&apos;re not just documenting destinations; you&apos;re
                crafting a narrative of your own unique adventures. Join our
                community of fellow travelers and embark on a journey of
                discovery and storytelling. Let Travel Diary be your faithful
                companion as you explore the world and create memories that last
                a lifetime.
              </Abouth3>
            </H3Div1>
          </Div3>
        </Div1>
      </BgImg>
    </AboutDiv>
  );
}

export default AboutUs;
