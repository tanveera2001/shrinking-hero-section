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
      <motion.div variants={heroVariants} initial="initial" animate={controls} className="absolute bg-linear-to-br from-indigo-600 to-blue-500 flex items-center justify-center will-change-transform">
        <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl text-center px-4">
          Hero Section
        </h1>
      </motion.div>
    </section>
  );
}
