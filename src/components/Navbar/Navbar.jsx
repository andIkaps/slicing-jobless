import React from 'react'
import Button from '../Button/Button'
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container'>
        <div className='row w-100 justify-content-between align-items-center'>
          <div className='col-3'>
            <a className='navbar-brand' href='#' style={{ fontWeight: 600 }}>
              Jobless
            </a>
          </div>
          <div className='col-3 d-lg-none d-flex justiy-content-end'>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNavAltMarkup'
              aria-controls='navbarNavAltMarkup'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
          </div>
          <div className='col-lg-9'>
            <div className='collapse navbar-collapse d-lg-flex justify-content-between' id='navbarNavAltMarkup'>
              <div className='navbar-nav'>
                <a className='nav-link active' aria-current='page' href='#'>
                  Home
                </a>
                <a className='nav-link' href='#'>
                  Discover
                </a>
                <a className='nav-link' href='#'>
                  Post a Job
                </a>
                <a className='nav-link' href='#'>
                  Contact Us
                </a>
              </div>
              <Button isOutline type={'link'} href={'/sign-up'}>
                Sign Up
              </Button>
              {/* <button className='btn btn-outline'>Sign Up</button> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
