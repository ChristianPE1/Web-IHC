"use client";

import { transitionVariantPage } from '@/utils/motion-transition';
import { AnimatePresence, motion } from 'framer-motion';

interface TransitionPageProps {
   bgColor: string;
}

const TransitionPage = ({ bgColor }: TransitionPageProps) => {
   return (
      <AnimatePresence mode="wait">
         <div>
            <motion.div
               className={`fixed top-0 bottom-0 right-full w-screen z-30 ${bgColor}`}
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