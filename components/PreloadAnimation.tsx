// components/PreloadAnimation.tsx

import { useState, useEffect } from "react";

const PreloadAnimation = () => {


    return (
      <div className="bg-black fixed inset-0 grid place-content-center z-50 heading1-bold">
        <div className="preload heading1-bold">
          <span style={{ animationDelay: "0.1s" }}>9</span>
          <span style={{ animationDelay: "0.2s" }}>J</span>
          <span style={{ animationDelay: "0.3s" }}>A</span>
          <span style={{ animationDelay: "0.4s" }}>K</span>
          <span style={{ animationDelay: "0.5s" }}>9</span>
          <span style={{ animationDelay: "0.6s" }}>.</span>
          <span style={{ animationDelay: "0.7s" }}>.</span>
          <span style={{ animationDelay: "0.8s" }}>.</span>
          <span style={{ animationDelay: "0.9s" }}>.</span>
        </div>
      </div>
    );
  };
  
  export default PreloadAnimation;
  