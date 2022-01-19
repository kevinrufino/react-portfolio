import React from "react";
import Particles from "react-tsparticles";

const ParticlesComp = () => {
  // const particlesInit = (main) => {
  //   console.log(main);
  // };

  // const particlesLoaded = (container) => {
  //   console.log(container);
  // };
  return (
    <Particles
      id="particles-js"
      // init={particlesInit}
      // loaded={particlesLoaded}
      options={{
        // background: {
        //   color: {
        //     value: "#0101010",
        //   },
        // },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 60,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffcc70",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 50,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "square",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesComp;
