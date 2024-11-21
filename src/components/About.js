import React from 'react'
import AboutImg from '../assets/about.png'

const About = () => {
  return (
    <section id='about' className='flex flex-col md:flex-row bg-secondary'>
        <div className=' py-5 md:w-1/2 bg-secondary px-5'>
            <img src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className=' flex flex-col justify-center text-white'>
        <h1 className='text-4xl text-white border-b-4 mb-5 w-[170px] font-bold'> About Me</h1>
            <p className='pb-5'>Hi, My Name is C Chinnathambi. I am Full-Stack Developer.I bulid beautiful websites with react.js and tailwind CSS.</p>
            <p className='pb-5'>I am proficient in Fronted skills like React.js,Tailwind CSS,Html and CSS and many more.</p>
            <p className='pb-5'>I am proficient in Backend skills like Node.js,Express.js,Mongodb,Postgraysql and JavaScript.</p>
        </div>
        </div>  

    </section>
  )
}

export default About
