

import { motion } from "framer-motion";

const ResumeButton = () => {
    return (
        <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 280, damping: 18 }}
            className="
                w-30 sm:w-40 md:w-44 
                px-4 sm:px-5 md:px-6 
                py-2 sm:py-2.5 md:py-3 
                text-sm sm:text-base 
                rounded-full border 
                border-white 
                text-white 
                font-medium 
                relative 
                overflow-hidden 
                hover:border-white/80 hover:shadow-[0_0_22px_rgba(255,255,255,0.85)] 
                cursor-pointer
            "
        >
            Resume
        </motion.button>
    )
}

export default ResumeButton;