import React from 'react'
import ResumeImg from '../assets/resume.png'
import pdf from '../assets/chinnathambi.pdf'


const Resume = () => {
  return (
    <section id='resume' className='flex flex-col md:flex-row bg-secondary'>
      <div className=' py-5 md:w-1/2 bg-secondary px-5 justify-end'>
        <img src={ResumeImg} />
      </div>
      <div className='md:w-1/2 flex justify-center'>
        <div className=' flex flex-col justify-center text-white'>
          <h1 className='text-4xl text-white border-b-4 mb-5 w-[140px] font-bold'>Resume</h1>
          <p className='pb-7'>You can view my Resume <a className=" text-black hover:text-blue-700 transition-colors bn" href={pdf}download="chinna-resume.pdf"  >Download
          </a></p>
 

        </div>
      </div>

    </section>
  )
}

export default Resume
