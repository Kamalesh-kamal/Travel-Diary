import bgImg from "../images/Bg-Home.jpg";
import styled from "styled-components";
import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUser } from "../features/UserSlice";
import { useState } from "react";

const BgImg = styled.div`
  @media (min-width: 320px) {
    background-image: url(${bgImg});
    height: 100svh;
    width: 100%;
    background-size: cover;
    background-position: center;
  }
  @media (min-width: 700px) {
    background-image: url(${bgImg});
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

const FormDiv = styled.div`
  @media (min-width: 320px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
    margin-top: 2rem;
    width: 100%;
  }
  @media (min-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const LoginDiv = styled.div`
  padding: 0px;
  margin: 0px;
`;
const LoginForm = styled.form`
  @media (min-width: 320px) {
    position: absolute;
    top: 18rem;
    border: 2px solid white;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 10rem;
    align-items: start;
    /* justify-content: center; */
    gap: 20px;
    padding: 50px 20px;
    z-index: 10;
    box-shadow: rgba(1px, 1px, 1px, 0.5);
    /* backdrop-filter: blur(5px); */
  }
  @media (min-width: 700px) {
    position: absolute;
    top: 6rem;
    border: 1px solid white;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    width: 30rem;
    height: 25rem;
    align-items: center;
    justify-content: center;
    gap: 40px;
    padding: 5px 20px;
    z-index: 10;
    box-shadow: rgba(1px, 1px, 1px, 0.5);
    backdrop-filter: none;
  }
`;

const InputDiv = styled.div`
  @media (min-width: 320px) {
    display: flex;
    gap: 30px;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
  }
  @media (min-width: 700px) {
    display: flex;
    gap: 30px;
    justify-content: flex-start;
    align-items: center;
  }
`;

const Label = styled.label`
  @media (min-width: 320px) {
    /* border: 2px solid black; */
    display: inline-block;
    width: 7rem;
    color: #fff;
    font-size: 14px;
  }
  @media (min-width: 700px) {
    /* border: 2px solid black; */
    display: inline-block;
    width: 15rem;
    color: #fff;
    font-size: 20px;
  }
`;

const Input = styled.input`
  @media (min-width: 320px) {
    height: 1.5rem;
    width: 7rem;
    font-size: 15px;
    border: none;
    border-radius: 25px;
    text-align: center;
    background-color: #e5e2cb;
    padding: 3px;
    font-size: 10px;
  }
  @media (min-width: 700px) {
    border: 2px solid black;
    height: 1.2rem;
    width: auto;
    font-size: 15px;
    border: none;
    border-radius: 25px;
    text-align: center;
    background-color: #e5e2cb;
    padding: 7px;
  }
`;

const FormButton = styled.button`
  @media (min-width: 320px) {
    background: linear-gradient(to top left, #eb9d27, #fadc8f);

    /* font-weight: 600; */
    position: absolute;
    bottom: 5rem;
    right: 5rem;
    padding: 5px;
    border-color: transparent;
    border-radius: 50px;
    width: 5rem;
    color: #fff;
    font-size: 12px;
    cursor: pointer;

    /* &:hover {
      font-size: 20px;
    } */
  }
  @media (min-width: 700px) {
    background: linear-gradient(to top left, #eb9d27, #fadc8f);
    /* font-weight: 600; */
    position: absolute;
    bottom: 3.2rem;
    right: 10rem;
    padding: 5px;
    border-color: transparent;
    border-radius: 50px;
    width: 10rem;
    color: #fff;
    font-size: 15px;
    cursor: pointer;

    /* &:hover {
      font-size: 20px;
    } */
  }
`;
const H4 = styled.h4`
  /* margin-top: 5rem;
  margin-left: 5rem; */
  color: #fff;
  @media (min-width: 720px) {
    font-size: 20px;
  }
`;
const H3 = styled.h3`
  /* margin-top: 5rem;
  margin-left: 5rem; */
  color: #fff;
  @media (min-width: 720px) {
    font-size: 20px;
  }
`;
const Span = styled.span`
  color: #eb9d27;
  font-size: 15px;
  /* margin-right: 10px; */
  text-decoration: underline;
  @media (min-width: 720px) {
    font-size: 20px;
  }
`;

const LogoDiv = styled.div`
  @media (min-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Back = styled.button`
  background: linear-gradient(to top left, #eb9d27, #fadc8f);
  color: #fff;
  font-weight: 600;
  border-radius: 50px;
  border-color: transparent;
  font-size: 12px;
  @media (min-width: 320px) {
    padding: 5px 3px;
    width: 5rem;
    z-index: 10;
    font-size: 18px;
    position: absolute;
    right: 10px;
    top: 30px;
  }
  @media (min-width: 720px) {
    padding: 5px 3px;
    width: 5rem;
    z-index: 10;
    font-size: 15px;
    margin-left: 3rem;
  }
`;

const SignUp = styled.div`
  @media (min-width: 320px) {
    /* border: 2px solid #111; */
    height: 2rem;
    width: 90%;
    position: absolute;
    bottom: 1.9rem;
    text-align: center;
  }
  @media (min-width: 720px) {
    /* border: 2px solid #111; */
    height: 2rem;
    width: 90%;
    position: absolute;
    bottom: 2.5rem;
    text-align: center;
  }
`;
const Guest = styled.div`
  @media (min-width: 320px) {
    /* border: 2px solid #111; */
    height: 2rem;
    width: 90%;
    position: absolute;
    bottom: .6rem;
    text-align: center;
  }
  @media (min-width: 720px) {
    /* border: 2px solid #111; */
    height: 2rem;
    width: 90%;
    position: absolute;
    bottom: 0.6rem;
    text-align: center;
  }
`;

function Login() {
  const [mailId, setMailId] = useState("");
  const [password, setPassword] = useState("");
  const [unMatched, setUnMatched] = useState(false);

  const userData = useSelector(getUser);
  const navigate = useNavigate();

  function handleLogin() {
    userData.map((data) => {
      if (data.mailId == mailId && data.password == password) {
        navigate("/map", { replace: true });
      } else {
        setUnMatched((prevState) => !prevState);
      }
    });
  }
  return (
    <LoginDiv>
      <BgImg>
        <LogoDiv>
          <Logo />
        </LogoDiv>
        <Back onClick={() => navigate("/")}> ⬅back</Back>
        <FormDiv>
          <LoginForm>
            <InputDiv>
              <Label>Mail Id</Label>
              <Input
                type="email"
                placeholder="enter your mail-Id"
                value={mailId}
                onChange={(e) => setMailId(e.target.value)}
              />
            </InputDiv>
            <InputDiv>
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputDiv>

            <FormButton onClick={handleLogin}>Login</FormButton>
            <SignUp>
              <H4>
                new user ?{" "}
                <Link to="/SignUp">
                  <Span>SignUp</Span>
                </Link>
              </H4>
            </SignUp>
            <Guest>
              <H3>
                login as guest?
                <Link to="/map">
                  <Span>Guest Login</Span>
                </Link>
              </H3>
            </Guest>
            {unMatched && (
              <H4>
                <Span>!</Span>The email or the password is not matched
              </H4>
            )}
          </LoginForm>
        </FormDiv>
      </BgImg>
    </LoginDiv>
  );
}

export default Login;
