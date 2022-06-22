import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Main() {
  const navigate = useNavigate();
  // 요일 딕셔너리
  const dayText = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };
  // 0~6까지의 요일 중 오늘 요일을 제일 상단에 보여주기
  const days = Object.keys(dayText).map((list, idx) => {
    const today = new Date().getDay();
    const day =
      today + parseInt(list) > 6
        ? today + parseInt(list) - 7
        : today + parseInt(list);
    return dayText[day];
  });

  // 합계
  const scoreSum = 0;
  const scoreWeek = days.map((list, idx) => {
    return null;
  });

  return (
    <>
      <Container>
        <Title>weekly scoreboard</Title>
        <AvgScore>
          Average Score <p>0.0</p>
        </AvgScore>
        <ScoresContainer>
          {days.map((list, idx) => {
            return (
              <Score key={idx}>
                <Day
                  onClick={() => {
                    navigate(`/review/${dayText[idx]}`);
                  }}
                >
                  {days[idx].substr(0, 3)}
                </Day>
                <CircleWrapper>
                  {Array.from({ length: 5 }, (item, idx) => {
                    return <Circle key={idx} />;
                  })}
                </CircleWrapper>
              </Score>
            );
          })}
        </ScoresContainer>
        <BtnReset>Reset</BtnReset>
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
`;
const AvgScore = styled.div`
  font-family: machomodular, sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 28px;
  color: #01fd55;
  margin-top: 50px;
  line-height: 30%;
  p {
    font-weight: bold;
    font-size: 40px;
  }
`;
const ScoresContainer = styled.div`
  margin-top: 50px;
`;
const Score = styled.div`
  width: 65%;
  display: flex;
  margin: 55px auto;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Day = styled.div`
  font-family: machomodular, sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 25px;
  color: #01fd55;
  margin-top: 7px;
  margin-right: 10px;
  position: absolute;
  left: 0;
  :hover {
    cursor: pointer;
    color: #8df4ff;
    font-family: machomodular, sans-serif;
    font-weight: 700;
    font-style: normal;
  }
`;
const CircleWrapper = styled.div`
  position: absolute;
  right: 0;
  display: flex;
`;
const Circle = styled.div`
  width: 30px;
  height: 30px;
  background: #037f26;
  border-radius: 35px;
  margin-left: 10px;
`;
const BtnReset = styled.div`
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
export default Main;
