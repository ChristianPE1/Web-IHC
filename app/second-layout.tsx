

interface SecondLayoutProps {
   children: React.ReactNode;
}

export default function SecondLayout({ children }: SecondLayoutProps) {
   return (
      <div>
         
         {children}
      </div>
   );
   }