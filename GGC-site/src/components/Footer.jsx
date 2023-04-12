import React from 'react'
import ChurchCenter from './ChurchCenter'

const Footer = () => {
  return (
    <div class=" bg-transparent">
        <div class="max-w-2xl mx-auto text-white py-10">
            <div class="text-center font-poppins">
                <h3 class="text-3xl mb-3"> Know Christ. Love Christ. Share Christ. </h3>
                <p> ggchurch@ggc.org </p>
                <p> 151 Sids Way Summersville, WV 26651 </p>
                <p> 304-123-4567 </p>
            </div>
            <div class="mt-10 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
                <p class="order-2 md:order-1 mt-8 md:mt-0 font-poppins"> Grace Gospel Church </p>
                <div class="order-1 md:order-2 font-poppins">
                    <span class="px-2"><a href={`#home`}>Home</a></span>
                    <span class="px-2"><a href={`#about`}>About</a></span>
                    <span class="px-2"><a href={`#findUs`}>Find Us</a></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer