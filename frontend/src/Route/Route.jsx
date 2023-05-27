import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/MainPage/Main.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index exact Component={Home} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
