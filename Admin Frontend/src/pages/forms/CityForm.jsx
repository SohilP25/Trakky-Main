import React, { useState } from "react";
import "./forms.css";

const CityForm = () => {
  const [Name, setName] = useState("");
  const [Priority, setPriority] = useState(null);

  // Post Request Starts
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData()
    formData.append("name", Name)
    formData.append("Priority", Priority)
    formData.append("areas", [])


    try {
      await fetch("http://localhost:8080/api/v1/cities", {
        method: "POST",
        body: formData,
      });

      alert("City added successfully");
    } catch (error) {
      console.error("Error occured", error);
    }
  };
  // Post Request Ends

  return (
    <>
      <div className="main-container">
        <div className="container">
          <form method="post" onSubmit={handleSubmit}>
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


            <button className="submit-btn" type="submit" onSubmit={handleSubmit}>
              Add City
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CityForm;
