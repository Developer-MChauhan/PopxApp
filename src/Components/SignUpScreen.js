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
`;

const Heading1 = styled.h1`
  align-self: flex-start;
  margin-left: 20px;
  margin-bottom: -28px;
`;
const Heading2 = styled.h1`
  align-self: flex-start;
  margin-left: 20px;
  margin-bottom: -10px;
`;

const Para = styled.p`
  margin-left: 20px;
`;

const Input = styled.input`
  outline: none;
  border: none;
  background: #eef0eb;
  height: 22px;
  width: 90%;
`;
const Fieldset = styled.fieldset`
  margin: 18px;
  border-radius: 8px;
  height: 30px;
`;
const Legend = styled.legend`
  font-size: 12px;
  color: #8c12e3;
  font-weight: 600;
`;
const asterisk = {
  color: "red",
  marginLeft: "2px",
};

const Bulletbtn1 = {
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  backgroundColor: "blue",
  marginTop: "3px",
  cursor: "pointer",
};
const Bulletbtn2 = {
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  backgroundColor: "#eef0eb",
  marginTop: "3px",
  cursor: "pointer",
};

const spanYesNo = {
  fontSize: "14px",
};
const ButtonDiv = styled.div`
  width: 30%;
  height: 40px;
  margin-left: 20px;
  margin-top: -10px;
  background: #eef0eb;
  display: flex;
  justify-content: space-between;
`;
const CreateAccbtn = styled.button`
  background: blue;
  width: 90%;
  height: 45px;
  border-radius: 7px;
  color: #fff;
  margin-top: 80px;
  margin-left: 15px;
  cursor: pointer;
  border: none;
  font-size: 15px;
  font-weight: 700;
`;

export default function Signup() {
  const navigate = useNavigate();
  const Profile = () => {
    navigate("/Profile");
  };

  return (
    <>
      <Container>
        <SmallContainer>
          <Heading1>Create Your</Heading1>
          <Heading2>Popx Account</Heading2>
          <Fieldset>
            <Legend>
              Full Name<span style={asterisk}>*</span>
            </Legend>
            <Input></Input>
          </Fieldset>

          <Fieldset>
            <Legend>
              Phone number<span style={asterisk}>*</span>
            </Legend>
            <Input></Input>
          </Fieldset>

          <Fieldset>
            <Legend>
              Email address<span style={asterisk}>*</span>
            </Legend>
            <Input></Input>
          </Fieldset>

          <Fieldset>
            <Legend>
              Password<span style={asterisk}>*</span>
            </Legend>
            <Input></Input>
          </Fieldset>

          <Fieldset>
            <Legend>Company name</Legend>
            <Input></Input>
          </Fieldset>

          <Para>Are you an Agency?</Para>
          <ButtonDiv>
            <button type="radio" style={Bulletbtn1}></button>
            <span style={spanYesNo}>Yes</span>
            <button type="radio" style={Bulletbtn2}></button>
            <span style={spanYesNo}>No</span>
            {/* <Bulletbtn  ></Bulletbtn>
        <Bulletbtn ></Bulletbtn> */}
          </ButtonDiv>

          <CreateAccbtn onClick={Profile}>Create Account</CreateAccbtn>
        </SmallContainer>
      </Container>
    </>
  );
}
