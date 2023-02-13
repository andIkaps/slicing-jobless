import clsx from 'clsx'
import React from 'react'

import './Card.scss'

const Card = ({ className, jobTitle, companyName, jobDesc, salary, skill, image }) => {
  return (
    <div className={clsx(['card', className])}>
      <div className='card-header'>
        <figure className='img-brand'>
          <img src={image} alt='Vercel Logo' className='img-fluid' />
          <figcaption>
            <h2 className='h6 text-black'>{jobTitle}</h2>
            <span>{companyName}</span>
          </figcaption>
        </figure>
      </div>
      <div className='card-body'>
        <p>{jobDesc}</p>
      </div>
      <div className='card-footer'>
        <span className='badge d-inline text-black'>{skill}</span>
        <span className='salary'>{salary}</span>
      </div>
    </div>
  )
}

export default Card
