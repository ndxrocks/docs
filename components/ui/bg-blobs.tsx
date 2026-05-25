import React from "react";

export function BgBlobs() {
  const gpuStyle = {
    willChange: "transform",
    transform: "translate3d(0, 0, 0)",
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Orb 1: Purple, top left */}
      <div 
        className="absolute top-[8%] left-[-15%] w-[320px] sm:w-[500px] md:w-[700px] h-[320px] sm:h-[500px] md:h-[700px] rounded-full bg-kern/15 blur-[60px] sm:blur-[100px] md:blur-[140px] animate-float-slow" 
        style={gpuStyle} 
      />
      
      {/* Orb 2: Deep blue/purple, top right */}
      <div 
        className="absolute top-[18%] right-[-15%] w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] rounded-full bg-[#4f46e5]/10 blur-[60px] sm:blur-[90px] md:blur-[130px] animate-float-medium" 
        style={{ ...gpuStyle, animationDelay: "-5s" }} 
      />
      
      {/* Orb 3: Violet, middle left */}
      <div 
        className="absolute top-[48%] left-[-5%] w-[380px] sm:w-[550px] md:w-[750px] h-[380px] sm:h-[550px] md:h-[750px] rounded-full bg-[#9b6aff]/8 blur-[70px] sm:blur-[110px] md:blur-[150px] animate-float-fast" 
        style={{ ...gpuStyle, animationDelay: "-2s" }} 
      />

      {/* Orb 4: Indigo, bottom right */}
      <div 
        className="absolute bottom-[8%] right-[-10%] w-[320px] sm:w-[500px] md:w-[700px] h-[320px] sm:h-[500px] md:h-[700px] rounded-full bg-kern/12 blur-[60px] sm:blur-[100px] md:blur-[140px] animate-float-slow" 
        style={{ ...gpuStyle, animationDelay: "-10s" }} 
      />
    </div>
  );
}
