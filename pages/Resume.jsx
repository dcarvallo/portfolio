import React from 'react';
import Head from 'next/head'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Wrapper from '../components/Wrapper';
import { useRouter } from 'next/router';
import en from '../utils/i18n/en';
import es from '../utils/i18n/es';

const Resume = () => {

  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : es;

  return (
    <Wrapper>
      <Head>
        <title>Daniel Carvallo | {t.resume}</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>{t.resume}</h2>
        <div className='bg-gray-200 dark:bg-gray-800 dark:border-2 rounded-xl my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Daniel Carvallo</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/daniel-carvallo-molina/'
              target='_blank'
              rel="noreferrer"
              className='mr-2'
            >
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 bg-blue-100 dark:bg-gray-800 dark:border-4 dark:shadow-none cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaLinkedinIn size={20} />
              </div>
            </a>
            <a href='https://github.com/dcarvallo' target='_blank' rel="noreferrer">
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 bg-blue-100 dark:bg-gray-800 dark:border-4 dark:shadow-none cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaGithub size={20} />
              </div>
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <p>
            Web Development{' '}
            <span className='px-1'>|</span> Full Stack Developer
          </p>
        </div>
        <div className='flex justify-center'>
          <p className='w-4/5 text-center'>{t.resumeDescription}</p>
        </div>

        <div className=' py-4'>
          <h5 className='text-center underline text-[18px] py-2'>{t.education}</h5>
          <ul className='list-disc list-inside'>
            <li>{t.education1}</li>
            <li>{t.education2}</li>
            <li>{t.education3}</li>
            <li>{t.education4}</li>
            <li>{t.education5}</li>
          </ul>
        </div>


        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2 flex flex-wrap justify-center' >
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>
            Full Stack Web Developer <span className='px-2'>|</span> 
            HTML<span className='px-2'>|</span>
            CSS<span className='px-2'>|</span>
            Javascript<span className='px-2'>|</span>
            Typescript<span className='px-2'>|</span>
            React<span className='px-2'>|</span>
            NextJS<span className='px-2'>|</span>
            VueJS<span className='px-2'>|</span>
            Tailwind<span className='px-2'>|</span> 
            Material UI<span className='px-2'>|</span> 
            Bootstrap<span className='px-2'>|</span> 
            Docker - Kubernetes<span className='px-2'>|</span> 
            NodeJS<span className='px-2'>|</span> 
            NestJS<span className='px-2'>|</span> 
            Laravel
          </p>
        </div>

        <div className='py-4'>
          <h5 className='text-center underline text-[18px] py-4'>
            {t.professionalExperience}
          </h5>
          <p className='italic'>
            <span className='font-bold'>{t.pe3Name}</span>
            <span className='px-2'>|</span>Sucre, Bolivia
          </p>
          <p className='py-1 italic'>{t.pe3Time}</p>
          <ul className='list-disc px-7 py-1 leading-relaxed'>
            <li>
              {t.pe3Desc1}
              <ul  className='list-disc list-inside'>
                <li> {t.pe3Desc2}</li>
                <li> {t.pe3Desc3}</li>
                <li> {t.pe3Desc4}</li>
                <li> {t.pe3Desc5}</li>
                <li> {t.pe3Desc6}</li>
                <li> {t.pe3Desc7}</li>
                <li> {t.pe3Desc8}</li>
                <li> {t.pe3Desc9}</li>
                <li> {t.pe3Desc10}</li>
              </ul>
            </li>
          </ul>
        </div>
        <hr />
        <div className='py-4'>
          <p className='italic'>
            <span className='font-bold'>{t.pe2Name}</span>
            <span className='px-2'>|</span>Sucre, Bolivia
          </p>
          <p className='py-1 italic'>{t.pe2Time}</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            {t.pe2Desc1}
            <ul className='list-disc list-inside'>
              <li>{t.pe2Desc2}</li>
              <li>{t.pe2Desc3}</li>
              <li>{t.pe2Desc4}</li>
              <li>{t.pe2Desc5}</li>
              <li>{t.pe2Desc6}</li>
            </ul>
            </li>
          </ul>
        </div>
        <hr />
        <div className='py-4'>
          <p className='italic'>
            <span className='font-bold italic'>{t.pe1Name}</span>
            <span className='px-2'>|</span>Sucre, Bolivia
          </p>
          <p className='py-1 italic'>{t.pe1Time}</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>{t.pe1Desc1}</li>
            <li>{t.pe1Desc2}</li>
            <li>{t.pe1Desc3}</li>
            <li>{t.pe1Desc4}</li>
            <li>{t.pe1Desc5}</li>
            <li>{t.pe1Desc6}</li>
            <li>{t.pe1Desc7}</li>
            
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default Resume;
