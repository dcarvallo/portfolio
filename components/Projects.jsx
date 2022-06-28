
import { useRouter } from 'next/router';
import React from 'react';
import inertia1 from '../public/assets/projects/base-inertia/inertia1.jpg';
import cars from '../public/assets/projects/cars/cars.jpg';
import glonemeet from '../public/assets/projects/glonemeet/glonemeet1.jpg';
import sistemaerp from '../public/assets/projects/sistemaerp/sistemaerp2.jpg';
import ProjectItem from './ProjectItem';
import en from "../utils/i18n/en"
import es from "../utils/i18n/es"

const Projects = () => {
  const router = useRouter();
  const {locale} = router;
  const t = locale === "en" ? en : es;
  
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <h3 className='py-4 text-2xl'>{t.projectDescription}</h3>
        <div className='grid md:grid-cols-2 gap-8'>
        <ProjectItem
            title='Glone Meet'
            backgroundImg={glonemeet}
            projectUrl='/Meet'
          >
            <span className='p-1 bg-slate-500 text-white rounded-md text-xs'> React</span>
            <span className='p-1 bg-slate-500 text-white rounded-md text-xs'> Material UI</span>
            <span className='p-1 bg-slate-500 text-white rounded-md text-xs'> Twilio</span>
            <span className='p-1 bg-slate-500 text-white rounded-md text-xs'> Auth0</span>
          </ProjectItem>
          <ProjectItem
            title='Inertia base system'
            backgroundImg={inertia1}
            projectUrl='/Inertiasystem'
          >
            <span className='p-1 bg-slate-500 text-white rounded-md text-xs'> Laravel - Inertia</span>
            <span className='p-1 bg-slate-500 text-white rounded-md text-xs'> Tailwind</span>
            <span className='p-1 bg-slate-500 text-white rounded-md text-xs'> Vue</span>
            <span className='p-1 bg-slate-500 text-white rounded-md text-xs'> MySql</span>
            <span className='p-1 bg-slate-500 text-white rounded-md text-xs'> Redis</span>
            <span className='p-1 bg-slate-500 text-white rounded-md text-xs'> Websockets</span>
          </ProjectItem>
          <ProjectItem
            title='Rent Cars'
            backgroundImg={cars}
            projectUrl='/Rentcar'
          >

            <span className='p-1 bg-slate-500 text-white rounded-md text-xs'> React</span>
            <span className='p-1 bg-slate-500 text-white rounded-md text-xs'> React Router Dom</span>
            <span className='p-1 bg-slate-500 text-white rounded-md text-xs'> Tailwind</span>
            <span className='p-1 bg-slate-500 text-white rounded-md text-xs'> NodeJS</span>
            <span className='p-1 bg-slate-500 text-white rounded-md text-xs'> Express</span>
            <span className='p-1 bg-slate-500 text-white rounded-md text-xs'> MongoDB</span>

          </ProjectItem>
          <ProjectItem
            title='ERP system'
            backgroundImg={sistemaerp}
            projectUrl='/Erpsystem'
          >
            <span className='p-1 bg-slate-500 text-white rounded-md text-xs'> Laravel</span>
            <span className='p-1 bg-slate-500 text-white rounded-md text-xs'> Bootstrap</span>
            <span className='p-1 bg-slate-500 text-white rounded-md text-xs'> MySql</span>
            <span className='p-1 bg-slate-500 text-white rounded-md text-xs'> Redis</span>
          </ProjectItem>
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
