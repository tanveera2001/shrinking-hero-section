"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView, TargetAndTransition } from "framer-motion";
import ResumeButton from "./ResumeButton";
import ViewProjectsButton from "./ViewProjectsButton";
import HeroSocialLinks from "./HeroSocialLinks";

export default function Hero() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();

  const isInView = useInView(wrapperRef, { amount: 0.1, once: false });

  useEffect(() => {
    if (isInView) {
      controls.set("initial");
      controls.start("animate");
    }
  }, [isInView, controls]);

  const isSmallScreen = typeof window !== "undefined" && window.innerWidth < 786;

  const heroVariants: {
    initial: TargetAndTransition;
    animate: TargetAndTransition;
  } = {
    initial: {
      top: 0,
      left: 0,
      right: 0,
      height: isSmallScreen ? "80vh" : "100vh",
      borderRadius: "0px",
      position: "absolute",
    },
    animate: {
      top: "1rem",
      left: "1rem",
      right: "1rem",
      height: isSmallScreen ? "70vh" : "90vh",
      borderRadius: "1.5rem",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section ref={wrapperRef} className="relative h-[80vh] sm:h-screen overflow-hidden">

      {/* HERO CONATINER */}
      <motion.div
        variants={heroVariants}
        initial="initial"
        animate={controls}
        className="absolute flex items-center justify-center will-change-transform bg-cover bg-center"
        style={{
  background: `
    radial-gradient(900px circle at 75% 35%, rgba(59,130,246,0.35), transparent 65%),
    radial-gradient(700px circle at 25% 75%, rgba(96,165,250,0.28), transparent 65%),
    linear-gradient(135deg, #e0f2fe, #bfdbfe)
  `,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}}
      >
        {/* HERO CONTAINER OVERLAY */}
        <div
  className="absolute inset-0 pointer-events-none"
  style={{
    background: `
      radial-gradient(
        circle at center,
        rgba(59,130,246,0.60) 0%,
        rgba(59,130,246,0.48) 28%,
        rgba(59,130,246,0.34) 48%,
        rgba(59,130,246,0.20) 65%,
        rgba(59,130,246,0.12) 78%,
        transparent 88%
      )
    `,
  }}
/>

        {/* HERO TEXT CONTENT */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <p className="text-sm sm:text-base md:text-xl mb-4 opacity-90 font-mono font-bold text-white">Hello, I’m Tanveer!</p>

          <h1 className="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-8xl font-league font-medium leading-tight mb-8 text-white">
            Open for internships & <br />
            junior{" "}
            <span
              className="relative inline-block pb-2"
              style={{
                textDecoration: "none",
                backgroundImage: "linear-gradient(to right, transparent, white 50%, transparent)",
                backgroundSize: "100% 2px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
              }}
            >
              full-stack developer
            </span>{" "}
            roles
          </h1>

          {/* BUTTONS */}
          <div className="flex gap-2 sm:gap-4">

            {/* VIEW PROJECT BUTTON */}
            <ViewProjectsButton />

            {/* RESUME BUTTON */}
            <ResumeButton />
          </div>

        </div>

        {/* SOCIAL LINKS */}
        <HeroSocialLinks />
      </motion.div>
    </section>
  );
}
