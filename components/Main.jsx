import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Wrapper from './Wrapper'
import en from '../utils/i18n/en';
import es from '../utils/i18n/es';

const Main = () => {
  const router = useRouter()
  const {locale} = router;
  const t = locale === 'en' ? en : es;
  return (
    <Wrapper>
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-8 flex justify-center items-center'>
        <div className='flex flex-col md:flex-row'>
          <div>
            <p className='uppercase text-sm tracking-widest text-gray-600 dark:text-gray-100'>
              {t.connect}
            </p>
            <h1 className='py-4 text-gray-700 dark:text-gray-100'>
              {t.hi} <span className='text-[#545aff]'> Daniel Carvallo</span>
            </h1>
            <h1 className='py-2 text-gray-700 dark:text-gray-100'>Software Developer</h1>
            <p className='py-4 text-gray-600 dark:text-gray-100 max-w-[70%] m-auto'>
              {t.mainDescription}
            </p>
          </div>
          <div className='flex md:flex-col gap-4 items-center justify-between max-w-[330px] m-auto px-4 hover:transform-none'>
            <a
              href='https://www.linkedin.com/in/daniel-carvallo-molina/'
              target='_blank'
              rel="noreferrer"
              className='linkone'
            >
              <div className='rounded-full shadow-lg dark:shadow-none dark:border-2 dark:border-white shadow-gray-400 p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a href='https://github.com/dcarvallo' target='_blank' rel="noreferrer" className='linktwo'> 
              <div className='rounded-full shadow-lg dark:shadow-none dark:border-2 dark:border-white shadow-gray-400 p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <a href='#contact' className='linkthree' >
              <div className='rounded-full shadow-lg dark:shadow-none dark:border-2 dark:border-white shadow-gray-400 p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </a>
            <Link href='/resume' >
              <a href="#"className='linkfour hover:scale-110 ease-in duration-300'>
                <div className=' rounded-full shadow-lg dark:shadow-none dark:border-2 dark:border-white shadow-gray-400 p-4 md:p-6 cursor-pointer '>
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
