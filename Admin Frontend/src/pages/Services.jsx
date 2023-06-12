import React, { useState } from "react";
import "./Page.css";

import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

import { ServicesData, SpaData } from "../data/mockData";

const Services = () => {
  // table header data
  const tableHeaders = [
    "Service Name",
    "category",
    "price",
    "time",
    "discount",
    "description",
    "Action",
  ];

  // Handling view more button
  const [visible, setVisible] = useState(10);
  const [show, setShow] = useState(true);
  const length = ServicesData.length;

  const showMoreItems = () => {
    if (visible < length) {
      setVisible((prevValue) => prevValue + 10);
    } else {
      setShow(false);
    }
  };

  // Handling Searchbar events
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const results = SpaServices.filter(
      (item) =>
        item.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
  };

  // handling dropdown list of spa name
  const [SpaServices, setSpaServices] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  const spaNames = SpaData.map(spa => spa.name);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  

  return (
     <div className="main_list__container">
      <div className="mini_navbar__container">
        <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>

        <div className="form-group">
          <select
            placeholder="Select Spa"
            value={selectedOption}
            onChange={handleChange}
            style={{
              width: "10rem",
            }}
          >
            <option value={""}>--select--</option>
            {spaNames.map((name, index) => {
              return (
                <option key={index} value={name}>
                  {name}
                </option>
              );
            })}
          </select>
          <p>Selected Option: {selectedOption}</p>
        </div>
      </div>

      <div className="list__container">
        <table className="table table-striped custom-table">
          <thead>
            <tr>
              {tableHeaders.map((header, index) => (
                <th key={index} scope="col">
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {(searchTerm.length !== 0 ? searchResults : SpaServices)
              .slice(0, visible)
              .map((service, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td>{service.serviceName}</td>
                      <td>{service.category}</td>
                      <td>{service.price}</td>
                      <td>{service.time}</td>
                      <td>{service.discount}</td>
                      <td>{service.description}</td>
                      <td>
                        <AiFillDelete />
                        &nbsp;&nbsp;
                        <FaEdit />
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>

        <div
          className="view_more__button"
          style={{ display: show ? "block" : "none" }}
        >
          <button onClick={showMoreItems}>View More</button>
        </div>
      </div>
    </div>
  );
};
export default Services;
