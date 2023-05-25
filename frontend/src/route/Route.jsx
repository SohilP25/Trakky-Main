import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/MainPageComponents/Main.jsx";
import Spa from "../Components/SpaPage/Spa.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index exact Component={Home} />
        <Route path="/spa" exact Component={Spa} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
