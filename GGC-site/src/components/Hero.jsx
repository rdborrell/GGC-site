import React from 'react'
import styles from '../style'
import {churchPicture} from '../assets'

const Hero = () => {
  return(
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]'>
            Grace Gospel <br className='sm:block hidden' />{" "}
            <span className='text-gradient'>Church</span>{" "}
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Sit amet nulla facilisi morbi. Mauris cursus mattis molestie a iaculis at erat.</p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={churchPicture} alt='churchPicture' className='w-[100%] h-[100%] relative z-[5] rounded-corners'/>
      </div>
      <div className='absolute z-[0] w-[60%] h-[45%] top-0 pink__gradient'/>
    </section>
  )
}

export default Hero