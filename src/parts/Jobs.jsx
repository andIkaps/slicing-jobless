import React from 'react'
import { Card } from '../components'
import FigmaLogo from '../assets/images/figma.png'
import FacebookLogo from '../assets/images/facebook.png'
import VercelLogo from '../assets/images/vercel.png'

const Jobs = () => {
  const jobs = [
    {
      _id: +new Date(),
      jobTitle: 'Front-End Developer',
      companyName: 'Figma',
      jobDesc: 'We are looking for an experienced front-end developer to join our team.',
      skill: 'Rust',
      image: FigmaLogo,
      salary: '$70,000 - $90,000',
    },
    {
      _id: +new Date(),
      jobTitle: 'Data Scientist',
      companyName: 'Facebook',
      jobDesc: 'We are seeking a data scientist to join our team.',
      skill: 'Python',
      image: FacebookLogo,
      salary: '$100,000 - $130,000',
    },
    {
      _id: +new Date(),
      jobTitle: 'Technical Writer',
      companyName: 'Vercel',
      jobDesc: 'We are seeking a technical writer to join our team.',
      skill: 'Documentation',
      image: VercelLogo,
      salary: '$100,000 - $130,000',
    },
  ]
  return (
    <section className='pt-5'>
      <h1 className='h6 text-black'>Featured Jobs</h1>

      <div className='container'>
        <div className='row gap-3 mt-3'>
          {jobs.map((job, index) => (
            <Card
              key={`${job._id}${index}`}
              className={'col-12 col-md'}
              jobTitle={job.jobTitle}
              companyName={job.companyName}
              jobDesc={job.jobDesc}
              image={job.image}
              salary={job.salary}
              skill={job.skill}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Jobs
