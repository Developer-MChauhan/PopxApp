import React from "react";
import styled from "styled-components";
import myimage2 from "../Assets/myimage2.jpg";
import camera from "../Assets/camera.png";
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SmallContainer = styled.div`
  width: 25%;
  height: 80vh;
  background: #eef0eb;
`;
const HeadingDiv = styled.div`
  background: #fff;
  width: 25%;
  height: 10vh;
  margin-top: 0px;
`;
const Heading = styled.h2`
  margin-left: 10px;
`;
const ProfileContainer = styled.div`
  height: 40%;
  width: 100%;
  background: #eef0eb;
`;
const ImageheadingContainer = styled.div`
  height: 53%;
  width: 100%;
  background: #eef0eb;
  display: flex;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 40%;
  background: #eef0eb;
  position: relative;
`;

const HeadingContainer = styled.div`
  height: 100%;
  width: 60%;
  background: #eef0eb;
`;
const Image = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`;

export default class Profile extends React.Component {
  render() {
    return (
      <>
        <Container>
          <HeadingDiv>
            <Heading>Account Settings</Heading>
          </HeadingDiv>

          <SmallContainer>
            <ProfileContainer>
              <ImageheadingContainer>
                <ImageContainer>
                  <Image src={myimage2} alt="Image" />
                  <img
                    src={camera}
                    alt="Image"
                    style={{
                      width: "25px",
                      height: "25px",
                      position: "absolute",
                      marginLeft: "65px",
                      marginTop: "65px",
                      cursor: "pointer",
                    }}
                  />
                </ImageContainer>
                <HeadingContainer>
                  <h4 style={{ marginBottom: "-19px" }}>Mohit Chauhan</h4>
                  <p style={{ marginTop: "20px" }}>xyz@gmail.com</p>
                </HeadingContainer>
              </ImageheadingContainer>
              <div>
                <p style={{ marginLeft: "15px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eligendi non quis exercitationem culpa nesciunt nihil aut
                  nostrum explicabo
                </p>
              </div>
            </ProfileContainer>
          </SmallContainer>
        </Container>
      </>
    );
  }
}
