import React from 'react'
import styles from '../style'
import {churchPicture} from '../assets'

const About = () => {
  return(
    <section id='about' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row justify-between w-full'>
          <h1 className='font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] h1Left'>
            About Us
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[900px] mt-5`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Sit amet nulla facilisi morbi. Mauris cursus mattis molestie a iaculis at erat.</p>
      </div>
    </section>
  )
}

export default About