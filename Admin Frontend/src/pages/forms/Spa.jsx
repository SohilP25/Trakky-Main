import React, { useState } from "react";
import "./forms.css";

const SpaForm = () => {
  const [spaname, setSpaName] = useState("");
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [mobileNumber, setMobileNumber] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [images, setImages] = useState(null);
  const [openTime, setOpenTime] = useState("");
  const [closeTime, setCloseTime] = useState("");
  const [facilities, setFacilities] = useState([]);
  const [slug, setSlug] = useState("");
  const [priority, setPriority] = useState(null);
  const [aboutUs, setAboutUs] = useState("");
  const [open, setOpen] = useState(false);
  const [verified, setVerified] = useState(false);
  const [topRated, setTopRated] = useState(false);
  const [premium, setPremium] = useState(false);
  const [luxurious, setLuxurious] = useState(false);
  const [services, setServices] = useState([]);
  const [whatsAppNumber, setWhatsAppNumber] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const location = {
    type: "Point",
    coordinates: [longitude, latitude],
  };


  const handleFileChange = (event) => {
    setMainImage(event.target.files[0]);
  };
  // Post Request Starts
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!Image) {
      console.log("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("name", spaname);
    formData.append("address", address);
    formData.append("landmark", landmark);
    formData.append("mobileNumber", mobileNumber);
    formData.append("openTime", openTime);
    formData.append("closeTime", closeTime);
    formData.append("facilities", facilities);
    formData.append("slug", slug);
    formData.append("priority", priority);
    formData.append("aboutUs", aboutUs);
    formData.append("open", open);
    formData.append("verified", verified);
    formData.append("topRated", topRated);
    formData.append("premium", premium);
    formData.append("luxurious", luxurious);
    formData.append("services", services);
    formData.append("location", location);
    formData.append("mainImages", mainImage);
    formData.append("images", images);
    formData.append("whatsAppNumber", whatsAppNumber);

    try {
      await fetch("http://localhost:8080/api/v1/Offer", {
        method: "POST",
        body: formData,
      });

      alert("Offer uploaded successfully");
    } catch (error) {
      console.error("Error uploading image", error);
    }
  };
  // Post Request Ends

  return (
    <div className="main-container">
      <div className="container">
        <form method="post">
          <h1>Spa</h1>
          <div className="form-group">
            <label htmlFor="name">Name of Spa *</label>
            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name"
              required
              autoComplete="off"
              onChange={(e) => setSpaName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              className="form-control"
              type="number"
              minLength={10}
              maxLength={10}
              name="phone"
              id="phone"
              placeholder="Enter Phone Number"
              required
              autoComplete="off"
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="booknow">WhatsApp Number For Booking *</label>
            <input
              className="form-control"
              type="number"
              minLength={10}
              maxLength={10}
              name="booknow"
              id="booknow"
              placeholder="Enter WhatsApp Number"
              required
              autoComplete="off"
              onChange={(e) => setWhatsAppNumber(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="directionlink">Google Maps Link *</label>
            <input
              className="form-control"
              type="text"
              name="directionlink"
              id="directionlink"
              contentEditable={false}
              placeholder="Enter Google Maps Link"
              required
              autoComplete="off"
              onChange={(e) => setSpaName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="directionlink">Latitude *</label>
            <input
              className="form-control"
              type="text"
              name="latitude"
              id="directionlink"
              contentEditable={false}
              placeholder="Enter Latitude"
              required
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <label htmlFor="directionlink">Longitude *</label>
            <input
              className="form-control"
              type="text"
              name="directionlink"
              id="directionlink"
              contentEditable={false}
              placeholder="Enter Longitude"
              required
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label htmlFor="timings">Timings *</label>
            <div className="time-container">
              <div className="from-time">
                <label htmlFor="fromTime">From</label>
                <input
                  className="form-control timings"
                  type="time"
                  name="timings"
                  id="timings"
                  placeholder="Enter Timings"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="to-time">
                <label htmlFor="toTime">To</label>
                <input
                  className="form-control timings"
                  type="time"
                  name="timings"
                  id="timings"
                  placeholder="Enter Timings"
                  required
                  autoComplete="off"
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="address">Address *</label>
            <input
              className="form-control"
              type="text"
              name="address"
              id="address"
              placeholder="Enter address"
              required
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <label htmlFor="landmark">Landmark *</label>
            <input
              className="form-control"
              type="text"
              name="landmark"
              id="landmark"
              placeholder="Enter Landmark"
              required
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <label htmlFor="priority">Priority *</label>
            <input
              className="form-control"
              type="number"
              name="priority"
              id="priority"
              placeholder="Enter Priority"
              required
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <label htmlFor="area">Area *</label>
            <input
              className="form-control"
              type="dropdown"
              name="area"
              list="areas"
              id="area"
              placeholder="Select Area"
              required
              autoComplete="off"
            />

            <datalist id="areas">
              <option value="Area 1" />
              <option value="Area 2" />
              <option value="Area 3" />
              <option value="Area 4" />
              <option value="Area 5" />
              <option value="Area 6" />
            </datalist>
          </div>

          <div className="form-group">
            <label htmlFor="city">City *</label>
            <input
              className="form-control"
              type="dropdown"
              name="city"
              list="cities"
              id="city"
              placeholder="Select City"
              required
              autoComplete="off"
            />

            <datalist id="cities">
              <option value="City 1" />
              <option value="City 2" />
              <option value="City 3" />
              <option value="City 4" />
              <option value="City 5" />
              <option value="City 6" />
            </datalist>
          </div>

          <div className="form-group">
            <label htmlFor="slug">Slug *</label>
            <input
              className="form-control"
              type="text"
              name="text"
              id="slug"
              placeholder="Enter slug"
              required
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Main Image *</label>
            <input
              className="form-control"
              style={{ padding: "0.5rem" }}
              type="file"
              name="image"
              id="mainimage"
              onChange={handleFileChange}
              required
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Image *</label>
            <input
              className="form-control"
              style={{ padding: "0.5rem" }}
              type="file"
              name="image"
              id="multipleimage"
              onChange={handleFileChange}
              multiple
              required
              autoComplete="off"
            />
          </div>

          <button className="submit-btn" onSubmit={handleSubmit} type="submit">
            add spa
          </button>
        </form>
      </div>
    </div>
  );
};

export default SpaForm;
