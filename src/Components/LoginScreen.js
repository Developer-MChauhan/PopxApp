import React from "react";
import styled from "styled-components";

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

const LoginAccBtn = styled.button`
  background: #bcbbbd;
  width: 90%;
  height: 45px;
  border-radius: 7px;
  color: #fff;
  margin-top: -3px;
  margin-left: 15px;
  cursor: pointer;
  border: none;
  font-size: 15px;
  font-weight: 700;
`;
const Para = styled.p`
  align-self: flex-start;
  margin-left: 20px;
`;

export default class Login extends React.Component {
  render() {
    return (
      <>
        <Container>
          <SmallContainer>
            <Heading1>Signin to your</Heading1>
            <Heading2>Popx Account</Heading2>
            <Para>
              Lorem ipsum dolor sit amet, <br />
              consectetur adipisicing elit.{" "}
            </Para>

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

            <LoginAccBtn>Login</LoginAccBtn>
          </SmallContainer>
        </Container>
      </>
    );
  }
}
