/*export const transitionVariantPage = {
   initial: { x: "100%", width: "100%" },
   animate: { x: "0%", width: "0%" },
   exit: { x: ["0%", "100%"], width: ["0%", "100%"] }
}*/

export const transitionVariantPage = {
   initial: { y: "-100%", height: "100%" },
   animate: { y: "0%", height: "100%" },
   exit: { y: ["0%", "100%"], height: ["100%", "100%"] }
};

export const FadeIn = (position: string) => {
   return {
      visible: {
         y: 0,
         x: 0,
         opacity: 1,
         transition: {
            type: "tween",
            duration: 1.5,
            ease: [0.25, 0.25, 0.25, 0.25],
            delay: 0.5
         }
      },
      hidden: {
         y: position === 'top' ? -80 : position === 'bottom' ? 80 : 0,
         x: position === 'right' ? 80 : position === 'left' ? -80 : 0,


         opacity: 1,
         transition: {
            type: "tween",
            duration: 1.5,
            ease: [0.25, 0.25, 0.25, 0.25],
            delay: 0.5
         }
      }
   }
}