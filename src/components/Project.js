import ProjectImg from '../assets/project.png';
import projectImg from '../assets/project1.png';
import projectImg2 from '../assets/project2.png';

const Project = () => {
  return (
    <section id='project' className='flex flex-col py-5 px-5 justify-center bg-gray-900 text-white'>
      <div className='w-full'>
        <div className='flex flex-col px-10 py-5'>
          <h1 className='text-4xl md:text-5xl font-bold text-center mb-10'>
            <span className="text-pink-400">Projects</span>
          </h1>
          <p className="text-center">
            These are some of my best projects. I have built these with React and Tailwind CSS.
            Check them out.
          </p>
        </div>
      </div>

      <div className='w-full'>
        <div className='flex flex-col md:flex-row px-12 gap-6'>
          
      
          <div className='relative'>
            <img className='h-[300px] w-[500px]' src={ProjectImg} alt="Food website" />
            <div className='absolute inset-0 bg-black bg-opacity-70 opacity-0 duration-500 hover:opacity-100'>
              <p className='text-center py-5'>
              Baava Crackers - Built with MERN stack and an admin dashboard.
              </p>
            </div>
          </div>

    
          <div className='relative'>
            <img className='h-[300px] w-[500px]' src={projectImg} alt="Trip planner" />
            <div className='absolute inset-0 bg-black bg-opacity-70 opacity-0 duration-500 hover:opacity-100'>
              <p className='text-center py-5'>
                Trip Planner Website - Built with MERN Stack.
              </p>
            </div>
          </div>

      
          <div className='relative'>
            <img className='h-[300px] w-[500px]' src={projectImg2} alt="Resort management" />
            <div className='absolute inset-0 bg-black bg-opacity-70 opacity-0 duration-500 hover:opacity-100'>
              <p className='text-center py-5'>
                HotStar-clone Website - Built with using React.js and Tailwind.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Project;
