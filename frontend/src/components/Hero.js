import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import animate from 'lottie-web';
import Typewriter from "typewriter-effect";

const Hero = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./astronaout.json'),
    });
    animate.setSpeed(0.5);
  }, []);

  return (
    <section className='my-16 px-5 md:my-32 flex flex-col flex-wrap space-y-16 md:space-y-0 patterns' id='hero'>
      {/* <div className='ml-auto w-72 md:w-96 lg:w-2/5'>
        {/* <div className='container' ref={container}></div> */}
      {/* </div> */}
      <div className='max-w-md mb-auto space-y-5'>
        <h1 className='text-5xl font-bold md:text-7xl mt-16'>What's Up! <span className="wave" role="img" aria-labelledby="wave">👋🏾</span></h1> 
        <h2 className='text-5xl font-bold md:text-5xl'>I’m Kevin, <Typewriter 
          style={{ padding: 50, textAlign: "left" }}
          options={{
            strings: [
              "Front-end Developer",
              "Mobile Developer",
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
