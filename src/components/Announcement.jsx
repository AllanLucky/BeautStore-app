import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

const Announcement = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    if (typewriterRef.current) {
      const typewriter = new Typewriter(typewriterRef.current, {
        loop: true,       // repeat indefinitely
        delay: 75,        // typing speed
        deleteSpeed: 50,  // backspace speed
      });

      typewriter
        .typeString("Welcome to Bliss Beauty Shop!")
        .pauseFor(1500)
        .deleteAll()
        .typeString("Everything on Discounted!")
        .pauseFor(1500)
        .deleteAll()
        .typeString("50% Off on Selected Items!")
        .pauseFor(1500)
        .deleteAll()
        .start();
    }
  }, []);

  return (
    <div className="flex items-center justify-center bg-[#e9acd9] text-white text-[18px] font-bold h-[30px] p-8 rounded-sm">
      <span ref={typewriterRef}></span>
    </div>
  );
};

export default Announcement;
