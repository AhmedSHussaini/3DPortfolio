import React, { useEffect } from 'react';
import Typed from 'typed.js';

function TypingAnimation() {
    useEffect(() => {
      const options = {
        strings: ["Developer.", "Designer.", "Creator."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
      };
  
      const typed = new Typed(".typing", options);
  
      return () => {
        typed.destroy();
      };
    }, []);
  
    return (
      <span className="typing text-[#915EFF]"></span>
    );
  }

  export default TypingAnimation;