import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const initstate = {
  show: false,
  message: '',
  color: ''
}

const Contact = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [eventMess, setEventMess] = useState(initstate)
  const [loading, setLoading] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('email', email)
    formData.append('subject', subject)
    formData.append('message', message)
    setLoading(true)
    fetch('https://getform.io/f/443c431d-ff1d-401e-a7b7-10d09d24ce40',{
      method:'POST',
      body:formData
    }).then(res => {
      setLoading(false)
      setEventMess({show:true,color:'bg-green-400', message:'Message sent'})
      setEmail('');
      setSubject('');
      setMessage('');
      setTimeout(() => {
        setEventMess(initstate)
      }, 5000);
    })
    .catch(err=> {
      setEventMess({show:true,color:'bg-red-400', message:'Error'})
      setLoading(false)
      setTimeout(() => {
        setEventMess(initstate)
      }, 5000);
    })
   
  };

  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl text tracking-wide font-semibold uppercase text-[#545aff]'>
          Contact
        </p>
        
        <div className='grid lg:grid-cols-5 gap-8 rounded-xl shadow-md shadow-gray-400'>

          <div className='col-span-3 lg:col-span-2 w-full h-full  rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
            <h2 className='py-4'>Get In Touch</h2>
            <p>If you have any questions please feel free to contact me.</p>
              <div>
                <div className='flex items-center justify-around py-4'>
                  <a
                    href='https://www.linkedin.com/in/daniel-carvallo-molina/'
                    target='_blank'
                    rel="noreferrer"
                  >
                    <div className='rounded-full flex flex-col items-center gap-1 shadow-lg dark:shadow-none dark:border-2 dark:border-white shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                      {/* <p>LinkedIn</p> */}
                    </div>
                  </a>
                  <a href='https://github.com/dcarvallo' target='_blank' rel="noreferrer">
                    <div className='rounded-full flex flex-col items-center gap-1 shadow-lg dark:shadow-none dark:border-2 dark:border-white shadow-gray-400  p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub />
                      {/* <p>Github</p> */}
                    </div>
                  </a>

                  <div className='rounded-full flex flex-col items-center gap-1 shadow-lg dark:shadow-none dark:border-2 dark:border-white shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                    {/* <p>Message</p> */}
                  </div>
                  <Link href='/resume'>
                    <div className='rounded-full flex flex-col items-center gap-1 shadow-lg dark:shadow-none dark:border-2 dark:border-white shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <BsFillPersonLinesFill />
                      {/* <p>Resume</p> */}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='col-span-3 w-full h-auto  rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                onSubmit={handleSubmit}
              >
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Your Email</label>
                  <input
                    className='border-2 rounded-lg p-2 flex border-gray-300'
                    type='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-3'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-2 flex border-gray-300'
                    type='text'
                    name='subject'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-2 border-gray-300'
                    rows='4'
                    name='message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button className='w-full p-2 dark:shadow-none   inline text-gray-100 mt-4'>
                  <label> {loading ? 'Sending...' : 'Send Message'}  </label>
                </button>
                  <div className='flex justify-center'>
                                  
                  { eventMess.show && 
                    <div className={` text-center w-52 mt-4 p-3 rounded-3xl ${eventMess.color}`}>
                        <p className='text-white'>{eventMess.message}</p>
                    </div>
                  }
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full shadow-lg dark:shadow-none dark:border-4 dark:border-white shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp className='text-blue-500' size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
