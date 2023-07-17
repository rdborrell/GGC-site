import React from 'react'
import styles from '../style'
import ContactForm from './ContactForm'
import Facebook from './Facebook'
import Maps from './Maps'
import { sundayService } from '../assets'


const Social = () => {
  return(
    <section id='findUs' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      
      <div>
        <div className='sm:float-left float-center'>
            <h1 className='flex-1 font-poppins font-semibold ss:text-[32px] text-[25px] text-white ss:leading-[100.8px] leading-[75px]'>
            Connect on
            <span className='facebook_blue'> Facebook!</span>
            <Facebook/>
            </h1>
        </div>
      </div>
      
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={sundayService} alt='sundayService' className='moveDown w-[75%] h-[auto] relative z-[5] hidden sm:block'/>
      </div>

      <div className='sm:float-right float-center'>
            <h1 className='flex-1 font-poppins font-semibold ss:text-[32px] text-[25px] text-white ss:leading-[100.8px] leading-[75px]'>
            Find us on
            <span className='maps_red'> Maps!</span>
            <Maps/>
            </h1>
      </div>
      
    </section>
  )
}

export default Social