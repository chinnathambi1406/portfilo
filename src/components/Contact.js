import React from 'react';

const Contact = () => {
  return (
    <section
      id='contact'
      className='flex flex-col bg-gradient-to-r from-[#10002B] to-[#7209B7] px-2 py-32 text-white'>
      <div className='flex flex-col items-center text-center'>

      <h1 className='text-4xl md:text-5xl font-bold text-center mb-10'>
            <span className="text-pink-400">Contact</span>
          </h1>

        <p className='pb-5 max-w-md'>
          If you want to discuss more in detail, please contact me.
        </p>

        <p className='py-2 transition duration-300 hover:text-pink-400'>
          <span className='font-bold'>Email:</span> chinnathambic.22cse@kongu.edu
        </p>

        <p className='py-2 transition duration-300 hover:text-pink-400'>
          <span className='font-bold'>Phone:</span> +91 6383125681
        </p>

      </div>
    </section>
  );
};

export default Contact;
