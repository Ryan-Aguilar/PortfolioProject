import React from 'react';

/*
const InfoCard = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm 
                    transition-all duration-300 transform hover:-translate-y-2 
                    hover:scale-105 hover:bg-gray-400 hover:shadow-2xl cursor-pointer">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
*/

const InfoCard = ({ imageSrc, title, description }) => {
  return (
    <div className="w-80 bg-white rounded-lg shadow-md overflow-hidden 
                    transition-transform duration-300 transform hover:scale-105 
                    hover:shadow-xl hover:bg-gray-100 cursor-pointer">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
