"use client";

import { useCallback } from "react";
import dynamic from "next/dynamic";
import type { ParticlesProps } from "react-tsparticles";

type InitType = ParticlesProps["init"];
type InitTypeNonNullable = NonNullable<InitType>;
type InitParameters = Parameters<InitTypeNonNullable>;
type Engine = InitParameters[0];

// Dynamically import Particles component with SSR disabled
const ParticlesComponent = dynamic(
  () => import("react-tsparticles").then((mod) => mod.default),
  { ssr: false }
);

const Particle = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // Only import loadFull when the function is called (on client side)
    const { loadFull } = await import("tsparticles");
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <ParticlesComponent
      className="h-full"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 50,
              duration: 1,
            },
          },
        },
        particles: {
          color: {
            value: "#808080",
          },
          links: {
            color: "#808080",
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            enable: true,
            direction: "top-left",
            outModes: {
              default: "bounceVertical",
            },
            random: true,
            straight: false,
            speed: 1,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 105,
          },
          opacity: {
            value: 0.1,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 10 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

// Create a separate component that will be dynamically imported with SSR disabled
const ClientSideParticle = () => {
  return <Particle />;
};

export default ClientSideParticle;