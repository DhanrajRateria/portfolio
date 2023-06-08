import { BsFillMoonStarsFill } from 'react-icons/bs'
export default function Home() {
  return (
    <div className="{styles.container}">

      <main className='bg-white px-10'>
        <section className="min-h-screen">
          <nav className=' py-10 mb-12 flex justify-between'>
            <h1 className='text-xl'>
              developedbyDR
            </h1>
            <ul className="flex items-center just">
              <li className='text-xl cursor-pointer'>
                <BsFillMoonStarsFill></BsFillMoonStarsFill>
              </li>
              <li className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md'>
                <a href='#'>Resume</a>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  )
}
