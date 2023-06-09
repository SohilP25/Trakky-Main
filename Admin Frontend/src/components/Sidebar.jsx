import { useState } from "react";
// import { ProSidebarProvider, Menu, MenuItem } from "react-pro-sidebar";
// import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
// import "react-sidebar/dist/css/styles.css";
// import { tokens } from "../../theme";

// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
// import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
// import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

// My imports
import "./Sidebar.css";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import trakkyLogo from "../assets/Trakky logo white.png";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      {isActive ? (
        <div className="sidebar__container">
          <div className="sidebar">
            <div className="top__section">
              <div className="bar__icon">
                <AiOutlineMenu
                  onClick={() => setIsActive(!isActive)}
                  style={{
                    cursor: "pointer",
                    color: "white",
                  }}
                />
              </div>
              <div className="trakky__logo">
                <img src={trakkyLogo} alt="" />
              </div>
            </div>

            <div className="sidebar_link__container">
              <div className="sidebar__topic_box">
                <p className="sidebar_topic_title">Dashboard</p>
                <div className="sidebar_links">
                  <NavLink to={"/"}>Dashboard</NavLink>
                </div>
              </div>

              <div className="sidebar__topic_box">
                <p className="sidebar_topic_title">Spa</p>
                <div className="sidebar_links">
                  <NavLink to={"/Spas"}>
                    <AiOutlineUnorderedList />
                    &nbsp;&nbsp; List Spa
                  </NavLink>
                  <NavLink to={"/add-spa"}>
                    <GrAdd />
                    &nbsp;&nbsp; Add Spa
                  </NavLink>
                </div>
              </div>

              <div className="sidebar__topic_box">
                <p className="sidebar_topic_title">Therapies</p>
                <div className="sidebar_links">
                  <NavLink to={"/Therapies"}>
                    <AiOutlineUnorderedList />
                    &nbsp;&nbsp; List Therapies
                  </NavLink>
                  <NavLink to={"/add-therapy"}>
                    <GrAdd />
                    &nbsp;&nbsp; Add Therapy
                  </NavLink>
                </div>
              </div>

              <div className="sidebar__topic_box">
                <p className="sidebar_topic_title">Offers</p>
                <div className="sidebar_links">
                  <NavLink to={"/offers"}>
                    <AiOutlineUnorderedList />
                    &nbsp;&nbsp; List Offers
                  </NavLink>
                  <NavLink to={"/add-offer"}>
                    <GrAdd />
                    &nbsp;&nbsp; Add Offer
                  </NavLink>
                </div>
              </div>

              <div className="sidebar__topic_box">
                <p className="sidebar_topic_title">Services</p>
                <div className="sidebar_links">
                  <NavLink to={"/services"}>
                    <AiOutlineUnorderedList />
                    &nbsp;&nbsp; List Services
                  </NavLink>
                  <NavLink to={"/add-service"}>
                    <GrAdd />
                    &nbsp;&nbsp; Add Service
                  </NavLink>
                </div>
              </div>

              <div className="sidebar__topic_box">
                <p className="sidebar_topic_title">Blogs</p>
                <div className="sidebar_links">
                  <NavLink to={"/blogs"}>
                    <AiOutlineUnorderedList />
                    &nbsp;&nbsp; List Blogs
                  </NavLink>
                  <NavLink to={"/add-blog"}>
                    <GrAdd />
                    &nbsp;&nbsp; Add Blog
                  </NavLink>
                </div>
              </div>

              <div className="sidebar__topic_box">
                <p className="sidebar_topic_title">FAQ's</p>
                <div className="sidebar_links">
                  <NavLink to={"/faqs"}>
                    <AiOutlineUnorderedList />
                    &nbsp;&nbsp; List FAQs
                  </NavLink>
                  {/* <NavLink to={'/answer-faqs'}><GrAdd />&nbsp;&nbsp; Answer FAQs </NavLink> */}
                </div>
              </div>

              <div className="sidebar__topic_box">
                <p className="sidebar_topic_title">Inquiry</p>
                <div className="sidebar_links">
                  <NavLink to={"/Inquiries"}>
                    <AiOutlineUnorderedList />
                    &nbsp;&nbsp; List Inquiry
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="sidebar__container"
          style={{
            width: "2rem",
            minWidth: "unset",
          }}
        >
          <div
            className="bar__icon"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AiOutlineMenu
              onClick={() => setIsActive(!isActive)}
              style={{
                cursor: "pointer",
                color: "white",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
