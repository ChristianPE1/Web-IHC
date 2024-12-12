"use client"
//import { FiBarChart, FiBell, FiDollarSign, FiPlay } from "react-icons/fi";
import { AnimatePresence, motion } from "motion/react";
import { useWindowSize } from "@/components/landing/useWindowsSize";
import { useState } from "react";
import Image from "next/image";
import SocialPill from '../social-pill';

interface TeamProps {
   textColor: string;
}

export default function Team({ textColor }: TeamProps) {
   const [open, setOpen] = useState(items[0].id);


   return (
      <section className="p-4 ">
         <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-3xl sm:leading-tight md:text-5xl md:leading-tight m-auto">
            Equipo
         </h1>
         <div className="flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-6xl mx-auto shadow mt-10 overflow-hidden">
            {items.map((item) => {
               return (
                  <Panel
                     key={item.id}
                     open={open}
                     setOpen={setOpen}
                     id={item.id}
                     Icon={item.Icon}
                     names={item.names}
                     lastNames={item.lastNames}
                     name={item.name}
                     lName={item.lName}
                     title={item.title}
                     imgSrc={item.imgSrc}
                     index={item.index}
                     description={item.description}
                     email={item.email}
                     github={item.github}
                     textColor={textColor}
                  />
               );
            })}
         </div>
      </section>
   );
}


interface PanelProps {
   open: number;
   setOpen: (id: number) => void;
   id: number;
   Icon: string;
   title: string;
   names?: string[];
   lastNames?: string[];
   name?: string;
   lName?: string;
   imgSrc: string;
   description: string;
   index: boolean;
   email?: string;
   github?: string;
   textColor: string;
}

const Panel = ({ open, setOpen, id, Icon, title, names, lastNames, name, lName, index, imgSrc, description, github, email, textColor }: PanelProps) => {
   const { width } = useWindowSize();
   const isOpen = open === id;

   return (
      <>
         <button
            className="bg-white/90 hover:bg-slate-200 transition-colors p-3 border-r-[1px] border-b-[1px]  flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group "
            onClick={() => setOpen(id)}
         >
            <span
               style={{
                  writingMode: "vertical-lr",
               }}
               className="hidden lg:block text-xl font-bold rotate-180 text-black"
            >
               {title}
            </span>
            <span className="block lg:hidden text-xl font-light">{title}</span>
            <div className="w-6 lg:w-full aspect-square  text-white grid place-items-center">
               <Image src={Icon} alt={title} width={50} height={50} />
            </div>
            <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
         </button>

         <AnimatePresence>
            {isOpen && (
               <motion.div
                  key={`panel-${id}`}
                  variants={width && width > 1024 ? panelVariants : panelVariantsSm}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className={`w-full h-full overflow-hidden relative ${index ? 'bg-slate-700/20' : 'bg-slate-700/20'} flex items-center justify-center flex-row gap-10`}
               >
                  {index ? (
                     <Image src={imgSrc} alt={title} width={400} height={350} className='rounded-3xl' />
                  ) : (
                     <Image src={imgSrc} alt={title} width={200} height={200} className='rounded-lg' />
                  )}
                  <motion.div
                     variants={descriptionVariants}
                     initial="closed"
                     animate="open"
                     exit="closed"
                     className="text-center py-2 backdrop-blur-sm text-white w-2/5"
                  >
                     {names && lastNames && (
                        <div className=' rounded-3xl py-6'>
                           <h2 className="text-2xl">
                              {names.map((name, i) => (
                                 <span key={i} className="block">
                                    <span className={`font-bold ${textColor}`}> {name}</span> {lastNames[i]}</span>
                              ))}
                           </h2>
                        </div>
                     )}
                     {name && lName && (
                        <div className=' rounded-3xl py-6'>
                           <h2 className="text-2xl">
                              <span className={`font-bold ${textColor}`}> {name}</span> {lName}
                           </h2>
                        </div>
                     )}
                     <p className='text-base px-2 my-4'>{description}</p>
                     <nav className='flex gap-x-2 items-center justify-center'>
                        {github && (
                           <SocialPill href={github}>
                              <Image src="/icons/github.svg" alt="github" width={20} height={20} />
                              <p>Github</p>
                           </SocialPill>
                        )}
                        {email && (
                           <SocialPill href={`mailto:${email}`}>
                              <Image src="/icons/mail.svg" alt="mail" width={20} height={20} />
                              <p>{email}</p>
                           </SocialPill>
                        )}
                     </nav>
                  </motion.div>
               </motion.div>
            )}
         </AnimatePresence>
      </>
   );
};


const panelVariants = {
   open: {
      width: "100%",
      height: "100%",
   },
   closed: {
      width: "0%",
      height: "100%",
   },
};

const panelVariantsSm = {
   open: {
      width: "100%",
      height: "200px",
   },
   closed: {
      width: "100%",
      height: "0px",
   },
};

const descriptionVariants = {
   open: {
      opacity: 1,
      y: "0%",
      transition: {
         delay: 0.125,
      },
   },
   closed: { opacity: 0, y: "100%" },
};

const items = [
   {
      id: 1,
      title: "Miembros del equipo",
      Icon: "team.svg",
      imgSrc:
         "/trabajo-en-equipo.webp",
      names: ["Saul", "Christian", "Sergio"],
      lastNames: ["Condori ", "Pardavé ", "Mena "],
      description:
         "Somos un grupo de estudiantes de la carrera de Ciencia de la Computación de la Universidad Nacional de San Agustín. Nos especializamos en el desarrollo de videojuegos y aplicaciones web.",
      index: true,
      email: "example@gmail.com"
   },
   {
      id: 2,
      title: "Saul Condori Machaca",
      name: "Saul ",
      lName: "Condori Machaca",
      Icon: "user.svg",
      imgSrc:
         "/christian.jpg",
      description:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
      index: false,
      email: "scondorim@unsa.edu.pe"
   },
   {
      id: 3,
      title: "Christian Pardavé Espinoza",
      Icon: "user.svg",
      name: "Christian ",
      lName: "Pardavé Espinoza",
      imgSrc:
         "/christian.jpg",
      description:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
      index: false,
      email: "cpardave@unsa.edu.pe",
      github: "https://github.com/ChristianPE1"
   },
   {
      id: 4,
      title: "Sergio Mena Quispe",
      name: "Sergio",
      lName: "Mena Quispe",
      Icon: "user.svg",
      imgSrc:
         "/trabajo-en-equipo.webp",
      description:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
      index: false,
      email: "smenaq@unsa.edu.pe"
   },
];