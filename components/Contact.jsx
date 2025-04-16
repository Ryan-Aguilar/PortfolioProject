import React from 'react'
import InfoCard from './InfoCard';
import contactp from '../assets-images/contactProfilePic.jpg'
const Contact = () => {
  return (
    <div className='w-full py-10 px-4 flex justify-center flex-wrap gap-6'>
        <InfoCard 
        imageSrc={contactp}
        title="Contact" 
        description="Feel free to contact me at any time via email. I try to respond within 24 hours."
      />
    </div>
  )
}

export default Contact