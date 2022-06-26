import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({title, backgroundImg, projectUrl,children}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 dark:shadow-none dark:border rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
    <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='Project image' /> 
    <div className='hidden group-hover:block absolute '>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <div className='pb-2 pt-2 flex justify-center flex-wrap gap-1 text-white text-center'>
          {children}
        </div>
        <div className='text-center mt-3'>

        <Link href={projectUrl}>
            <p className='text-center p-3 rounded-lg inline bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
        </Link>
        </div>
    </div>
 </div>
  )
}

export default ProjectItem