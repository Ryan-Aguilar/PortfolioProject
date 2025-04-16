import React, { useState } from 'react';

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "ryanevo310@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="text-center mt-4">
      <button
        onClick={handleCopy}
        className="bg-[#23bdff] text-black px-4 py-2 rounded-md font-medium hover:bg-[#1aa2e0] transition-all"
      >
        {copied ? 'Copied!' : 'Copy Email'}
      </button>
    </div>
  );
};

export default CopyEmailButton;
