// import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Topbar from "./scenes/global/Topbar";
import Sidebar from "./components/Sidebar";
// import Dashboard from "./scenes/dashboard";
// import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { ColorModeContext, useMode } from "./theme";
// import Calendar from "./scenes/calendar/calendar";

import Dashboard from "./pages/Dashboard.jsx";
import Blog from "./pages/Blog.jsx";
import Inquiry from "./pages/Inquiry.jsx";
import Faq from "./pages/Faq.jsx";
import Offer from "./pages/Offer.jsx";
import Spa from "./pages/Spa.jsx";
import SpaForm from "./pages/forms/Spa.jsx";
import Therapy from "./pages/Therapy.jsx";
import Services from "./pages/Services.jsx";
import TherapyForm from "./pages/forms/Therapy";
import OffersForm from "./pages/forms/Offer";
import ServicesForm from "./pages/forms/Services";
import Navbar from "./components/Navbar";
import BlogForm from "./pages/forms/BlogForm";
import Signin from "./pages/Signin";
import Register from "./pages/Register";

function App() {
  // const [theme, colorMode] = useMode();
  // const [isSidebar, setIsSidebar] = useState(true);

  return (
    <BrowserRouter>
      {/* <Signin /> */}
      <Sidebar />
      {/* <Topbar /> */}
      <div className="main__container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/add-offer" element={<OffersForm />} />
          <Route path="/spas" element={<Spa />} />
          <Route path="/add-spa" element={<SpaForm />} />
          <Route path="/therapies" element={<Therapy />} />
          <Route path="/add-therapy" element={<TherapyForm />} />
          <Route path="/services" element={<Services />} />
          <Route path="/add-service" element={<ServicesForm />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/add-blog" element={<BlogForm />} />
          <Route path="/Inquiries" element={<Inquiry />} />
          <Route path="/faqs" element={<Faq />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Dashboard />} />
          {/* <Route path="/answer-faqs" element={<FaqForm />} />{" "} */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;