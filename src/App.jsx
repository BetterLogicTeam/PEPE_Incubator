import { useCallback, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Partners from "./Components/Partners/Partners";
import Pepe_incubator from "./Components/Pepe_incubator/Pepe_incubator";
import Features from "./Components/Features/Features";
import Roadmap from "./Components/Roadmap/Roadmap";
import Footer from "./Components/Footer/Footer";
import Particles from "react-tsparticles";
import loadder from "./assets/SQvzy.gif";

import { loadFull } from "tsparticles";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading == true ? (
        <div className="scrollbar">
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: "transparent",
                },
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: false,
                    mode: "push",
                  },
                  onHover: {
                    enable: false,
                    mode: "repulse",
                  },
                  resize: false,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ADE900",
                },
                backgroundMask: {
                  color: "red",
                  distance: 120,
                  enable: false,
                  opacity: 0,
                  width: "100%",
                },
                collisions: {
                  enable: false,
                },
                move: {
                  directions: "right",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 3,
                  straight: false,
                },
                number: {
                  density: {
                    enable: false,
                    area: 1200,
                  },
                  value: 20,
                },
                opacity: {
                  value: 0.1,
                },
                // zIndex:{
                //   value: -9
                // },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 50 },
                },
              },
              detectRetina: true,
            }}
          />
          <Header />
          <Hero />
          <Partners />
          <Pepe_incubator />
          <Features />
          <Roadmap />
          <Footer />{" "}
        </div>
      ) : (
        <>
          {" "}
          <div className="main_loADER">
            <div className="Loader_bg">
              <img src={loadder} alt="" />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
