import React from "react";
import "./style/forms.css";

const Spa = () => {

  function handleDrop(e) {
    if (this.disabled) return;
    const files = e.target.files || e.dataTransfer.files;
    if (files.length > 6) {
      alert('You are only allowed to upload a maximum of 6 files at a time');
    }
    if (!files.length) return;
    for (let i = 0; i < Math.min(files.length, 6); i++) {
      this.fileCallback(files[i])
    }
  }

  return (
    <div className="main-container">
      <div className="container">
        <form method="post">
          <h1>Spa</h1>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name"
              required
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
              required
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
            />
          </div>

          <div className="form-group">
            <label htmlFor="booknow">WhatsApp Number *</label>
            <input
              className="form-control"
              type="number"
              minLength={10}
              maxLength={10}
              name="booknow"
              id="booknow"
              placeholder="Enter WhatsApp Number"
              required
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
            />
          </div>


          <div className="form-group">
            <label htmlFor="area">Area *</label>
            <input
              className="form-control"
              type="text"
              name="Area"
              id="Area"
              placeholder="Enter Address"
              required
            />
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
            <label htmlFor="image">Image *</label>
            <input
              className="form-control"
              style={{ padding: "0.5rem" }}
              type="file"
              name="image"
              id="image"
              onChange={handleDrop}
              multiple
              required
            />
          </div>

          <button className="submit-btn" type="submit">
            add spa
          </button>
        </form>
      </div>
    </div>
  );
};

export default Spa;
