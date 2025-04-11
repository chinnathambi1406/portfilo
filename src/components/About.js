import React from 'react';
import AboutImg from '../assets/about.png';

const About = () => {
  return (
    <section id='about' className='bg-gradient-to-br from-black via-violet-900 to-indigo-900 py-16 text-white px-5'>
      <h1 className='text-4xl md:text-5xl font-bold text-center mb-10'>
       Proffesional <span className="text-pink-400">Skillset</span>
      </h1>

      <div className='flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto'>
        <div className='md:w-1/2 flex justify-center'>
          <img src={AboutImg} alt="About" className='rounded-xl w-72 md:w-96' />
        </div>

        <div className='md:w-1/2 flex flex-col gap-6'>
          {[
            {label:"Html",value:80,color:"from-red-400 to-red-700"},
            {label:"CSS",value:80,color:"from-black-400 to-black-700"},
            { label: "React.js", value: 50, color: "from-cyan-400 to-cyan-700" },
            { label: "Tailwind CSS", value: 50, color: "from-blue-400 to-blue-700" },
            { label: "DBMS", value: 40, color: "from-green-400 to-green-700" },
            { label: "Java Programming", value: 60, color: "from-orange-400 to-orange-700" }
          ].map(skill => (
            <div key={skill.label} className='bg-[#0c011e] p-4 rounded-xl shadow-md'>
              <div className='flex justify-between mb-2 font-semibold'>
                <span>{skill.label}</span>
                <span>{skill.value}%</span>
              </div>
              <div className='w-full h-3 bg-gray-200 rounded-full'>
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  style={{ width: `${skill.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
