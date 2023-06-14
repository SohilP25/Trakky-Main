import React, { useState, useEffect } from "react";
import "./Page.css";

import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

import { AreasData } from "../data/mockData";

const Areas = () => {
  // table header data
  const tableHeaders = ["Area Name", "City", "Actions"];

  // Handling view more button
  const [visible, setVisible] = useState(10);
  const [show, setShow] = useState(true);
  const length = AreasData.length;

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

    const results = AreasData.filter(
      (item) =>
        item.areaName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.city.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
  };

  // Getting area list
  const [cityList, setCityList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/cities", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((data) => setCityList(data))
      .catch((err) => console.log(err));
  }, []);

  // const cityName = cityList.map((data) => data.name);
  // const [areaData, setAreaData] = useState([]);

  return (
    <div className="main_list__container">
      {console.log(cityList)}
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
            {(searchTerm.length !== 0 ? searchResults : cityList)
              .slice(0, visible)
              .map((city, index) => {
                return (
                  <>
                    {city.areas.map((area) => {
                      return (
                        <tr key={index}>
                          <td>{area}</td>
                          <td>{city.name}</td>

                          <td>
                            <AiFillDelete />
                            &nbsp;&nbsp;
                            <FaEdit />
                          </td>
                        </tr>
                      );
                    })}
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

export default Areas;
