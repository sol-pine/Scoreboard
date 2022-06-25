import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../shared/firebase";

function Review() {
  const params = useParams();
  const navigate = useNavigate();
  const [score, setScore] = useState(0);

  // middleware
  // 입력된 score를 요일별로 db에 덮어쓰기
  async function addScore() {
    const scoreRef = doc(db, "scores", `${params.days}`);
    setDoc(scoreRef, { score: score }, { merge: true });
    console.log("ok!");
    alert(`your score is now saved!`);
    navigate("/");
  }

  // useState의 시간차가 생겨 잡아주기 위해 두번째 파라미터에 score 넣어줌
  useEffect(() => {
    console.log(score);
  }, [score]);

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
          {/* 요일을 파라미터로 가져와서 보여주기 */}
          <span>{params.days}</span>'s score?
        </Message>
        <Score>
          {Array.from({ length: 5 }, (item, idx) => {
            return (
              <Circle
                key={idx}
                onClick={() => {
                  setScore(idx + 1);
                }}
                style={{
                  backgroundColor: score < idx + 1 ? "#037f26" : "#01fd55",
                }}
              />
            );
          })}
        </Score>
        <BtnSubmit onClick={addScore}>Submit</BtnSubmit>
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
  border-radius: 35px;
  margin-left: 10px;
  transition: 0.2s ease;
  cursor: pointer;
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
