import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

function Review() {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Title
          onClick={() => {
            navigate("/");
          }}
        >
          weekly scoreboard
        </Title>
        <Message>
          <span>{params.dayText}</span>'s score?
        </Message>
        <Score>
          {Array.from({ length: 5 }, (item, idx) => {
            return <Circle key={idx} />;
          })}
        </Score>
        <BtnSubmit>Submit</BtnSubmit>
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 400px;
  height: 850px;
  border: 3px solid #001c06;
  border-radius: 18px;
  margin: 100px auto;
  background-color: #001c06;
`;
const Title = styled.div`
  font-family: macho, sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 60px;
  color: #01fd55;
  line-height: 90%;
  padding-top: 50px;
  :hover {
    cursor: pointer;
    color: #8df4ff;
    transition: 0.5s ease;
  }
`;
const Message = styled.div`
  font-family: machomodular, sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 28px;
  color: #01fd55;
  margin-top: 100px;
  line-height: 30%;
  span {
    font-weight: bold;
  }
`;
const Score = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px auto;
`;
const Circle = styled.div`
  width: 30px;
  height: 30px;
  background: #037f26;
  border-radius: 35px;
  margin-left: 10px;
  :hover {
    cursor: pointer;
    background: #01fd55;
    transition: 0.5s ease;
  }
`;
const BtnSubmit = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
  border: 3px solid #01fd55;
  border-radius: 50px;
  font-family: machomodular, sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 20px;
  color: #01fd55;
  padding-top: 6px;
  :hover {
    border: 3px solid #01fd55;
    background: #01fd55;
    color: #001c06;
    transition: 0.3s ease;
    cursor: pointer;
  }
`;
export default Review;
