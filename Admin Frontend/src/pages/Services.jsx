import React, { useState } from "react";
import "./Page.css";

import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

import { ServicesData } from "../data/mockData";

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

    const results = ServicesData.filter(
      (item) =>
        item.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.time.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
  };

  return (
    <div className="main_list__container">
      <div className="mini_navbar__container">
        <form class="d-flex" onSubmit={(e) => e.preventDefault()}>
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
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
            {(searchTerm.length !== 0 ? searchResults : ServicesData)
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
