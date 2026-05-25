import React from "react";

/**
 * Static glow orbs — no animation, just positioned + blurred.
 * Matches the Kern Reliability Hub approach: filter: blur + opacity,
 * no keyframe animations. This is why their scroll feels smooth —
 * the browser never repaints these layers.
 */
export function BgBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Orb 1: Purple, top left — anchors the hero */}
      <div
        className="absolute rounded-full"
        style={{
          left: "-10%",
          top: "5%",
          width: 420,
          height: 420,
          background: "#7e41f8",
          filter: "blur(80px)",
          opacity: 0.45,
        }}
      />

      {/* Orb 2: Indigo/blue, top right — balances hero */}
      <div
        className="absolute rounded-full"
        style={{
          right: "-10%",
          top: "15%",
          width: 420,
          height: 420,
          background: "#4f46e5",
          filter: "blur(80px)",
          opacity: 0.35,
        }}
      />

      {/* Orb 3: Deep violet, mid-page — features section */}
      <div
        className="absolute rounded-full"
        style={{
          left: "50%",
          top: "40%",
          marginLeft: -200,
          width: 400,
          height: 400,
          background: "#8A2EFF",
          filter: "blur(100px)",
          opacity: 0.25,
        }}
      />

      {/* Orb 4: Blue, bottom section */}
      <div
        className="absolute rounded-full"
        style={{
          right: "-5%",
          bottom: "10%",
          width: 350,
          height: 350,
          background: "#4D6BFF",
          filter: "blur(80px)",
          opacity: 0.3,
        }}
      />
    </div>
  );
}
