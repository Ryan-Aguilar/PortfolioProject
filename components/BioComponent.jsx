import React from 'react'
import Ryan from '../assets-images/homePagePic.jpg'

const BioComponent = () => {
  return (
    <div className='w-full bg-[#23bdff] py-6 px-4'>
      <div className='max-w-[1000px] mx-auto grid md:grid-cols-2'>
        
        {/* Column 1: Image */}
        <div>
          <img className='w-full' src={Ryan} alt="/" />
        </div>

        {/* Column 2: Background only here */}
        <div className='bg-[#f5f5f5] p-6'>
          <h2 className='text-2xl font-bold mb-4'>About Me</h2>
            <p>
                Hello, my name is Ryan Aguilar. I am currently a full-time Computer Science student at El Camino College. In addition to my studies, I work as a Supplemental Instruction Coach for a C++ Data Structures course, where I support students in understanding core programming concepts. I am passionate about continuous learning and dedicated to helping others achieve academic success.
            </p>
        </div>

      </div>
    </div>
  )
}

export default BioComponent