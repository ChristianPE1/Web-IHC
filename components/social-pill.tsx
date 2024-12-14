import { ReactNode } from 'react'

interface SocialPillProps {
   children: ReactNode,
   href: string
}

export default function SocialPill({ children, href }: SocialPillProps) {
   return (
      <a className='rounded-full border border-white/10 flex justify-center items-center gap-x-2 py-2 px-4 text-white bg-white/10 hover:bg-slate-400/30 transition cursor-pointer' href={href}>
         {children}
      </a>
   )
}