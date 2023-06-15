import React, { useEffect, useState } from "react";
import "./forms.css";
import axios from "axios";

const SpaForm = () => {
  const [spaname, setSpaName] = useState("");
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [mobileNumber, setMobileNumber] = useState(null);
  const [Image, setImage] = useState(null);
  const [openTime, setOpenTime] = useState("");
  const [closeTime, setCloseTime] = useState("");
  const [slug, setSlug] = useState("");
  const [priority, setPriority] = useState(null);
  const [bookingNumber, setBookingNumber] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [GMapLink, setGMapLink] = useState(null);
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };
  // let facilities = [];
  // let aboutUs = "";
  // let open = false;
  // let verified = false;
  // let topRated = false;
  // let premium = false;
  // let luxurious = false;
  // let services = [];
  // Post Request Starts
  const handleSubmit = async (event) => {
    event.preventDefault();

    const location = {
      type: "Point",
      coordinates: [longitude, latitude],
    };

    // let data = {
    //   name: spaname,
    //   address: address,
    //   landmark: landmark,
    //   mobileNumber: mobileNumber,
    //   bookingNumber: bookingNumber,
    //   gmapLink: GMapLink,
    //   imageUrl: Image,
    //   location: location,
    //   openTime: openTime,
    //   closeTime: closeTime,
    //   facilities: facilities,
    //   slug: slug,
    //   priority: priority,
    //   aboutUs: aboutUs,
    //   open: open,
    //   verified: verified,
    //   topRated: topRated,
    //   premium: premium,
    //   luxurious: luxurious,
    //   services: services,
    //   Area: area,
    //   City: city,
    // };

    if (!Image) {
      console.log("Please select a file");
      return;
    }
    const formData = new FormData();
    formData.append("name", spaname);
    formData.append("address", address);
    formData.append("landmark", landmark);
    formData.append("mobileNumber", mobileNumber);
    formData.append("bookingNumber", bookingNumber);
    formData.append("gmapLink", GMapLink);
    formData.append("imageUrl", Image);
    formData.append("location", location);
    formData.append("openTime", openTime);
    formData.append("closeTime", closeTime);
    formData.append("slug", slug);
    formData.append("priority", priority);
    formData.append("Area", area);
    formData.append("City", city);

    try {
      // console.log(formData);
      await fetch("http://localhost:8080/api/v1/spas", {
        method: "POST",
        body: formData,
      });

      alert("spas uploaded successfully");
    } catch (error) {
      console.error("Error uploading image", error);
    }
  };

  const [areaList, setAreaList] = useState([{}]);
  // Getting city list
  const [cityList, setCityList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/cities", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((data) => setCityList(data))
      .catch((err) => console.log(err));
  }, []);

  const cityData = cityList.map((data) => data.name);
  const [cityId, setCityId] = useState([]);

  return (
    <div className="main-container">
      <div className="container">
        <form method="post" onSubmit={handleSubmit}>
          <h1>Spa</h1>
          <div className="form-group">
            <label htmlhtmlFor="name">Name of Spa *</label>
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
            <label htmlhtmlFor="phone">Phone Number *</label>
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
            <label htmlhtmlFor="booknow">WhatsApp Number For Booking *</label>
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
              onChange={(e) => setBookingNumber(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlhtmlFor="directionlink">Google Maps Link *</label>
            <input
              className="form-control"
              type="text"
              name="directionlink"
              id="directionlink"
              contentEditable={false}
              placeholder="Enter Google Maps Link"
              required
              autoComplete="off"
              onChange={(e) => setGMapLink(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlhtmlFor="directionlink">Latitude *</label>
            <input
              className="form-control"
              type="text"
              name="latitude"
              id="latitude"
              contentEditable={false}
              placeholder="Enter Latitude"
              required
              autoComplete="off"
              onChange={(e) => setLatitude(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlhtmlFor="directionlink">Longitude *</label>
            <input
              className="form-control"
              type="text"
              name="longitude"
              id="longitude"
              contentEditable={false}
              placeholder="Enter Longitude"
              required
              autoComplete="off"
              onChange={(e) => setLongitude(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlhtmlFor="timings">Timings *</label>
            <div className="time-container">
              <div className="from-time">
                <label htmlhtmlFor="fromTime">From</label>
                <input
                  className="form-control timings"
                  type="time"
                  name="timings"
                  id="timings"
                  placeholder="Enter Timings"
                  required
                  autoComplete="off"
                  onChange={(e) => setOpenTime(e.target.value)}
                />
              </div>
              <div className="to-time">
                <label htmlhtmlFor="toTime">To</label>
                <input
                  className="form-control timings"
                  type="time"
                  name="timings"
                  id="timings"
                  placeholder="Enter Timings"
                  required
                  autoComplete="off"
                  onChange={(e) => setCloseTime(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlhtmlFor="address">Address *</label>
            <input
              className="form-control"
              type="text"
              name="address"
              id="address"
              placeholder="Enter address"
              required
              autoComplete="off"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlhtmlFor="landmark">Landmark *</label>
            <input
              className="form-control"
              type="text"
              name="landmark"
              id="landmark"
              placeholder="Enter Landmark"
              required
              autoComplete="off"
              onChange={(e) => setLandmark(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlhtmlFor="priority">Priority *</label>
            <input
              className="form-control"
              type="number"
              name="priority"
              id="priority"
              placeholder="Enter Priority"
              required
              autoComplete="off"
              onChange={(e) => setPriority(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlhtmlFor="city">City *</label>
            <input
              className="form-control"
              type="dropdown"
              name="city"
              list="cities"
              id="city"
              placeholder="Select City"
              required
              autoComplete="off"
              onChange={(e) => {
                const city = e.target.value;
                setCity(city);

                // Find the selected city object from the cities list
                const selectedCityObj = cityList.find((c) => c.name === city);

                // Set the areas for the selected city
                // setCityId(selectedCityObj.areas);

                console.log(city, cityId);

                fetch(
                  `http://localhost:8080/api/v1/cities/${selectedCityObj._id}/areas`,
                  {
                    method: "GET",
                    header: { "Content-Type": "application/json" },
                  }
                )
                  .then((res) => res.json())
                  .then((data) => setAreaList(data))
                  .catch((err) => console.log(err));
              }}
            />

            <datalist id="cities">
              <option value="">--select--</option>
              {cityData.map((city, index) => {
                return (
                  <option key={index} value={city}>
                    {city}
                  </option>
                );
              })}
            </datalist>
          </div>

          <div className="form-group">
            <label htmlhtmlFor="area">Area *</label>
            <input
              className="form-control"
              type="dropdown"
              name="area"
              list="areas"
              id="area"
              placeholder="Select Area"
              // required
              autoComplete="off"
              onChange={(e) => setArea(e.target.value)}
            />

            <datalist
              id="areas"
              onChange={(e) => {
                setArea(e.target.value);
              }}
            >
              <option value="">--select--</option>
              {areaList.map((area, index) => {
                return (
                  <>
                    <option value={area.name}>{area.name}</option>
                  </>
                );
              })}
            </datalist>
          </div>

          <div className="form-group">
            <label htmlhtmlFor="slug">Slug *</label>
            <input
              className="form-control"
              type="text"
              name="text"
              id="slug"
              placeholder="Enter slug"
              required
              autoComplete="off"
              onChange={(e) => setSlug(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlhtmlFor="image">Main Image *</label>
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

          {/* <div className="form-group">
            <label htmlhtmlFor="image">Image *</label>
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
          </div> */}

          <button className="submit-btn" onSubmit={handleSubmit} type="submit">
            add spa
          </button>
        </form>
      </div>
    </div>
  );
};

export default SpaForm;
