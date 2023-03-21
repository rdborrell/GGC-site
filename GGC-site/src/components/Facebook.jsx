import React from 'react'

const Facebook = () => {
  return (
    <div dangerouslySetInnerHTML={{__html: "<iframe src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100087298636337&tabs=timeline&width=366&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId' width='366' height='331' style='border:none;overflow:hidden' scrolling='no' frameborder='0' allowfullscreen='true' allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share' />"}} />
  )
}

export default Facebook