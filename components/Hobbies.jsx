import React from 'react';
import InfoCard from './InfoCard';
import ProfilePic from '../assets-images/mexicosoccer.jpg';
import wProfilePic from '../assets-images/workout.jpg';
import eProfilePic from '../assets-images/eminem.jpg';
import pProfilePic from '../assets-images/playerpro.JPG';

const Hobbies = () => {
  return (
    <div className='w-full py-10 px-4 flex justify-center flex-wrap gap-6'>
      <InfoCard 
        imageSrc={ProfilePic}
        title="Soccer" 
        description="I've been playing soccer since I was a young boy"
      /> 
      <InfoCard 
        imageSrc={wProfilePic}
        title="Working Out" 
        description="Just trying to be a bit better every day."
      />
      <InfoCard 
        imageSrc={eProfilePic}
        title="Listening to music" 
        description="Having over 1000 liked songs."
      />
      <InfoCard 
        imageSrc={pProfilePic}
        title="Pets" 
        description="Spending time with my pets"
      />
    </div>
  );
};

export default Hobbies;
