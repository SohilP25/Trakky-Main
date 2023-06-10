import { Routes, Route, BrowserRouter } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard.jsx";
import Spa from "./pages/Spa.jsx";
import SpaForm from "./pages/forms/Spa.jsx";
import Therapy from "./pages/Therapy.jsx";
import TherapyForm from "./pages/forms/Therapy";
import Offer from "./pages/Offer.jsx";
import OffersForm from "./pages/forms/Offer";
import Services from "./pages/Services.jsx";
import ServicesForm from "./pages/forms/Services";
import Cities from "./pages/Cities";
import Areas from './pages/Areas'
import Blog from "./pages/Blog.jsx";
import BlogForm from "./pages/forms/BlogForm";
import Faq from "./pages/Faq.jsx";
import Inquiry from "./pages/Inquiry.jsx";
import Signin from "./pages/Signin";


function App() {

  return (
    <BrowserRouter>
      <Sidebar />
      <div className="main__container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/offers" element={<Offer />} />
          <Route path="/add-offer" element={<OffersForm />} />

          <Route path="/spas" element={<Spa />} />
          <Route path="/add-spa" element={<SpaForm />} />

          <Route path="/therapies" element={<Therapy />} />
          <Route path="/add-therapy" element={<TherapyForm />} />

          <Route path="/services" element={<Services />} />
          <Route path="/add-service" element={<ServicesForm />} />

          <Route path="/cities" element={<Cities />} />
          <Route path="/areas" element={<Areas />} />

          <Route path="/blogs" element={<Blog />} />
          <Route path="/add-blog" element={<BlogForm />} />

          <Route path="/inquiries" element={<Inquiry />} />
          <Route path="/faqs" element={<Faq />} />
          <Route path="/signin" element={<Signin />} />

          <Route path="*" element={<Dashboard />} />
          {/* <Route path="/answer-faqs" element={<FaqForm />} />{" "} */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;