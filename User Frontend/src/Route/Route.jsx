import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/MainPage/Main.jsx";
import SpaList from "../Components/SpaPage/SpaList/SpaList.jsx";
import SpaProfile from "../Components/SpaPage/SpaProfile/SpaProfile.jsx";
import ScrollToTop from '../Components/Common/ScrollToTop/ScrollToTop.jsx'


const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" index exact Component={Home} />
        <Route path="/spalist/:listname" index exact Component={SpaList} />
        <Route path="/spas/:slug" index exact element={<SpaProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
