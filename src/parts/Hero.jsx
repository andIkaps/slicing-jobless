import React from 'react'
import { CTA } from '../components'

const Hero = () => {
  return (
    <section className='row justify-content-center align-items center text-center' style={{ margin: '6rem 0' }}>
      <div style={{ maxWidth: 653 }}>
        <h1 className='fs-2 fw-semibold mb-3'>Get Connected to the Best Remote Jobs in Your Field</h1>
        <p className='fs-6 mb-5'>Discover a wide range of remote opportunities on our platform and take control of your career</p>

        <CTA />
      </div>
    </section>
  )
}

export default Hero
