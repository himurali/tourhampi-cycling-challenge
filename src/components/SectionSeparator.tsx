
import React from "react";
import { cn } from "@/lib/utils";
import AnimateOnScroll from "./AnimateOnScroll";

type SectionSeparatorProps = {
  className?: string;
  variant?: "chain" | "wave" | "mountain" | "simple";
  orientation?: "up" | "down";
  fillColor?: string;
  bgColor?: string;
};

const SectionSeparator = ({
  className,
  variant = "chain",
  orientation = "down",
  fillColor = "#ffffff",
  bgColor = "rgba(255, 133, 0, 0.1)",
}: SectionSeparatorProps) => {
  // Flip the separator based on orientation
  const transform = orientation === "up" ? "rotate(180deg)" : "rotate(0deg)";
  
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {variant === "wave" && (
        <AnimateOnScroll animation="fade-in">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto" style={{ transform }}>
            <path 
              fill={fillColor} 
              fillOpacity="1" 
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,56C1248,48,1344,32,1392,24L1440,16L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </AnimateOnScroll>
      )}

      {variant === "mountain" && (
        <AnimateOnScroll animation="fade-in">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto" style={{ transform }}>
            <path 
              fill={fillColor} 
              d="M0,0L120,10.7C240,21,480,43,720,48C960,53,1200,43,1320,37.3L1440,32L1440,100L1320,100C1200,100,960,100,720,100C480,100,240,100,120,100L0,100Z"
            ></path>
          </svg>
        </AnimateOnScroll>
      )}

      {variant === "simple" && (
        <AnimateOnScroll animation="scale-in">
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-hampi-orange to-transparent"></div>
        </AnimateOnScroll>
      )}

      {variant === "chain" && (
        <AnimateOnScroll animation="fade-in">
          <div className="py-4" style={{ background: bgColor }}>
            <div className="flex justify-center items-center overflow-hidden h-16">
              <div className="flex w-full justify-center relative">
                {/* Chain pattern */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-8 overflow-hidden">
                    <div className="flex space-x-4 animate-scroll-slow">
                      {Array.from({ length: 30 }).map((_, i) => (
                        <div key={i} className="flex items-center space-x-4">
                          <div className="w-4 h-4 bg-hampi-orange rounded-full opacity-80"></div>
                          <div className="w-8 h-2 bg-hampi-orange/30 rounded-full"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Bicycle icon in the center */}
                <div className="z-10 bg-white rounded-full p-3 shadow-lg animate-bounce-in">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5,12a3.5,3.5 0 1,0 7,0a3.5,3.5 0 1,0 -7,0" stroke="#3A78C9" strokeWidth="1.5" />
                    <path d="M15.5,12a3.5,3.5 0 1,0 7,0a3.5,3.5 0 1,0 -7,0" stroke="#3A78C9" strokeWidth="1.5" />
                    <path d="M5 12L12 12" stroke="#3A78C9" strokeWidth="1.5" />
                    <path d="M15 12L19 12" stroke="#3A78C9" strokeWidth="1.5" />
                    <path d="M9 9L15 4" stroke="#3A78C9" strokeWidth="1.5" />
                    <path d="M9 9L15 12" stroke="#3A78C9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      )}
    </div>
  );
};

export default SectionSeparator;
