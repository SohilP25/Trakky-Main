import React from 'react'
import './forms.css'


const OffersForm = () => {
  return (
    <>
      <div className="main-container">
        <div className="container">
          <form method="post">
            <h1>Offer</h1>
            <div className="form-group">
              <label htmlFor="slug">Name *</label>
              <input
                className="form-control"
                type="text"
                name="text"
                id="slug"
                placeholder="Enter Name"
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
              <label htmlFor="name">Select Spa(s) *</label>
              <select name="spa" style={{ "height": "fit-content" }} className='form-control' id="spas" multiple>
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
                required
              />
            </div>

            <button className="submit-btn" type="submit">
              Add Offer
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default OffersForm