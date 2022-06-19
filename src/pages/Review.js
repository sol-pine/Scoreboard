import React from "react";
import styled from "styled-components";

function Review() {}
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
export default Review;
