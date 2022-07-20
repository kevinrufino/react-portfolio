import { lazy, Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, OrthographicCamera } from '@react-three/drei';

const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const Project = lazy(() => import('./components/Project'));
const Skill = lazy(() => import('./components/Skill'));
const Contact = lazy(() => import('./components/Contact'));
const ParticlesComp = lazy(() => import('./components/particlesComp'))
const Model = lazy(() => import('./components/Retro_Computer'))

function App() {
  return (
      <Suspense
        fallback={
          <div className='sk-folding-cube'>
            <div className='sk-cube1 sk-cube'></div>
            <div className='sk-cube2 sk-cube'></div>
            <div className='sk-cube4 sk-cube'></div>
            <div className='sk-cube3 sk-cube'></div>
          </div>
        }
      >
        <div className='relative' >

          <Canvas 
            style={{'height': '100vh', 'width': '100vw', 'z-index': '-100', 'position': 'fixed'}}
            camera={{ fov: 70, position: [6,-1,6]}} 
            gl={{ antialias: false }}
          >
            {/* for debugging position */}
            {/* <OrthographicCamera makeDefault zoom={10} /> */}
            {/* <gridHelper args={[100, 100, `white`, `gray`]} />   */}
            <ambientLight />
            <Model />
            <OrbitControls />
          </Canvas>

          <div className='App container my-10 mx-auto max-w-screen-lg bg-transparent'>
            <Header />
            <main>
              <ParticlesComp />
              <Hero />
              <Project />
              <Skill />
              <Contact />
            </main>
          </div> 
        </div>
        
     </Suspense>
  );
}

export default App;
