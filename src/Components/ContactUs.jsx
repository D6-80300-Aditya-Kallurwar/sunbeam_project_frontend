import React from "react";
import { NavLink } from "react-router-dom";
import contactUs from "../img/contactUs.png"
const ContactUs = () => {


return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 col-12">
          <div className="">
            <img src={contactUs} className='img-fluid' alt='Contact Us' />
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="text-center">
            <h1 className='display-3'>Quick Contact</h1>
            <form>
            
                <div className='my-4'>
                  <div className='form-group'>
                    <input
                      className='form-control'
                      type='text'
                      placeholder='Name'
                    />
                  </div>
                </div>
                <div className='my-4'>
                  <div className='form-group'>
                    <input
                      className='form-control'
                      type='email'
                      placeholder='Email Address'
                    />
                  </div>
                </div>
                <div className='my-4'>
                  <div className='form-group'>
                    <input
                      className='form-control'
                      type='text'
                      placeholder='Phone'
                    />
                  </div>
                </div>
                <div className='my-4'>
                  <div className='form-group'>
                    <textarea
                      className='form-control'
                      rows='3'
                      placeholder='Message'
                    ></textarea>
                  </div>
                </div>
                  <button
                    type='submit'
                    className='btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2'
                  >
                    <span className='lead'> SUBMIT</span>
                  </button>
            </form>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-12">
          <img
            src='https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png'
            alt='Address'
          />
          <h6 className='font-weight-medium'>Address</h6>
          <p>Hinjewadi</p>
        </div>
        <div className="col-md-4 col-12">
          <img
            src='https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png'
            alt='Phone'
          />
          <h6 className='font-weight-medium'>Phone</h6>
          <p>0712-6938-6312</p>
        </div>
        <div className="col-md-4 col-12">
          <img
            src='https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png'
            alt='Email'
          />
          <h6 className='font-weight-medium'>Email</h6>
          <p>Cineflex@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
  export default ContactUs;