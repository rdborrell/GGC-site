import React from 'react'
import {playStoreBadge} from '../assets';

const ChurchCenter = () => {
  return (
    <section style={{ paddingBottom: '20px' }}>
        <h1 style={{ display: 'flex', justifyContent: 'center' }} className='flex-1 font-poppins font-semibold ss:text-[32px] text-[25px] text-white ss:leading-[100.8px] leading-[75px]'>
            Interested in giving? Download Church Center!
        </h1>
        <section style={{ display: 'flex', justifyContent: 'center' }}>
            <a href="https://play.google.com/store/apps/details?id=com.ministrycentered.churchcenter&hl=en_US&gl=US" style={{ display: 'inline-block', overflow: 'hidden', borderRadius: '13px', width: '250px', height: '110px' }}>
                <img src={playStoreBadge} alt="Download on the Play Store" style={{ borderRadius: '13px', width: '250px', height: '110px' }} />
            </a>

            <a href="https://apps.apple.com/us/app/church-center-app/id1357742931?itsct=apps_box_badge&amp;itscg=30200" style={{ display: 'inline-block', overflow: 'hidden', borderRadius: '13px', width: '250px', height: '110px' }}>
                <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1543190400" alt="Download on the App Store" style={{ borderRadius: '13px', width: '250px', height: '110px' }} />
            </a>
        </section>
    </section>
  )
}

export default ChurchCenter