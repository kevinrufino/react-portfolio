import React from 'react';
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className='my-16 px-5 md:my-32 flex flex-col flex-wrap space-y-16 md:space-y-0 patterns' id='hero'>
      <div className='max-w-md mb-auto space-y-5'>
        <h1 className='text-5xl font-bold md:text-7xl mt-16'>What's Up! <span className="wave" role="img" aria-labelledby="wave">👋🏾</span></h1> 
        <h2 className='text-5xl font-bold md:text-5xl'>I’m Kevin, <Typewriter 
          style={{ padding: 50, textAlign: "left" }}
          options={{
            strings: [
              "Front-end Developer",
              "Full Stack Developer",
              "Creative Engineer",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        /></h2>
        <p className='tracking-wide leading-relaxed'>
          Join me on my journey of finding cool ways of incorporating my passion for art and tech in my life. {' '}
        </p>
        
      </div>
    </section>
  );
};

export default Hero;
