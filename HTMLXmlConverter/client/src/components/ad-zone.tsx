import { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface AdZoneProps {
  position: "top" | "bottom" | "left" | "right";
  className?: string;
}

export function AdZone({ position, className }: AdZoneProps) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const adConfig = position === 'top' || position === 'bottom' 
      ? {
          key: '3157ae50a2c9507ac1ad5ac90d21b875',
          width: 728,
          height: 90
        }
      : {
          key: 'be3bc7ef8bc5d92cb52fbee00b0d7fee',
          width: 160,
          height: 600
        };

    // Create and append the first script
    const script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.text = `
      atOptions = {
        'key' : '${adConfig.key}',
        'format' : 'iframe',
        'height' : ${adConfig.height},
        'width' : ${adConfig.width},
        'params' : {}
      };
    `;

    // Create and append the second script
    const script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.src = `//garmentclimbinghotel.com/${adConfig.key}/invoke.js`;

    if (adRef.current) {
      // Clear any existing scripts
      while (adRef.current.firstChild) {
        adRef.current.removeChild(adRef.current.firstChild);
      }
      adRef.current.appendChild(script1);
      adRef.current.appendChild(script2);
    }

    // Cleanup function
    return () => {
      if (adRef.current) {
        while (adRef.current.firstChild) {
          adRef.current.removeChild(adRef.current.firstChild);
        }
      }
    };
  }, [position]); // Only re-run if position changes

  return (
    <div 
      ref={adRef}
      className={cn(
        "bg-muted/50 border border-border rounded-md flex items-center justify-center",
        position === "top" && "w-[728px] h-[90px] mx-auto",
        position === "bottom" && "w-[728px] h-[90px] mx-auto",
        position === "left" && "w-[160px] h-[600px]",
        position === "right" && "w-[160px] h-[600px]",
        "md:block hidden", // Hide on mobile
        className
      )}
    />
  );
}