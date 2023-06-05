import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/MainPage/Main.jsx";
import SpaList from "../Components/SpaPage/SpaList/SpaList.jsx";
import SpaProfile from "../Components/SpaPage/SpaProfile/SpaProfile.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index exact Component={Home} />
        <Route path="/spa-list" index exact Component={SpaList} />
        <Route path="/spa-profile" index exact Component={SpaProfile} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
