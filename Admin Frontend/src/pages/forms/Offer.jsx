import React, { useState } from "react";
import "./forms.css";

const OffersForm = () => {
  // Handling submit
  const [name, setName] = useState("");
  const [Slug, setSlug] = useState("");
  const [Priority, setPriority] = useState(null);
  const [spa, setspa] = useState("");
  const [Image, setImage] = useState(null);

  const convertToBase64 = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => setImage(reader.result);
    reader.onerror = (error) => console.log(error);
  };

  const add_offer = () => {
    let data = {
      Name: name,
      Slug: Slug,
      Select_Spa: spa,
      Priority: Priority,
      Image: Image,
    };

    let requestOption = {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch("/api/v1/Offer", requestOption).then(
      (result) => {
        result
          .json()
          .then((response) => {
            console.log(response);
          })
          .catch((error) => console.log(error));
      }
    );
  };

  return (
    <>
      <div className="main-container">
        <div className="container">
          <form method="post">
            <h1>Offer</h1>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                className="form-control"
                type="text"
                name="text"
                id="name"
                placeholder="Enter Name"
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
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Select Spa(s) *</label>
              <select
                name="spa"
                style={{ height: "fit-content" }}
                className="form-control"
                id="spas"
                onChange={(e) => setspa(e.target.value)}
                // multiple
              >
                <option value="Spa 1">Spa 1</option>
                <option value="Spa 2">Spa 2</option>
                <option value="Spa 3">Spa 3</option>
                <option value="Spa 4">Spa 4</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="priority">Priority *</label>
              <input
                className="form-control"
                type="number"
                name="number"
                id="priority"
                placeholder="Enter Priority"
                onChange={(e) => setPriority(e.target.value)}
                required
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
                onChange={(e) => convertToBase64(e)}
                required
              />
            </div>

            <button
              className="submit-btn"
              type="submit"
              onClick={() => add_offer}
            >
              Add Offer
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default OffersForm;
