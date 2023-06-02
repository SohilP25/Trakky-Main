import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/MainPage/Main.jsx";
import SpaNearMeList from "../Components/SpaNearMePage/SpaNearMeList.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index exact Component={Home} />
        <Route path="/SpaNearMeList" index exact Component={SpaNearMeList} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
