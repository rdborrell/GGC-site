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
        <p className={`${styles.paragraph} max-w-[900px] mt-5`}>Grace Gospel Church exists to know Christ, love Christ, and share Christ with all those in the greater Nicholas County Area. We are a gospel centered, Bible believing, historically orthodox, Christian Church located in Summersville WV. Please join us this week at any of our gatherings to proclaim the name of Jesus!</p>
      </div>
    </section>
  )
}

export default About