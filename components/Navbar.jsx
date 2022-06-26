import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import {BiMoon,BiSun} from 'react-icons/bi'

const routes = ['/inertiasystem', '/erpsystem', '/rentcar', '/meet']

const Navbar = () => {
  const {systemTheme, theme, setTheme} = useTheme(); 
  const [mounted, setMounted] = useState(false);
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const router = useRouter();

  const renderTheme = () => {
    if(!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;
    
    if(currentTheme === 'dark'){
      return (
        <BiSun className='w-7 h-7 hover:scale-110 ease-in duration-300 rounded-full' role='button' onClick={() => setTheme('light')} />
      )
    }
    else{
      return (
        <BiMoon className='w-7 h-7 hover:scale-110 ease-in duration-300 rounded-full' role='button' onClick={() => setTheme('dark')} />
      )
    }
  }

  // useEffect(() => {
  //   setTimeout(() => {

  //     if (routes.includes(router.asPath) ) {
  //       setNavBg('transparent');
  //       setLinkColor('#fff');
  //     } else {
  //       setNavBg('#ecf0f3');
  //       setLinkColor('#000');
  //     }
  //   }, 600)
  // }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    setMounted(true)
    const handleShadow = () => {
      if (window.scrollY >= 90 && routes.includes(router.asPath) ) {
        setShadow(true);
        setLinkColor('#fff');
        setNavBg('#ecf0f3');
      } else  {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}`,color: `${linkColor}`  }}
      className={
        shadow
          ? 'fixed w-full h-14 z-[100] ease-in-out duration-300 '
          : 'fixed w-full h-14 z-[100]'
        }
    >
      <div className='flex justify-end md:justify-around items-center w-full h-full px-2 2xl:px-16 dark:bg-gray-700 dark:text-gray-100'>
       <div></div>
        <div>
          <ul className={`${linkColor=='#fff' ? 'text-white' : 'text-gray-700'} dark:text-gray-100 dark:bg-gray-700 hidden md:flex`}>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b cursor-pointer'>Home</li>
            </Link>
            
            <Link href='/#skills'>
              <li className='ml-10 text-sm uppercase hover:border-b cursor-pointer'>Skills</li>
            </Link>
            <Link href='/#projects'>
              <li className='ml-10 text-sm uppercase hover:border-b cursor-pointer'>
                Projects
              </li>
            </Link>
            <Link href="/resume">
            <li className='ml-10 text-sm uppercase hover:border-b cursor-pointer'>
                Resume
              </li>
            </Link>
            <Link href='/#contact'>
              <li className='ml-10 text-sm uppercase hover:border-b cursor-pointer'>
                Contact
              </li>
            </Link>
          </ul>


          <div
            // style={{ color: `${linkColor}`, cursor: 'pointer' }}
            onClick={handleNav}
            className='md:hidden hover:bg-slate-200 dark:bg-gray-600 p-3 dark:text-gray-100 cursor-pointer rounded mr-4 mt-1'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
        <div className='hidden md:flex'>
          {renderTheme()}
        </div>
      </div>

      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/50' : ''
        }
      >
        
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] dark:bg-gray-700 dark:text-gray-100 p-10 ease-in duration-300'
              : 'fixed left-[-150%] top-0 p-10 ease-in duration-300'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                  <a href="">

                DC
                  </a>
              </Link>
              {renderTheme()}
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg dark:shadow-none border shadow-gray-400 p-3 cursor-pointer hover:bg-slate-200'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Let`s build something together
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm cursor-pointer'>
                  Home
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm cursor-pointer'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm cursor-pointer'>
                  Projects
                </li>
              </Link>
              <Link href='/resume'>
                <li onClick={() => setNav(false)} className='py-4 text-sm cursor-pointer'>
                  Resume
                </li>
              </Link>
              <Link href='#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm cursor-pointer'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-blue-500'>
                Let`s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/daniel-carvallo-molina/'
                  target='_blank'
                  rel="noreferrer"
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/dcarvallo'
                  target='_blank'
                  rel="noreferrer"
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div onClick={()=>setNav(!nav)} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div onClick={()=>setNav(!nav)} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
