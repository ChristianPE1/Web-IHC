"use client";

import { transitionVariantPage } from '@/utils/motion-transition';
import { AnimatePresence, motion } from 'motion/react';

interface TransitionPageProps {
   bgColor: string;
}

const TransitionPage = ({ bgColor }: TransitionPageProps) => {
   return (
      <AnimatePresence mode="wait">
         <div>
            <motion.div
               className={`fixed top-full left-0 right-0 h-screen z-30 ${bgColor}`}
               variants={transitionVariantPage}
               initial='initial'
               animate='animate'
               exit="exit"
               transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
            >

            </motion.div>
         </div>
      </AnimatePresence>
   );
};

export default TransitionPage;