import React, { useState } from "react";
import "./forms.css";

const ServicesForm = () => {
  const [Select_Spa, setSelect_Spa] = useState("")
  const [serviceName, setServiceName] = useState("")
  const [servicetime, setServicetime] = useState(null)
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [discount, setDiscount] = useState(null)
  const [therapy, setTherapy] = useState("")


  // Post Request Starts
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!Image) {
      console.log("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("Name", serviceName);


    try {
      await fetch("http://localhost:8080/api/v1/Service", {
        method: "POST",
        body: formData,
      });

      alert("Service uploaded successfully");
    } catch (error) {
      console.error("Error uploading image", error);
    }
  };
  // Post Request Ends

  return (
    <>
      <div className="main-container">
        <div className="container">
          <form method="post">
            <h1>Services</h1>

            <div className="form-group">
              <label htmlFor="spa">Select Spa *</label>
              <input
                className="form-control"
                type="dropdown"
                name="name"
                list="spa"
                id="name"
                placeholder="Select Spa"
                autoComplete="off"
              />
              <datalist id="spa">
                <option value="Spa 1" />
                <option value="Spa 2" />
                <option value="Spa 3" />
                <option value="Spa 34" />
                <option value="Spa 5" />
                <option value="Spa 6" />
              </datalist>
            </div>

            <div className="form-group">
              <label htmlFor="name">Service Name *</label>
              <input
                className="form-control"
                type="text"
                name="text"
                id="service"
                placeholder="Enter Service Name"
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">Service Time *</label>
              <input
                className="form-control"
                type="dropdown"
                list="servicetime"
                name="text"
                id="time"
                placeholder="Select Service time"
                required
                autoComplete="off"
              />
              <datalist id="servicetime">
                <option value="30 min" />
                <option value="45 min" />
                <option value="60 min" />
                <option value="90 min" />
                <option value="120 min" />
                <option value="180 min" />
              </datalist>
            </div>

            <div className="form-group">
              <label htmlFor="name">Description *</label>
              <input
                className="form-control"
                type="text"
                name="text"
                id="description"
                placeholder="Enter Description"
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price *</label>
              <input
                className="form-control"
                type="text"
                name="text"
                id="text"
                placeholder="Enter Price"
                required
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Disount *</label>
              <input
                className="form-control"
                type="text"
                name="discount"
                id="discount"
                placeholder="Enter Discount"
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              <label htmlFor="therapies">Therapies (Category) *</label>
              <input
                className="form-control"
                type="dropdown"
                name="therapy"
                list="therapies"
                id="therapy"
                placeholder="Select Therapy"
                required
                autoComplete="off"
              />
              <datalist id="therapies">
                <option value="therapy 1" />
                <option value="therapy 2" />
                <option value="therapy 3" />
                <option value="therapy 34" />
                <option value="therapy 5" />
                <option value="therapy 6" />
              </datalist>
            </div>

            <button className="submit-btn" type="submit">
              Add Service
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ServicesForm;
