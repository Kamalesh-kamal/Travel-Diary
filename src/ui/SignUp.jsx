import Navbar from "./Navbar";
import bgImg from "../images/Bg-Home.jpg";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addItem } from "../features/UserSlice";
import { useState } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const BgImg = styled.div`
  @media (min-width: 320px) {
    background-image: url(${bgImg});
    height: 100svh;
    width: 100%;
    background-size: cover;
    background-position: bottom;
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
    height: 130vh;
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
    height: 50vh;
    /* margin-top: 10rem; */
    width: 100%;
    /* background: #111; */
  }
  @media (min-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10rem;
  }
`;

const SignUpDiv = styled.div`
  padding: 0px;
  margin: 0px;
`;
const SignUpForm = styled.form`
  @media (min-width: 320px) {
    position: absolute;
    top: 15rem;
    border: 2px solid white;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 30%;
    align-items: start;
    justify-content: center;
    gap: 20px;
    padding: 50px 20px;
    z-index: 10;
    box-shadow: rgba(1px, 1px, 1px, 0.5);
    /* backdrop-filter: blur(1px); */
  }
  @media (min-width: 700px) {
    position: absolute;
    top: 9rem;
    border: 1px solid white;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    width: 30rem;
    height: 15rem;
    align-items: center;
    justify-content: center;
    gap: 40px;
    padding: 50px 20px;
    z-index: 10;
    box-shadow: rgba(1px, 1px, 1px, 0.5);
    backdrop-filter: none;
  }
  @media (min-width: 1024px) {
    position: absolute;
    top: 12rem;
    border: 1px solid white;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    width: 50rem;
    height: 25rem;
    align-items: center;
    justify-content: center;
    gap: 40px;
    padding: 50px 20px;
    z-index: 10;
    box-shadow: rgba(1px, 1px, 1px, 0.5);
    backdrop-filter: none;
  }
`;

const InputDiv = styled.div`
  @media (min-width: 320px) {
    /* border: 2px solid #f31c1c; */
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
  @media (min-width: 1024px) {
    display: flex;
    gap: 30px;
    justify-content: center;
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
    /* z-index: 30; */
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
    width: 10rem;
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
  @media (min-width: 1024px) {
    border: 2px solid black;
    height: 1.2rem;
    width: 18rem;
    font-size: 20px;
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
    position: absolute;
    right: 110px;

    /* font-weight: 600; */
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
    padding: 5px;
    border-color: transparent;
    border-radius: 50px;
    width: 10rem;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
    position: absolute;
    left: 12rem;
    bottom: 3rem;
  }
  @media (min-width: 1024px) {
    background: linear-gradient(to top left, #eb9d27, #fadc8f);
    /* font-weight: 600; */
    padding: 5px;
    border-color: transparent;
    border-radius: 50px;
    width: 10rem;
    color: #fff;
    font-size: 25px;
    cursor: pointer;
    position: absolute;
    left: 20rem;
    bottom: 6rem;
  }
`;

const IcnDiv = styled.div`
  @media (min-width: 320px) {
    position: absolute;
    width: 10px;
    height: 10px;
    color: #eb9d27;
    right: 40px;
    top: 11.1rem;
  }
  @media (min-width: 700px) {
    position: absolute;
    width: 10px;
    height: 10px;
    color: #eb9d27;
    right: 3rem;
    top: 13.5rem;
  }
  @media (min-width: 1024px) {
    position: absolute;
    width: 15px;
    height: 15px;
    color: #eb9d27;
    right: 10rem;
    top: 18.4rem;
    font-size: 25px;
  }
`;

const H4 = styled.h4`
  color: #fff;
  @media (min-width: 320px) {
    font-size: 15px;
  }
  @media (min-width: 700px) {
    font-size: 18px;
  }
  @media (min-width: 1024px) {
    font-size: 25px;
  }
`;
const Span = styled.span`
  color: #eb9d27;
  font-size: 15px;
  margin-right: 10px;
  text-decoration: underline;
  @media (min-width: 1024px) {
    font-size: 25px;
  }
  @media (min-width: 700px) {
    font-size: 20px;
  }
  @media (min-width: 1024px) {
    font-size: 25px;
  }
`;

const LogIn = styled.div`
  @media (min-width: 320px) {
    /* border: 2px solid #111;
    display: inline-block; */
    width: 85%;
    height: 50px;
    position: absolute;
    bottom: 0.5rem;
  }
  @media (min-width: 700px) {
    text-align: center;
    width: 85%;
    height: 50px;
    position: absolute;
    bottom: 0px;
  }
  @media (min-width: 1024px) {
    text-align: center;
    width: 85%;
    height: 50px;
    position: absolute;
    bottom: 20px;
  }
`;

function SignUp() {
  const [name, setName] = useState("");
  const [mailId, setMailId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  // useEffect({
  //  ()=>{
  //   setMailId("");
  //   setName("");
  //   setPassword("");
  // }
  // },[])

  function handleAddUser() {
    // e.preventDefault();
    dispatch(addItem({ name, mailId, password }));
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  return (
    <>
      <SignUpDiv>
        <BgImg>
          <Navbar />
          <FormDiv>
            <SignUpForm>
              <InputDiv>
                <Label>Username</Label>
                <Input
                  type="text"
                  placeholder="enter your name"
                  onChange={(e) => setName(e.target.value)}
                />
              </InputDiv>
              <InputDiv>
                <Label>Mailid</Label>
                <Input
                  type="email"
                  placeholder="enter your mail-Id"
                  onChange={(e) => setMailId(e.target.value)}
                />
              </InputDiv>
              <InputDiv>
                <Label>Password</Label>
                <Input
                  type={showPassword ? "txt" : "password"}
                  placeholder="enter your password"
                  onChange={(e) => handlePassword(e)}
                />
                {password && (
                  <IcnDiv onClick={() => setShowPassword((state) => !state)}>
                    {showPassword ? <AiFillEyeInvisible /> : <IoEyeSharp />}
                  </IcnDiv>
                )}
              </InputDiv>
              <div>
                <FormButton onClick={handleAddUser}>Register</FormButton>
              </div>
              <LogIn>
                <H4>
                  already have an account ,{" "}
                  <Link to="/login">
                    <Span>login</Span>
                  </Link>
                </H4>
              </LogIn>
            </SignUpForm>
          </FormDiv>
        </BgImg>
      </SignUpDiv>
    </>
  );
}

export default SignUp;
