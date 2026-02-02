"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView, TargetAndTransition } from "framer-motion";

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
      <motion.div
        variants={heroVariants}
        initial="initial"
        animate={controls}
        className="absolute flex items-center justify-center will-change-transform bg-cover bg-center"
        style={{
          background: `
      radial-gradient(900px circle at 75% 35%, rgba(255,102,153,0.38), transparent 65%),
      radial-gradient(700px circle at 25% 75%, rgba(255,150,180,0.28), transparent 65%),
      linear-gradient(135deg, #ffe4ea, #ffd1dc)
    `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* DARK CENTER OVERLAY */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
      radial-gradient(
        circle at center,
        rgba(255, 116, 137, 0.60) 0%,
        rgba(255, 116, 137, 0.48) 28%,
        rgba(255, 116, 137, 0.34) 48%,
        rgba(255, 116, 137, 0.20) 65%,
        rgba(255, 116, 137, 0.12) 78%,
        transparent 88%
      )
    `,
          }}
        />

        {/* MAIN CONTENT (CENTERED) */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <p className="text-sm sm:text-base md:text-xl mb-4 opacity-90 font-bold text-white">
            Hello, I’m Tanveer!
          </p>

          <h1 className="text-center text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-8 text-white">
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
            roles.
          </h1>

          <div className="flex gap-4">
            {/* PRIMARY BUTTON */}
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 280, damping: 18 }}
              className="w-32 sm:w-40 md:w-44 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base rounded-full bg-white text-[#C72626] font-medium relative overflow-hidden shadow-md hover:shadow-[0_0_20px_rgba(255,255,255,0.9)] cursor-pointer"
            >
              View Projects
            </motion.button>

            {/* OUTLINE BUTTON */}
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 280, damping: 18 }}
              className="w-32 sm:w-40 md:w-44 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base rounded-full border border-white text-white font-medium relative overflow-hidden hover:border-white/80 hover:shadow-[0_0_22px_rgba(255,255,255,0.85)] cursor-pointer"
            >
              Resume
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
