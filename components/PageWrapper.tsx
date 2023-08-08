"use client"
import { motion, AnimatePresence } from "framer-motion"
import { ReactNode } from "react";



type PageWrapperProps = {
    children: ReactNode;
  };

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
    // Your component logic here
    return (
    <>
    <AnimatePresence>
    <motion.div 
     initial={{ opacity: 0, y: 18 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 1.0, delay: 0.25 }}
    >
        {children}
    </motion.div>
    </AnimatePresence>

    </>

    )
}

export default PageWrapper;