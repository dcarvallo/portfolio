import Image from 'next/image';
import React from 'react';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-wide  font-semibold uppercase text-[#545aff]'>
          Skills
        </p>
        <h3 className='py-4 text-xl'>Some technologies I have used</h3>
            <div className='m-auto grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 lg:gap-12 justify-center items-center'>
            
              <div className='relative flex flex-col items-center group hover:scale-110 ease-in duration-300'>

                <Image
                  src='/assets/skills/html.png'
                  width='64px'
                  height='64px'
                  alt='Html5'
                  />
                  <div className="absolute bottom-0 flex-col items-center hidden mb-14 group-hover:flex">
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">HTML5</span>
                    <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                  </div>
              </div>
              <div className='relative flex flex-col items-center group hover:scale-110 ease-in duration-300'>

                <Image
                  src='/assets/skills/css.png'
                  width='64px'
                  height='64px'
                  alt='Css3'
                  />
                  <div className="absolute bottom-0 flex-col items-center hidden mb-14 group-hover:flex">
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">CSS3</span>
                    <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                  </div>
                  </div>
                  
                <div className='relative flex flex-col items-center group  hover:scale-110 ease-in duration-300'>
                <Image
                  src='/assets/skills/javascript.png'
                  width='64px'
                  height='64px'
                  alt='Javascript'
                />
                <div className="absolute bottom-0 flex-col items-center hidden mb-14 group-hover:flex">
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">Javascript</span>
                    <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                  </div>
              </div>
                <div className='relative flex flex-col items-center group  hover:scale-110 ease-in duration-300'>
                <Image
                  src='/assets/skills/typescript.png'
                  width='64px'
                  height='64px'
                  alt='Typescript'
                />
                <div className="absolute bottom-0 flex-col items-center hidden mb-14 group-hover:flex">
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">Typescript</span>
                    <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                  </div>
              </div>
                <div className='relative flex flex-col items-center group hover:scale-110 ease-in duration-300'>
                <Image
                  src='/assets/skills/react.png'
                  width='64px'
                  height='64px'
                  alt='React'
                />
                <div className="absolute bottom-0 flex-col items-center hidden mb-14 group-hover:flex">
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">React</span>
                    <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                  </div>
              </div>
                <div className='relative flex flex-col items-center group hover:scale-110 ease-in duration-300'>
                <Image
                  src='/assets/skills/vue.png'
                  width='64px'
                  height='64px'
                  alt='Vue'
                />
                <div className="absolute bottom-0 flex-col items-center hidden mb-14 group-hover:flex">
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">Vue</span>
                    <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                  </div>
              </div>
                <div className='relative flex flex-col items-center group hover:scale-110 ease-in duration-300'>
                <Image
                  src='/assets/skills/sass.png'
                  width='64px'
                  height='64px'
                  alt='Sass'
                />
                <div className="absolute bottom-0 flex-col items-center hidden mb-14 group-hover:flex">
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">Sass</span>
                    <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                  </div>
              </div>
                <div className='relative flex flex-col items-center group hover:scale-110 ease-in duration-300'>
                <Image
                  src='/assets/skills/node.png'
                  width='64px'
                  height='64px'
                  alt='NodeJS'
                />
                <div className="absolute bottom-0 flex-col items-center hidden mb-14 group-hover:flex">
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">NodeJS</span>
                    <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                  </div>
              </div>
                <div className='relative flex flex-col items-center group hover:scale-110 ease-in duration-300'>
                <Image
                  src='/assets/skills/nestjs.svg'
                  width='64px'
                  height='64px'
                  alt='NestJS'
                />
                <div className="absolute bottom-0 flex-col items-center hidden mb-14 group-hover:flex">
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">NestJS</span>
                    <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                  </div>
              </div>
                <div className='relative flex flex-col items-center group  hover:scale-110 ease-in duration-300'>
                <Image
                  src='/assets/skills/laravel.png'
                  width='64px'
                  height='64px'
                  alt='Laravel'
                  
                />
                <div className="absolute bottom-0 flex-col items-center hidden mb-14 group-hover:flex">
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">Laravel</span>
                    <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                  </div>
              </div>
                <div className='relative flex flex-col items-center group hover:scale-110 ease-in duration-300'>
                <Image
                  src='/assets/skills/graphql.png'
                  width='64px'
                  height='64px'
                  alt='GraphQL'
                />
                <div className="absolute bottom-0 flex-col items-center hidden mb-14 group-hover:flex">
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">GraphQL</span>
                    <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                  </div>
              </div>
                <div className='relative flex flex-col items-center group hover:scale-110 ease-in duration-300'>
                <Image
                  src='/assets/skills/docker.png'
                  width='64px'
                  height='64px'
                  alt='Docker'
                  
                />
                <div className="absolute bottom-0 flex-col items-center hidden mb-14 group-hover:flex">
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">Docker</span>
                    <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                  </div>
              </div>
                <div className='relative flex flex-col items-center group hover:scale-110 ease-in duration-300'>
                <Image
                  src='/assets/skills/kubernetes.png'
                  width='64px'
                  height='64px'
                  alt='Kubernetes'
                  
                />
                <div className="absolute bottom-0 flex-col items-center hidden mb-14 group-hover:flex">
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">Kubernetes</span>
                    <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                  </div>
              </div>
              <div className='relative flex flex-col items-center group hover:scale-110 ease-in duration-300'>
                <Image
                  src='/assets/skills/git.png'
                  width='64px'
                  height='64px'
                  alt='Git'
                />
                <div className="absolute bottom-0 flex-col items-center hidden mb-14 group-hover:flex">
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">Git</span>
                    <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                  </div>
              </div>
              <div className='relative flex flex-col items-center group hover:scale-110 ease-in duration-300'>
                <Image
                  src='/assets/skills/gitlab.png'
                  width='64px'
                  height='64px'
                  alt='Gitlab'
                  
                />
                <div className="absolute bottom-0 flex-col items-center hidden mb-14 group-hover:flex">
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">Gitlab</span>
                    <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                  </div>
              </div>
              <div className='relative flex flex-col items-center group hover:scale-110 ease-in duration-300'>
                <Image
                  src='/assets/skills/github.png'
                  width='64px'
                  height='64px'
                  alt='Github'
                  
                />
                <div className="absolute bottom-0 flex-col items-center hidden mb-14 group-hover:flex">
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">Github</span>
                    <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                  </div>
              </div>
              <div className='relative flex flex-col items-center group hover:scale-110 ease-in duration-300'>
                <Image
                  src='/assets/skills/mongo.png'
                  width='64px'
                  height='64px'
                  alt='mongoDB'
                  
                />
                <div className="absolute bottom-0 flex-col items-center hidden mb-14 group-hover:flex">
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">MongoDB</span>
                    <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                  </div>
              </div>
              <div className='relative flex flex-col items-center group hover:scale-110 ease-in duration-300'>
                <Image
                  src='/assets/skills/postgresql.png'
                  width='64px'
                  height='64px'
                  alt='Postgresql'
                  
                />
                <div className="absolute bottom-0 flex-col items-center hidden mb-14 group-hover:flex">
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">PostgreSQL</span>
                    <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                  </div>
              </div>
              <div className='relative flex flex-col items-center group hover:scale-110 ease-in duration-300'>
                <Image
                  src='/assets/skills/postman.png'
                  width='64px'
                  height='64px'
                  alt='Postman'
                  
                />
                <div className="absolute bottom-0 flex-col items-center hidden mb-14 group-hover:flex">
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">Postman</span>
                    <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                  </div>
              </div>
              <div className='relative flex flex-col items-center group hover:scale-110 ease-in duration-300'>
                <Image
                  src='/assets/skills/cypress.png'
                  width='64px'
                  height='64px'
                  alt='cypress'
                  
                />
                <div className="absolute bottom-0 flex-col items-center hidden mb-14 group-hover:flex">
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">Cypress</span>
                    <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                  </div>
              </div>
              <div className='relative flex flex-col items-center group hover:scale-110 ease-in duration-300'>
                <Image
                  src='/assets/skills/jest.png'
                  width='64px'
                  height='64px'
                  alt='Jest'
                />
                <div className="absolute bottom-0 flex-col items-center hidden mb-14 group-hover:flex">
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">Jest</span>
                    <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                  </div>
              </div>
              </div>

          
      </div>
    </div>
  );
};

export default Skills;
