import React from 'react';
import HeroImg from '../assets/hero.png';
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  return (
    <section className='relative h-screen flex flex-col md:flex-row px-5 py-32 bg-gradient-to-br from-black via-violet-800 to-indigo-700 justify-center items-start'>

    
      <div className='md:w-2/3 flex flex-col text-left z-10'>
        <h1 className='text-white text-5xl md:text-6xl font-bold'>
          Hi,<br />
          I'm <span className='text-violet-300'></span> Chinnathambi C
        </h1>
        <p className='text-white text-2xl mt-4'>I'm a Full-Stack Developer</p>

        <div className='flex py-6'>
          <a href='https://www.linkedin.com/in/chinna-thambi-a74391259/' className='pr-5 text-white hover:text-violet-300'><AiOutlineLinkedin size={40} /></a>
          <a href='https://github.com/chinnathambigitHub' className='pr-5 text-white hover:text-violet-300'><AiOutlineGithub size={40} /></a>
          <a href='https://leetcode.com/u/22CSR034_chinna/' className='pr-5 text-white hover:text-violet-300'><SiLeetcode size={40} /></a>
        </div>
      </div>

    
      <div className='absolute top-10 right-10'>
        <img 
          src={HeroImg} 
          alt="Chinnathambi" 
          className='w-60 h-60 object-cover rounded-full border-4 border-white shadow-lg' 
        />
      </div>
    </section>
  );
};

export default Hero;
