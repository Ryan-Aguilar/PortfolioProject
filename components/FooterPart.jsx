import React from 'react';

const FooterPart = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Ryan Aguilar. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="ryanevo310@gmail.com" className="hover:text-[#23bdff] transition">Email</a>
          <a href="https://github.com/Ryan-Aguilar" target="_blank" rel="noopener noreferrer" className="hover:text-[#23bdff] transition">GitHub</a>
          <a href="https://www.linkedin.com/in/ryan-aguilar-344357297/" target="_blank" rel="noopener noreferrer" className="hover:text-[#23bdff] transition">LinkedIn</a>
          <a href="https://docs.google.com/document/d/1sY9k8owYDbR0K9VK96QH1zUV_Fuy_ZW-a45GXvbUVJc/edit?tab=t.0" className="hover:text-[#23bdff] transition">resume</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterPart;