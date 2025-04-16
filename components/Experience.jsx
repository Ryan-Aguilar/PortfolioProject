import React from 'react';

const Experience = () => {
  const experienceData = [
    {
      title: "Computer Science Tutor - El Camino College",
      date: "2020 - 2024",
      description: "Lead students with coursework and homework by breaking down challenging concepts and encouraging questions to deepen their understanding."
    },
    {
      title: "Vice President - Google Developer Student Club",
      date: "2023 - 2024",
      description: "Led the core cabinet members and club members to develop applications using Google technologies. We also participated in the Google Developer Student Club Solution Challenge to address one of the 17 United Nations Sustainable Development Goals."
    },
    {
      title: "SI Coach - El Camino College",
      date: "2024 - Present",
      description: "Tutored and supported students in C++ Data Structures through lectures, labs, and custom self-made practice materials."
    },
  ];

  return (
    <div className="w-full text-white py-16 px-4" id="experience">
      <div className="max-w-[1000px] mx-auto relative">
        <h2 className="text-4xl font-bold mb-8 text-left px-14 text-[#23bdff]">Experiences</h2>

        <div className="absolute left-8 top-0 h-full border-l-4 border-[#23bdff]"></div>

        {experienceData.map((item, index) => (
          <div key={index} className="mb-10 ml-16 relative">
            <div className="w-4 h-4 bg-[#23bdff] rounded-full absolute -left-[18px] top-1.5 animate-pulse"></div>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.date}</p>
            <p className="text-md">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
