import React from 'react'

const Maps = () => {
  return (
    <div dangerouslySetInnerHTML={{__html: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1565.9939984804473!2d-80.85802237110364!3d38.279771086956565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884eab21273beca9%3A0x534eeca808b2de2b!2sNicholas%20County%20Senior%20Center!5e0!3m2!1sen!2sus!4v1677031944162!5m2!1sen!2sus' width='366' height='331' style='border:none;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade' />"}} />
  )
}

export default Maps