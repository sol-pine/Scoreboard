// ScoreBoard
// personal practice
// 수정일자: 22/6/26
import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Review from "./pages/Review";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/review/:days" element={<Review />} />
      </Routes>
    </div>
  );
}

export default App;
