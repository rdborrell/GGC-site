import { useState } from 'react'
import { close, logo, menu} from "../assets"
import { navLinks } from '../constants'
const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    
    return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>

      <img src={logo} 
           alt='GGChurch'
           className='w-[120px] h-[40px]'/>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1 z-[100]'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[20px] text-yellow-600
            ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle((prev) => !prev)}
          />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-white-opacity-100 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-x1 sidebar`}>
          <ul className='list-none flex flex-col justify-end items-end flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-white text-[16px]
                ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar