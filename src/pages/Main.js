import React from "react";
import styled from "styled-components";
//push
function Main() {
  const dayText = {
    0: "Sun",
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat",
  };

  const days = Object.keys(dayText).map((list, idx) => {
    const today = new Date().getDay();
    const day =
      today + parseInt(list) > 6
        ? today + parseInt(list) - 7
        : today + parseInt(list);
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
                <Day>{dayText[idx]}</Day>
                {Array.from({ length: 5 }, (item, idx) => {
                  return <Circle key={idx} />;
                })}
              </Score>
            );
          })}
        </ScoresContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 400px;
  height: 740px;
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
  margin-top: 50px;
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
  width: 80%;
  display: flex;
  margin: 10px auto;
  justify-content: center;
  align-items: center;
`;
const Day = styled.div`
  font-family: machomodular, sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 20px;
  color: #01fd55;
  margin-top: 7px;
  margin-right: 10px;
  :hover {
    cursor: pointer;
    color: #01fd55;
  }
`;
const Circle = styled.div`
  width: 35px;
  height: 35px;
  background: #037f26;
  border-radius: 35px;
  margin-left: 10px;
  :hover {
    cursor: pointer;
    background: #01fd55;
    transition: 0.5s ease;
  }
`;
export default Main;
