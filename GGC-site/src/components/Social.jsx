import React from 'react'
import styles from '../style'
import ContactForm from './ContactForm'
import Facebook from './Facebook'
import Maps from './Maps'


const Social = () => {
  return(
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      
      <div>
        <div className='sm:float-left float-center'>
            <h1 className='flex-1 font-poppins font-semibold ss:text-[32px] text-[25px] text-white ss:leading-[100.8px] leading-[75px]'>
            Connect on
            <span className='facebook_blue'> Facebook!</span>
            <Facebook/>
            </h1>
        </div>
      </div>

        <div>
        <div className='sm:float-left float-center'>
            <h1 className='flex-1 font-poppins font-semibold ss:text-[28px] text-[20px] text-white ss:leading-[100.8px] leading-[75px]'>
            Send Us An
            <span className='facebook_blue'> Email!</span>
            <ContactForm/>
            </h1>
        </div>
        
        <div className='sm:float-right float-center'>
            <h1 className='flex-1 font-poppins font-semibold ss:text-[32px] text-[25px] text-white ss:leading-[100.8px] leading-[75px]'>
            Find us on
            <span className='maps_red'> Maps!</span>
            <Maps/>
            </h1>
        </div>
      </div>
    </section>
  )
}

export default Social