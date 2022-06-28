import Image from 'next/image';
import React from 'react';
import glonemeet2 from '../public/assets/projects/sistemaerp/sistemaerp2.jpg'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import PAGE_TRANSITION from '../pageTransitions';
import {LazyMotion, domAnimation, motion} from 'framer-motion'
import { useRouter } from 'next/router';
import en from '../utils/i18n/en';
import es from '../utils/i18n/es';

const easing= [0.175,0.85,0.45,0.96]
const TOTAL_TIME = PAGE_TRANSITION.DURATION

const animateVariants = {
  initial: { 
    x:100
  },
  animate: {
    opacity: 1,
    x:0,
    transition: {
      duration: PAGE_TRANSITION.DURATION,
      ease: PAGE_TRANSITION.EASE
    },
    
  },
  exit: {
    // opacity: 0,
    x:100,
    transition: {
      duration: PAGE_TRANSITION.DURATION,
      delay: PAGE_TRANSITION.DURATION,
      ease: PAGE_TRANSITION.EASE
    }
  }
}


const Erpsystem = () => {

  const router = useRouter();
  const { locale }= router;
  const t = locale === 'en' ? en : es;

  return (
    <div className='w-full'>
      <div className='w-full h-[40vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[40vh] lg:h-[40vh] bg-black/80 dark:bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={glonemeet2}
          alt='Laravel project'
        />
        <motion.div variants={animateVariants} className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <motion.h2 className='py-2'
            animate={{x:0,opacity:1}}
            initial={{x:80, opacity:0}}
            exit={{x:40, opacity:0}}
            transition={{delay: 0.3}}
          >
            Base System with Laravel
          </motion.h2>
          <motion.h3
          animate={{x:0,opacity:1}}
          initial={{x:80, opacity:0}}
          exit={{x:40, opacity:0}}
          transition={{delay: 0.2}}
          >Vue JS | Laravel | Bootstrap </motion.h3>
        </motion.div>
      </div>

      <div className='w-11/12 max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4 md:col-span-3 lg:col-span-4'>
          <h2 className=' mb-4'>{t.overview}</h2>
          <motion.div
          initial={{y:100,opacity: 0}}
          animate={{y:0,opacity:1}}
          >
          <p className='text-xl mb-4'>
            {t.laravelDescription}
          </p>
          <div>
            <p>{t.laravelDesc1}</p>
            <ul className="list-disc pl-6">
              <li>{t.laravelDesc2}</li>
              <li>{t.laravelDesc3}</li>
              <li>{t.laravelDesc4}</li>
              <li>{t.laravelDesc5}</li>
              <li>{t.laravelDesc6}</li>
              <li>{t.laravelDesc7}</li>
              <li>{t.laravelDesc8}</li>
              <li>{t.laravelDesc9}</li>
              <li>{t.laravelDesc10}</li>
              <li>{t.laravelDesc11}</li>
              <li>{t.laravelDesc12}
                <ul  className="list-disc list-inside">
                  <li>{t.laravelDesc13}</li>
                  <li>{t.laravelDesc14}</li>
                  <li>{t.laravelDesc15}</li>
                  <li>{t.laravelDesc16}</li>
                  <li>{t.laravelDesc17}</li>
                  <li>{t.laravelDesc18}</li>
                  <li>{t.laravelDesc19}</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='mt-6'>

            <a href='https://sistemaerplaravel.herokuapp.com/' rel="noreferrer" target='_blank' className='bg-blue-500 text-white rounded px-8 py-2 mt-4 mr-8'>Demo</a>
            <a  href='https://github.com/dcarvallo/sistema-ERP' rel="noreferrer" target='_blank' className=' bg-blue-500 text-white rounded px-8 py-2 mt-4'>Code</a>
          </div>
          </motion.div>
        </div>
        <div className='col-span-4 md:col-span-2 lg:col-span-1 shadow-xl shadow-gray-400 dark:shadow-none dark:border-2 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>{t.technologies}</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 dark:text-gray-100 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Laravel
              </p>
              <p className='text-gray-600 dark:text-gray-100 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Bootstrap
              </p>
              <p className='text-gray-600 dark:text-gray-100 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Vue JS
              </p>
              <p className='text-gray-600 dark:text-gray-100 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Redis
              </p>
              <p className='text-gray-600 dark:text-gray-100 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Laravel Dusk
              </p>
            </div>
          </div>
        </div>
        <Link href={locale === 'en' ? '/#projects' : '/es/#projects'}>
          <p className='underline cursor-pointer'>{t.back}</p>
        </Link>
      </div>
    </div>
  );
};

export default Erpsystem;
