import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { FaInstagram } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import styles from '../style';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`w-full flex py-6 justify-between items-center ${styles.navbar}`}>
      <img src={logo} alt='GGChurch' className='w-[120px] h-[40px] z-[100]' />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1 z-[100]'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[20px] text-yellow-600 ${
              index === navLinks.length - 1 ? styles.rightMargin : 'mr-10'
            }`}
          >
            {nav.external ? (
              <a href={nav.url} target="_blank" rel="noopener noreferrer">
                {nav.title === 'Sermons' ? <FaInstagram /> : nav.title}
              </a>
            ) : nav.url.startsWith('/') ? (
              <RouterLink to={nav.url}>{nav.title}</RouterLink>
            ) : (
              <ScrollLink
                to={nav.id}
                smooth={true}
                duration={500}
                offset={-70} // Adjust this value according to your navbar height
              >
                {nav.title}
              </ScrollLink>
            )}
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] z-[100] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-white-opacity-100 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-x1 sidebar`}
        >
          <ul className='list-none flex flex-col justify-end items-end flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-white text-[16px] ${
                  index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                }`}
              >
                {nav.external ? (
                  <a href={nav.url} target="_blank" rel="noopener noreferrer">
                    {nav.title}
                  </a>
                ) : nav.url.startsWith('/') ? (
                  <RouterLink to={nav.url}>{nav.title}</RouterLink>
                ) : (
                  <ScrollLink
                    to={nav.id}
                    smooth={true}
                    duration={500}
                    offset={-70} // Adjust this value according to your navbar height
                  >
                    {nav.title}
                  </ScrollLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
