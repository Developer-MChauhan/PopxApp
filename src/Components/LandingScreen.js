import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    165deg,
    rgba(131, 58, 180, 1) 38%,
    rgba(29, 244, 253, 1) 63%,
    rgba(252, 176, 69, 1) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SmallContainer = styled.div`
  width: 25%;
  height: 90vh;
  background: #eef0eb;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
const Heading = styled.h1`
  align-self: flex-start;
  margin-left: 20px;
  margin-bottom: -10px;
`;
const Para = styled.p`
  align-self: flex-start;
  margin-left: 20px;
`;
const CreateAccount = styled.button`
  background: #6724e3;
  width: 90%;
  height: 45px;
  border-radius: 7px;
  color: white;
  margin: 10px;
  cursor: pointer;
  border: none;
  font-size: 16px;
  font-weight: 525;
`;
const AlreadyRegistered = styled.button`
  background: #a691cf;
  width: 90%;
  height: 45px;
  border-radius: 7px;
  color: black;
  margin-bottom: 50px;
  cursor: pointer;
  border: none;
  font-size: 15px;
  font-weight: 700;
`;

export default function Home() {
  const navigate = useNavigate();

  const Signup = () => {
    navigate("/Signup");
  };

  const Login = () => {
    navigate("/Login");
  };

  return (
    <>
      <Container>
        <SmallContainer>
          <Heading>Welcome to Popx</Heading>
          <Para>
            Lorem ipsum dolor sit amet, <br />
            consectetur adipisicing elit.{" "}
          </Para>
          <CreateAccount onClick={Signup}>Create Account</CreateAccount>
          <AlreadyRegistered onClick={Login}>
            Already Registered?Login
          </AlreadyRegistered>
        </SmallContainer>
      </Container>
    </>
  );
}
