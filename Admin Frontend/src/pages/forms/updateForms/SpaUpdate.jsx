import React, { useEffect, useState } from "react";
import "../forms.css";
import axios from "axios";
const SpaUpdate = (props) => {
  const [spaname, setSpaName] = useState(props.data.name);
  const [address, setAddress] = useState(props.data.address);
  const [landmark, setLandmark] = useState(props.data.landmark);
  const [mobileNumber, setMobileNumber] = useState(props.data.mobileNumber);
  const [Image, setImage] = useState(props.data.imageUrl);
  const [openTime, setOpenTime] = useState(props.data.openTime);
  const [closeTime, setCloseTime] = useState(props.data.closeTime);
  const [slug, setSlug] = useState(props.data.slug);
  const [priority, setPriority] = useState(props.data.priority);
  const [bookingNumber, setBookingNumber] = useState(props.data.bookingNumber);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [GMapLink, setGMapLink] = useState(props.data.gmapLink);
  const [area, setArea] = useState(props.data.Area);
  const [city, setCity] = useState(props.data.City);

  // For Switches
  const [luxurious, setLuxurious] = useState(props.data.luxurious);
  const [topRated, setTopRated] = useState(props.data.topRated);
  const [open, setOpen] = useState(props.data.open);
  const [premium, setPremium] = useState(props.data.premium);
  const [verified, setVerified] = useState(props.data.verified);

  // Patch Request Starts
  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
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

  
  // PUT Request Starts
  const PatchRequest = (id) => {
    // const formData = new FormData();
    // formData.append("name", spaname);
    // formData.append("address", address);
    // formData.append("landmark", landmark);
    // formData.append("mobileNumber", mobileNumber);
    // formData.append("openTime", openTime);
    // formData.append("closeTime", closeTime);
    // formData.append("slug", slug);
    // formData.append("priority", priority);
    // formData.append("bookingNumber", bookingNumber);
    // formData.append("gmapLink", GMapLink);
    // formData.append("Area", area);
    // formData.append("City", city);
    axios
      .put(`http://localhost:8080/api/v1/spas/${id}`, {
        name: spaname,
        address: address,
        landmark: landmark,
        mobileNumber: mobileNumber,
        bookingNumber: bookingNumber,
        openTime: openTime,
        closeTime: closeTime,
        slug: slug,
        priority: priority,
        gmapLink: GMapLink,
        Area: area,
        City: city,
      })
      .then((res) => {
        console.log(res.data);
        alert("updated data");
      })
      .catch((error) => {
        alert(JSON.stringify(error.response));
      });
      // console.log(luxurious);
  };

  return (
    <div className="main-container">
      <div className="container">
        <form>
          <h1>Spa</h1>
          <div className="form-group">
            <label htmlhtmlFor="name">Name of Spa *</label>
            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name"
              autoComplete="off"
              value={spaname}
              onChange={(e) => {
                setSpaName(e.target.value);
              }}
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
              value={mobileNumber}
              placeholder="Enter Phone Number"
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
              value={bookingNumber}
              placeholder="Enter WhatsApp Number"
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
              value={GMapLink}
              contentEditable={false}
              placeholder="Enter Google Maps Link"
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
                  value={openTime}
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
                  value={closeTime}
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
              value={address}
              placeholder="Enter address"
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
              value={landmark}
              placeholder="Enter Landmark"
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
              value={priority}
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
              value={city}
              id="city"
              placeholder="Select City"
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
              <option value={city}>--select--</option>
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
              value={area}
              placeholder="Select Area"
              autoComplete="off"
              onChange={(e) => setArea(e.target.value)}
            />

            <datalist
              id="areas"
              onChange={(e) => {
                setArea(e.target.value);
              }}
            >
              <option value={area}>--select--</option>
              {areaList.map((area) => {
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
              value={slug}
              placeholder="Enter slug"
              autoComplete="off"
              onChange={(e) => setSlug(e.target.value)}
            />
          </div>

          <button
            className="submit-btn"
            type="submit"
            onClick={() => PatchRequest(props.data._id)}
          >
            add spa
          </button>
        </form>
      </div>
    </div>
  );
};
export default SpaUpdate;