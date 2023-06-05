import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. 
                I'm Rawan Yousef, nice to meet you. Please take a look around to see my work.</p>
            </div>
            <div>
              <p>A UI/UX designer student at CHAS Academy, I'm passionate about designing engaging and user-friendly interfaces. I have knowledge of working with HTML, CSS, and JavaScript, which enables me to develop designs that are both aesthetically pleasing and functional. I specialize in Figma design and I also have experience using Adobe Photoshop, Adobe After Effects, and Adobe Illustrator With a keen eye for detail and a problem-solving mindset, I am dedicated to creating designs that meet the needs of both the user and the business.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;