
interface BackgroundProps {
   circleColor: string;
   backgroundColor: string;
}

export default function Background({ circleColor, backgroundColor }: BackgroundProps) {
   return (
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
         <div className={`relative h-full w-full ${backgroundColor}`}>
            <div
               className="absolute bottom-0 left-[-18%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full"
               style={{
                  background: `radial-gradient(circle farthest-side, ${circleColor} 30%, rgba(255,255,255,0))`,
               }}
            />
            <div
               className="absolute bottom-0 right-[-18%] top-[-10%] h-[500px] w-[500px] rounded-full"
               style={{
                  background: `radial-gradient(circle farthest-side, ${circleColor} 30%, rgba(255,255,255,0))`,
               }}
            />
         </div>
      </div>
   );
};

