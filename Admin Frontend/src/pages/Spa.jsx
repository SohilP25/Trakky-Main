import React, { useEffect, useState } from "react";
import "./Page.css";

import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

const Spa = () => {
  // Getting spa details
  const [SpaData, setSpaData] = useState([]);

  // Settings for switches
  const [luxurious, setLuxurious] = useState(false);
  const [topRated, setTopRated] = useState(false);
  const [open, setOpen] = useState(false);
  const [premium, setPremium] = useState(false);
  const [verified, setVerified] = useState(false);

  const getSpa = () => {
    const requestOption = {
      method: "GET",
      header: { "Content-Type": "application/json" },
    };
    fetch("http://localhost:8080/api/v1/spas", requestOption)
      .then((res) => res.json())
      .then((data) => setSpaData(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getSpa();
  }, []);

  //  Deleting Spa Data
  const deleteSpa = (id) => {
    console.log("delete called");
    fetch(`http://localhost:8080/api/v1/spas/${id}`, {
      method: "DELETE",
    })
      .then(() => getSpa())
      .catch((err) => console.log(err));
  };
  const updateSpa = (id) => {
    // PUT request using fetch inside useEffect React hook

    let item = {
        
    };
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React Hooks PUT Request Example" }),
    };
    fetch(`http://localhost:8080/api/v1/spas/${id}`, requestOptions)
      .then(() => getSpa())
      .catch((err) => console.log(err));
  };

  // table header data
  const tableHeaders = [
    "Name",
    "Phone No.",
    "Address",
    "Landmark",
    "Close/Open",
    "More",
    "Verified",
    "Top Rated",
    "Premium",
    "Luxurious",
    "Action",
  ];

  // Handling view more button
  const [visible, setVisible] = useState(10);
  const [show, setShow] = useState(true);
  const length = SpaData.length;

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

    const results = SpaData.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.area.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
  };

  // Handling the more button
  const [expandedRow, setExpandedRow] = useState(null);
  const [isDropdown, setIsDropdown] = useState(null);

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
            {(searchTerm.length !== 0 ? searchResults : SpaData)
              .slice(0, visible)
              .map((spa, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td>{spa.name}</td>
                      <td>{spa.mobileNumber}</td>
                      <td>{spa.address}</td>
                      <td>{spa.landmark}</td>
                      <td>
                        <div className="form-check form-switch">
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckDefault"
                          ></label>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                            onChange={() => {
                              setOpen(!open);
                            }}
                          />
                        </div>
                      </td>
                      <td>
                        {isDropdown === null ? (
                          <IoIosArrowDropdown
                            onClick={() => {
                              setExpandedRow(index);
                              setIsDropdown(index);
                            }}
                          />
                        ) : (
                          <IoIosArrowDropup
                            onClick={() => {
                              setExpandedRow(null);
                              setIsDropdown(null);
                            }}
                          />
                        )}
                      </td>
                      <td>
                        <div className="form-check form-switch">
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckDefault"
                          ></label>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                            onChange={() => {
                              setVerified(!verified);
                            }}
                          />
                        </div>
                      </td>
                      <td>
                        <div className="form-check form-switch">
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckDefault"
                          ></label>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                            onChange={() => {
                              setTopRated(!topRated);
                            }}
                          />
                        </div>
                      </td>
                      <td>
                        <div className="form-check form-switch">
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckDefault"
                          ></label>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                            onChange={() => {
                              setPremium(!premium);
                            }}
                          />
                        </div>
                      </td>
                      <td>
                        <div className="form-check form-switch">
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckDefault"
                          ></label>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                            onChange={() => {
                              setLuxurious(!luxurious);
                            }}
                          />
                        </div>
                      </td>
                      <td>
                        <AiFillDelete onClick={() => deleteSpa(spa._id)} />
                        &nbsp;&nbsp;
                        <FaEdit />
                      </td>
                    </tr>

                    <div
                      className="more_spa_detail__container"
                      style={{
                        display: expandedRow === index ? "block" : "none",
                      }}
                    >
                      <div className="image__container">
                        <img src={spa.imageUrl} alt="" />
                      </div>
                    </div>
                  </>
                );
              })}
          </tbody>
        </table>

        <div
          className="view_more__button"
          style={{ display: show && SpaData.length > 10 ? "block" : "none" }}
        >
          <button onClick={showMoreItems}>View More</button>
        </div>
      </div>
    </div>
  );
};

export default Spa;
