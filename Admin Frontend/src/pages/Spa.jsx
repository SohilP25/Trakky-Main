import React, { useState } from 'react'
import './Page.css';

import { IoIosArrowDropdown } from 'react-icons/io'
import { IoIosArrowDropup } from 'react-icons/io'
import { AiFillDelete } from 'react-icons/ai'
import { FaEdit } from 'react-icons/fa'

import { SpaData } from '../data/mockData';

const Spa = () => {

  // table header data
  const tableHeaders = [
    'Name', 'Username', 'Phone No.', 'City', 'Area', 'Status',
    'More', 'Verified', 'Spa Academy', 'Premium', 'Action'
  ];

  // Handling view more button
  const [visible, setVisible] = useState(10)
  const [show, setShow] = useState(true)
  const length = SpaData.length

  const showMoreItems = () => {
    if (visible < length) {
      setVisible(prevValue => prevValue + 10)
    } else {
      setShow(false)
    }
  }

  // Handling Searchbar events 
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const results = SpaData.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.area.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
  };

  // Handling the more button
  const [expandedRow, setExpandedRow] = useState(null);
  const [isDropdown, setIsDropdown] = useState(null)

  // Handling all the switches
  // const [isStatus, setIsStatus] = useState(false)
  // const [isVerified, setIsVerified] = useState(false)
  // const [isPremium, setIsPremium] = useState(false)
  // const [hasSalonAcademy, sethasSalonAcademy] = useState(false)

  // const [isSwitchOn, setIsSwitchOn] = useState();

  // const handleSwitchToggle = () => {
  //   setIsSwitchOn(!isSwitchOn);

  // };

  // const handleSwitchToggle = () => {
  //   setIsSwitchOn(!isSwitchOn);
  // };

  return (
    <div className="main_list__container">
      <div className="mini_navbar__container">
        <form class="d-flex" onSubmit={(e) => e.preventDefault()}>
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
            value={searchTerm}
            onChange={handleSearch} />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
      <div className="list__container">
        <table className='table table-striped custom-table'>
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
            {
              (searchTerm.length !== 0
                ? searchResults
                : SpaData).slice(0, visible).map((spa, index) => {
                  return (
                    <>
                      <tr key={index}>
                        <td>{spa.name}</td>
                        <td>{spa.username}</td>
                        <td>{spa.phoneno}</td>
                        <td>{spa.city}</td>
                        <td>{spa.area}</td>
                        <td>
                          <div class="form-check form-switch">
                            <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                          </div>
                        </td>
                        <td>
                          {isDropdown === null ? (
                            <IoIosArrowDropdown
                              onClick={() => {
                                setExpandedRow(index)
                                setIsDropdown(index)
                              }}
                            />
                          ) : (
                            <IoIosArrowDropup onClick={() => {
                              setExpandedRow(null)
                              setIsDropdown(null)
                            }} />
                          )}
                        </td>
                        <td>
                          <div class="form-check form-switch">
                            <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                            {/* <input
                              class="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                              checked={isSwitchOn}
                              onChange={handleSwitchToggle}
                            /> */}
                          </div>
                        </td>
                        <td>
                          <div class="form-check form-switch">
                            <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                          </div>
                        </td>
                        <td>
                          <div class="form-check form-switch">
                            <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                          </div>
                        </td>
                        <td><AiFillDelete />&nbsp;&nbsp;<FaEdit /></td>

                      </tr>
                      <div
                        className="more_spa_detail__container"
                        style={{
                          display: expandedRow === index ? "block" : "none"
                        }}
                      >
                        <div className="image__container">
                          <img src={require(`../assets/${spa.image}`)} alt="" />
                        </div>
                      </div>
                    </>
                  )
                })
            }

          </tbody>

        </table>

        <div className="view_more__button"
          style={{ display: show ? "block" : "none" }}>
          <button onClick={showMoreItems}>View More</button>
        </div>

      </div>
    </div>
  )
}

export default Spa