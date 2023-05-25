import React from 'react'
import './style/forms.css'
const handleChange = (e) => {
    e.preventDefault();
  };

const Register = () => {
    return (
        <div className="main-container">
            <div className='container'>
                <form method='post'>
                    <h1>Register Admin</h1>
                    <div className="form-group">
                        <label htmlFor="firstname">First name *</label>
                        <input className='form-control' type="text" name='first name' id='firstname' placeholder='Enter first name' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Last name *</label>
                        <input className='form-control' type="text" name='last name' id='lastname' placeholder='Enter last name' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address *</label>
                        <input className='form-control' type="text" name='address' id='address' placeholder='Enter address' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City *</label>
                        <input className='form-control' type="text" name='city' id='city' placeholder='Enter city' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pincode">Pincode *</label>
                        <input className='form-control' type="number" min={100001} max={999999} name='pincode' id='pincode' placeholder='Enter pincode' />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password">Password *</label>
                        <input className='form-control' type="password" name='password' id='password' placeholder='Enter password' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="conf-password">Confirm Password *</label>
                        <input className='form-control' type="password" name='conf-password' id='conf-password' onPaste={handleChange} placeholder='Enter password again' />
                    </div>
                    <button className='submit-btn' type='submit'>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register