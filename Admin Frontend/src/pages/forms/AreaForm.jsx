import React, { useState } from "react";
import "./forms.css";

const AreaForm = () => {
  const [Name, setName] = useState("");
  const [Slug, setSlug] = useState("");
  const [Priority, setPriority] = useState(0);
  const [Image, setImage] = useState("");

  const converttoBase64 = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => setImage(reader.result);
    reader.onerror = (error) => console.log(error);
  };

  const addTherapy = () => {
    let data = {
      Name: Name,
      Slug: Slug,
      Priority: Priority,
      Image: Image,
    };
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch("http://localhost:8080/api/v1/therapy", requestOptions)
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
            <h1>Add Area</h1>

            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                className="form-control"
                type="text"
                name="name"
                id="name"
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setSlug(e.target.value)}
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

            <div className="form-group">
              <label htmlFor="image">Image *</label>
              <input
                className="form-control"
                style={{ padding: "0.5rem" }}
                type="file"
                name="image"
                id="image"
                multiple="multiple"
                accept="image/*"
                onChange={converttoBase64}
              />
              <div className="image_preview"
              style={{
                margin: "1rem 0"
              }}>
                {Image === "" || Image === null ? (
                  ""
                ) : (
                  <img
                    src={Image}
                    alt=""
                    style={{
                      width: "50%"
                    }}
                  />
                )}
              </div>
            </div>

            <button className="submit-btn" type="submit" onClick={addTherapy}>
              Add Therapy
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AreaForm;
