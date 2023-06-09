'use client'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { useState } from 'react';
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark": ""}>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className="min-h-screen">
          <nav className=' py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons dark:text-white'>
              developedbyDR
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)} className='text-2xl cursor-pointer dark:fill-white' />
              </li>
              <li >
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h1 className='text-5xl py-2 text-teal-500 font-medium'>Dhanraj Rateria</h1>
            <h2 className='text-2xl py-2 dark:text-white'>Learner. Dreamer. Developer</h2>
            <p></p>
          </div>
          <div className='flex text-5xl justify-center gap-8'>

            <AiFillTwitterCircle className='dark:fill-white' />
            <AiFillLinkedin className='dark:fill-white'/>
            <AiFillInstagram className='dark:fill-white'/>
            <AiFillGithub className='dark:fill-white'/>
          </div>
          <div className='shadow-lg p-5 rounded-l my-10 dark:bg-white'>
            <h3 className='text-3xl font-medium text-center pt-10 pb-5'>About me</h3>
            <p className='text-center'>Destined to be born in the beautiful land of India,
              passionate about various stuff, optimist about life,
              I would describe myself as an extremely devoted
              person always looking forward to learn more
              and develop a range in my life.</p>
          </div>
          <div>

          </div>
        </section>
      </main>
    </div>
  )
}
