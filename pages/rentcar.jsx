import Image from 'next/image';
import React from 'react';
import glonemeet2 from '../public/assets/projects/glonemeet/glonemeet2.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import PAGE_TRANSITION from '../pageTransitions';
import {LazyMotion, domAnimation, motion} from 'framer-motion'

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


const meet = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={glonemeet2}
          alt='/'
        />
        <motion.div variants={animateVariants} className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <motion.h2 className='py-2'
            animate={{x:0,opacity:1}}
            initial={{x:80, opacity:0}}
            exit={{x:40, opacity:0}}
            transition={{delay: 0.3}}
          >
            Google Meet clone
          </motion.h2>
          <motion.h3
          animate={{x:0,opacity:1}}
          initial={{x:80, opacity:0}}
          exit={{x:40, opacity:0}}
          transition={{delay: 0.2}}
          >React JS | Material UI | Twilio</motion.h3>
        </motion.div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <h2>Overview</h2>
          <motion.div
          initial={{y:100,opacity: 0}}
          animate={{y:0,opacity:1}}
          >
          <p className='text-xl'>
          This app was created like a Google Meet Clone, it has the following characteristics:
          </p>
          <div>

            <ul className="list-disc ">
              <li>Google account authentication</li>
              <li>User types: [&apos;Room Creator&apos;, &apos;Participant&apos;]</li>
              <li>List of participants with search</li>
              <li>Chat room</li>
              <li>Video on/off | Audio on/off | Share screen</li>
              <li>View modes</li>
              <li>Reactions with emojis</li>
              <li>Room Creator:
                <ul className="list-disc list-inside">
                  <li>Permit, reject or admit all participants</li>
                  <li>Remove participants</li>
                  <li>Mute participants</li>
                  <li>End meeting for everybody</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='mt-6'>

            <a href='https://react-twilio-serverless-8560-dev.twil.io/index.html' rel="noreferrer" target='_blank' className='bg-blue-500 text-white rounded px-8 py-2 mt-4 mr-8'>Demo</a>
            <a  href='https://github.com/dcarvallo/glone-meet' rel="noreferrer" target='_blank' className=' bg-blue-500 text-white rounded px-8 py-2 mt-4'>Code</a>
          </div>
          </motion.div>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Material UI
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Twilio
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Auth0
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default meet;