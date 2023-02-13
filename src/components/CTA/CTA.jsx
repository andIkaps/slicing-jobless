import React from 'react'
import Button from '../Button/Button'

const CTA = () => {
  return (
    <div className='d-flex flex-column flex-md-row align-items-center justify-content-center gap-3'>
      <Button isPrimary hasShadow type={'link'} href={'/explore-jobs'}>
        Explore Remote Jobs
      </Button>
      <Button isPlain type={'link'} href={'/how-it-works'}>
        How it works?
      </Button>
    </div>
  )
}

export default CTA
