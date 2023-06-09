import React from "react";
import "./forms.css";

const TherapyForm = () => {
  return (
    <>
      <div className="main-container">
        <div className="container">
          <form method="post">
            <h1>Add Therapy (Category)</h1>

            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                className="form-control"
                type="text"
                name="name"
                id="name"
                placeholder="Enter name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="slug">Slug *</label>
              <input
                className="form-control"
                type="text"
                name="text"
                id="slug"
                placeholder="Enter slug"
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
              />
            </div>

            <div className="form-group">
              <label htmlFor="image">Image *</label>
              <input
                className="form-control"
                style={{ padding: "0.5rem" }}
                type="file"
                name="image"
                id="image"
                multiple="multiple"
                accept="image/jpg, image/jpeg, image/png"
              />
            </div>

            <button className="submit-btn" type="submit">
              Add Therapy
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default TherapyForm;
