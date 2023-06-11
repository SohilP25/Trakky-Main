import React from "react";
import "./forms.css";

const SpaForm = () => {


    return (
        <div className="main-container">
            <div className="container">
                <form method="post">
                    <h1>Spa</h1>
                    <div className="form-group">
                        <label htmlFor="name">Name of Spa *</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter Name"
                            required
                            autoComplete="off"
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
                            autoComplete="off"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="booknow">WhatsApp Number For Booking *</label>
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
                            autoComplete="off"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="directionlink">Latitude  *</label>
                        <input
                            className="form-control"
                            type="text"
                            name="latitude"
                            id="directionlink"
                            contentEditable={false}
                            placeholder="Enter Latitude"
                            required
                            autoComplete="off"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="directionlink">Longitude *</label>
                        <input
                            className="form-control"
                            type="text"
                            name="directionlink"
                            id="directionlink"
                            contentEditable={false}
                            placeholder="Enter Longitude"
                            required
                            autoComplete="off"
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
                                    autoComplete="off"
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
                                    autoComplete="off"
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
                            autoComplete="off"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="landmark">Landmark *</label>
                        <input
                            className="form-control"
                            type="text"
                            name="landmark"
                            id="landmark"
                            placeholder="Enter Landmark"
                            required
                            autoComplete="off"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="priority">Priority *</label>
                        <input
                            className="form-control"
                            type="number"
                            name="priority"
                            id="priority"
                            placeholder="Enter Priority"
                            required
                            autoComplete="off"
                        />
                    </div>


                    <div className="form-group">
                        <label htmlFor="area">Area *</label>
                        <input
                            className="form-control"
                            type="dropdown"
                            name="area"
                            list="areas"
                            id="area"
                            placeholder="Select Area"
                            required
                            autoComplete="off"
                        />

                        <datalist id="areas">
                            <option value="Area 1" />
                            <option value="Area 2" />
                            <option value="Area 3" />
                            <option value="Area 4" />
                            <option value="Area 5" />
                            <option value="Area 6" />
                        </datalist>
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
                            autoComplete="off"
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
                        <label htmlFor="slug">Slug *</label>
                        <input
                            className="form-control"
                            type="text"
                            name="text"
                            id="slug"
                            placeholder="Enter slug"
                            required
                            autoComplete="off"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="image">Main Image *</label>
                        <input
                            className="form-control"
                            style={{ padding: "0.5rem" }}
                            type="file"
                            name="image"
                            id="mainimage"
                            // onChange={handleDrop}
                            required
                            autoComplete="off"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="image">Image *</label>
                        <input
                            className="form-control"
                            style={{ padding: "0.5rem" }}
                            type="file"
                            name="image"
                            id="multipleimage"
                            // onChange={handleDrop}
                            multiple
                            required
                            autoComplete="off"
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

export default SpaForm;