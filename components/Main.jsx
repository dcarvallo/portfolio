import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Wrapper from './Wrapper'
const Main = () => {
  return (
    <Wrapper>
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-8 flex justify-center items-center'>
        <div className='flex flex-col md:flex-row'>
          <div>
            <p className='uppercase text-sm tracking-widest text-gray-600'>
              Let&apos;s build something together
            </p>
            <h1 className='py-4 text-gray-700'>
              Hi, I&apos;m <span className='text-[#3157ff]'> Daniel Carvallo</span>
            </h1>
            <h1 className='py-2 text-gray-700'>Software Developer</h1>
            <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            I like to make new exceptional digital experiences with web technologies.
            </p>
          </div>
          <div className='flex md:flex-col gap-4 items-center justify-between max-w-[330px] m-auto px-4 hover:transform-none'>
            <a
              href='https://www.linkedin.com/in/daniel-carvallo-molina/'
              target='_blank'
              rel="noreferrer"
              className='linkone'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a href='https://github.com/dcarvallo' target='_blank' rel="noreferrer" className='linktwo'> 
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <a href='#contact' className='linkthree' >
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </a>
            <Link href='/resume' >
              <a href="#"className='linkfour hover:scale-110 ease-in duration-300'>
                <div className=' rounded-full shadow-lg shadow-gray-400 p-4 md:p-6 cursor-pointer '>
                  <BsFillPersonLinesFill />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </Wrapper>
  );
};

export default Main;