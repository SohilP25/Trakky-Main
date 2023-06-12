import React, { useState } from "react";
import "./forms.css";

const CityForm = () => {
  const [Name, setName] = useState("");
  const [Priority, setPriority] = useState(0);

  const addCity = () => {
    let data = {
      Name: Name,
      Priority: Priority,
    };
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch("http://localhost:8080/api/v1/cities", requestOptions)
      .then((result) => {
        result.json().then((res) => {
          console.warn(res);
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="main-container">
        <div className="container">
          <form method="post" encType="multipart/form-data">
            <h1>Add City</h1>

            <div className="form-group">
              <label htmlFor="name">City Name *</label>
              <input
                className="form-control"
                type="text"
                name="name"
                id="cityname"
                placeholder="Enter city"
                onChange={(e) => setName(e.target.value)}
              />
            </div>


            <div className="form-group">
              <label htmlFor="priority">Priority *</label>
              <input
                className="form-control"
                type="number"
                name="text"
                id="text"
                placeholder="Enter Prioriy"
                onChange={(e) => setPriority(e.target.value)}
              />
            </div>


            <button className="submit-btn" type="submit" onClick={addCity}>
              Add City
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CityForm;
