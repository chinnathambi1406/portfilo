import React from 'react';
import ResumeImg from '../assets/resume.png';
import ResumePDF from '../assets/chinnathambic.pdf';

const Resume = () => {
  return (
    <section
      id="resume"
      className="bg-gradient-to-br from-[#10002b] via-[#5f27cd] to-[#7d5fff] py-20 px-5 text-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={ResumeImg}
            alt="Resume Illustration"
            className="w-80 md:w-[500px] rounded-xl"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 flex flex-col items-start gap-6 text-center md:text-left">
        <h1 className='text-4xl md:text-5xl font-bold text-center mb-10'>
            <span className="text-pink-400">Resume</span>
          </h1>
          <p className="text-lg">You can view my Resume</p>
          <a
            href={ResumePDF}
            download
            className="bg-white text-[#282c8a] hover:bg-gray-200 font-bold py-3 px-6 rounded-md transition duration-300"
          >
            Download
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
