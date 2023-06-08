import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
export default function Home() {
  return (
    <div className="{styles.container}">

      <main className='bg-white px-10'>
        <section className="min-h-screen">
          <nav className=' py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>
              developedbyDR
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className='text-2xl cursor-pointer' />
              </li>
              <li >
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h1 className='text-5xl py-2 text-teal-500 font-medium'>Dhanraj Rateria</h1>
            <h2 className='text-2xl py-2'>Learner. Dreamer. Developer</h2>
            <p></p>
          </div>
          <div className='flex text-5xl justify-center gap-8'>
            
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillInstagram />
            
          </div>
        </section>
      </main>
    </div>
  )
}
