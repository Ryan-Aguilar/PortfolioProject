import React from 'react';
import { ReactTyped as Typed } from "react-typed";

const Hero = () => {
  return (
    <div className="w-full bg-black text-white" id="hero">
      <div className="max-w-[600px] mx-auto text-center flex flex-col justify-center items-center px-4">
        {/*<p className="text-[#23bdff] font-bold text-xl mb-2">Hi, I'm Ryan Aguilar</p> */}
        {/*<h1 className="md:text-5xl sm:text-4xl text-3xl font-bold mb-4">Computer Science Student</h1> */}
        <div className="flex flex-wrap justify-center items-center">
          <p className="md:text-3xl sm:text-2xl text-xl font-bold">
            Coding experience in&nbsp;
          </p>
          <span className="md:text-3xl sm:text-2xl text-xl font-bold text-[#23bdff]">
            <Typed
              strings={['C++', 'Java', 'JavaScript', 'Dart', 'HTML', 'React']}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </span>
        </div>

        <p className="md:text-lg text-md text-gray-400 mt-4">
          Passionate about building projects and solving problems through code.
        </p>
      </div>
    </div>
  );
};

export default Hero;
