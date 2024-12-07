"use client"

import { motion } from 'motion/react'
import { FadeIn } from '@/utils/motion-transition'

interface MotionProps {
   children: React.ReactNode
   position: 'right' | 'bottom' | 'left' | 'top'
   className?: string
}

const TransitionComponent = (props: MotionProps) => {
   const { children, position, className } = props

   return (
      <motion.div variants={FadeIn(position)}
         initial="hidden"
         animate="visible"
         exit="hidden"
         className={className}
      >
         {children}
      </motion.div>
   )
}

export default TransitionComponent
