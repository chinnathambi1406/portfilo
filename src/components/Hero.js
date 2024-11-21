import React from 'react'
import HeroImg from '../assets/hero.png';
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
const Hero = () => {
  return (

   <section className=' h-screen  flex-col md:flex-row flex px-5 py-32 bg-primary justify-center'>
    <div className='md:w-1/2 flex flex-col'>
    <h1 className=' text-white text-6xl'>Hi ,<br></br> Im<span className='text-black'> C</span> Chinnathambi
    <p className='text-3xl'>Im a Full-Stack Developer</p>
    </h1>
    <div className='flex py-10'>
      <a href='https://www.linkedin.com/in/chinna-thambi-a74391259/' className='pr-5 hover:text-white'><AiOutlineLinkedin size={40} /></a>
      <a href='https://github.com/chinnathambigitHub' className='pr-5 hover:text-white'>< AiOutlineGithub size={40}/></a>
      <a href= 'https://leetcode.com/u/22CSR034_chinna/' className='pr-5 hover:text-white'>< SiLeetcode size={40}/></a>

    </div>
    </div>

    <img  className='md:w-1/3'src={HeroImg}/>
   </section>
  )
}

export default Hero
