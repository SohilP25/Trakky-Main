import React, { useEffect, useState } from "react";
import "./forms.css";

const ServicesForm = () => {
  const [selectSpa, setSelectSpa] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [serviceTime, setServiceTime] = useState(null);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState(null);
  const [therapy, setTherapy] = useState("");

  // Get therapies
  const [therapyList, setTherapyList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/therapy", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setTherapyList(data.data))
      .catch((err) => console.log(err));
  }, []);
  const therapyName = therapyList.map((data) => data.Name);

  // Post Request Starts
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!Image) {
      console.log("Please select a file");
      return;
    }

    // const formData = new FormData();
    // formData.append("select_spa", selectSpa);
    // formData.append("service_name", serviceName);
    // formData.append("service_time", serviceTime);
    // formData.append("description", description);
    // formData.append("price", price);
    // formData.append("discount", discount);
    // formData.append("therapies", therapy);

    let data =
      // select_spa: selectSpa,
      // sevice_name: serviceName,
      // service_time: serviceTime,
      // description: description,
      // price: price,
      // discount: discount,
      // therapies: therapy

      {
        select_spa: selectSpa,
        service_name: serviceName,
        service_time: serviceTime,
        description: description,
        price: price,
        discount: discount,
        therapies: therapy,
      };
    try {
      console.log(data);
      await fetch("http://localhost:8080/api/v1/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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
          <form method="post" onSubmit={handleSubmit}>
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
                onChange={(e) => setSelectSpa(e.target.value)}
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
                onChange={(e) => setServiceName(e.target.value)}
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
                onChange={(e) => setServiceTime(e.target.value)}
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
                onChange={(e) => setDescription(e.target.value)}
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
                onChange={(e) => setPrice(e.target.value)}
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
                onChange={(e) => setDiscount(e.target.value)}
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
                onChange={(e) => setTherapy(e.target.value)}
              />
              <datalist id="therapies">
                <option value="">--select--</option>
                {therapyName.map((therapyname, index) => {
                  return (
                    <option value={therapyname} key={index}>
                      {therapyname}
                    </option>
                  );
                })}
              </datalist>
            </div>

            <button
              className="submit-btn"
              onSubmit={handleSubmit}
              type="submit"
            >
              Add Service
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ServicesForm;
