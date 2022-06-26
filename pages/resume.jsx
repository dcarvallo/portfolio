import React from 'react';
import Head from 'next/head'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Wrapper from '../components/Wrapper';



const resume = () => {
  return (
    <Wrapper>
      <Head>
        <title>Daniel Carvallo | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
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
        <p>



          I love new challenges and I don&apos;t give up easily. 
          Innovative and motivated by web development
          with experience in differents project, 
          I&apos;ve been able to adapt to the situations I faced.
        </p>

        <div className=' py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Education</h5>
          <ul className='list-disc list-inside'>
            <li>Systems Engineer</li>
            <li>Master&apos;s degree in Information Technologies and Computer Security</li>
            <li>Postgraduate of Ethical Hacking and Cybersecurity</li>
            <li>Certificate of Expert in Data Transmission</li>
            <li>Mikrotik Certified MTCNA: 2018-2021, MIKROTIK</li>
          </ul>
        </div>


        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
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
            Professional Experience
          </h5>
          <p className='italic'>
            <span className='font-bold'>Supreme Justice Court</span>
            <span className='px-2'>|</span>Sucre, Bolivia
          </p>
          <p className='py-1 italic'>Software Developer (2021)</p>
          <ul className='list-disc px-7 py-1 leading-relaxed'>
            <li>
              Part of the development team that developed a new software for the judicial system using the following technologies:
              <ul  className='list-disc list-inside'>
                <li> Scrum</li>
                <li> OpenLdap</li>
                <li> Zabbix</li>
                <li> Nginx</li>
                <li> Local repository Verdaccio</li>
                <li> PostgresSQL</li>
                <li> Nodejs, NestJS Typescript, VueJs</li>
                <li> DevSecOps</li>
                <li> CI/CD, Docker, Kubernetes</li>
                <li> K6, Cypress, Sonarqube, Postman</li>
              </ul>
            </li>
          </ul>
        </div>
        <hr />
        <div className='py-4'>
          <p className='italic'>
            <span className='font-bold'>Freelancer</span>
            <span className='px-2'>|</span>Sucre, Bolivia
          </p>
          <p className='py-1 italic'>Software Developer (2020)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Freelance app developer for Mobile with:
            <ul className='list-disc list-inside'>
              <li>Flutter</li>
              <li>React Native</li>
              <li>NodeJS</li>
              <li>GraphQL</li>
              <li>Apollo Server</li>
            </ul>
            </li>
          </ul>
        </div>
        <hr />
        <div className='py-4'>
          <p className='italic'>
            <span className='font-bold italic'>Electric Company</span>
            <span className='px-2'>|</span>Sucre, Bolivia
          </p>
          <p className='py-1 italic'>Software Developer and support for TI Department (2017 - 2019)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Creation, administration and maintenance of intranet systems for the company.
            </li>
            <li>
              Management of incident systems, network monitoring system, log centralization system.
            </li>
            <li>
              Configuration of network devices, structured cabling and security issues.
            </li>
            <li>
              Update documentation according to procedures established in the information security management system with ISO27001.
            </li>
            <li>
              Basic work con AS/400 System
            </li>
            <li>
              Work with Windows and Linux servers.
            </li>
            <li>
              Help interns with IT tasks.
            </li>
            
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default resume;
