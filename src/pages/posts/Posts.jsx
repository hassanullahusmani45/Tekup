import { ArrowsUpDownIcon, FolderOpenIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Layout from '../../Layout/Layout'
import Post from '../../components/Post'
import post1 from "../../assets/images/post1.webp"
import post2 from "../../assets/images/post2.jpg"
import post3 from "../../assets/images/post3.jpg"

export default function posts() {
  return (
    <Layout>
      <div>

        <div className='flex justify-between items-center mb-10 px-4'>
          <div className='text-2xl font-semibold'>Total Posts</div>
          <div className='text-base font-semibold text-slate-300'>462 <span className='text-lg text-white'>Posts</span></div>
        </div>


        <div className='grid grid-cols-12 gap-x-2'>


          <div className='col-span-3'>
            <div className="relative bg-slate-800 rounded-full overflow-hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <MagnifyingGlassIcon className='size-6' />
              </div>
              <input type="text" id="search" placeholder="Search posts ..."
                className="block border-none outline-none bg-slate-800 w-full py-4 ps-12 pe-24 text-sm  placeholder:text-slate-300 placeholder:text-sm"
                required autoComplete='off' />
              <button type="submit"
                className="absolute end-2.5 bottom-2.5 bg-teal-700 hover:bg-teal-900 font-medium rounded-full text-sm px-4 py-2">Search</button>
            </div>

            <div className='bg-slate-800 p-4 rounded-xl my-10'>
              <div className='flex justify-start items-center gap-2 text-lg font-medium'><FolderOpenIcon className='size-7' /> Article categories</div>
              <div className='mt-6 ms-3 space-y-5'>
                <div className="flex items-center">
                  <input id="frontend" type="checkbox" value="" className="w-3 h-3 rounded" />
                  <label htmlFor="frontend" className="ms-2 text-sm font-medium text-white/50">Frontend</label>
                </div>
                <div className="flex items-center">
                  <input id="backend" type="checkbox" value="" className="w-3 h-3 rounded" />
                  <label htmlFor="backend" className="ms-2 text-sm font-medium text-white/50">Backend</label>
                </div>
                <div className="flex items-center">
                  <input id="ArtificialIntelligence" type="checkbox" value="" className="w-3 h-3 rounded text-teal-500 focus:ring-teal-400 border-gray-300" />
                  <label htmlFor="ArtificialIntelligence" className="ms-2 text-sm font-medium text-white/50">Artificial intelligence</label>
                </div>
                <div className="flex items-center">
                  <input id="security" type="checkbox" value="" className="w-3 h-3 rounded text-teal-500 focus:ring-teal-400 border-gray-300" />
                  <label htmlFor="security" className="ms-2 text-sm font-medium text-white/50">Security</label>
                </div>
              </div>

            </div>

          </div>



          <div className='col-span-9'>
            <div className='flex justify-start items-center rounded-xl bg-slate-800 px-4 gap-8'>
              <div className='flex justify-start items-center me-8'>
                <ArrowsUpDownIcon className='size-7 me-1' />
                <div className='text-lg font-semibold'>Sort Posts By :</div>
              </div>
              <div className='text-base cursor-pointer text-slate-400 font-semibold'>All</div>
              <div className='text-base cursor-pointer font-semibold text-teal-500 border-y-2 border-teal-600 py-3 px-1.5'>Most popular</div>
              <div className='text-base cursor-pointer text-slate-400 font-semibold'>Newest</div>
              <div className='text-base cursor-pointer text-slate-400 font-semibold'>Oldest</div>
            </div>

            <div className='grid grid-cols-3 gap-4 my-10'>

              <div className='col-span-1'>
                <Post
                  src={post1}
                  author="Nasibullah Nizai"
                  date="1403-9-21"
                  link="/"
                  title='What is TailwindCSS framwork?'
                  desc='TailwindCSS is a utility-first CSS framework that provides pre-defined classes for fast and customizable styling directly in your HTML. It simplifies responsive design and speeds up development without writing custom CSS.'
                />
              </div>

              <div className='col-span-1'>
                <Post
                  src={post2}
                  author="Hassanullah Najimi"
                  date="1403-9-23"
                  link="/"
                  title='The best programming languages in 2025.'
                  desc='Python and JavaScript continue to lead in 2025 due to their versatility, ease of use, and applications in AI, web development, and data science.'
                />
              </div>

              <div className='col-span-1'>
                <Post
                  src={post3}
                  author="Ahmadullah Sabir"
                  date="1403-10-3"
                  link="/"
                  title='Why is Python the favorite programming language of hackers?'
                  desc='Python is a favorite among hackers due to its simplicity, versatility, and extensive library support. It enables quick development of scripts and tools for tasks like web scraping, network scanning, and password cracking. Libraries like Scapy, Socket, and PyCrypto make it ideal for penetration testing and cybersecurity.'
                />
              </div>

              <div className='col-span-1'>
                <Post
                  src={post2}
                  author="Hassanullah Najimi"
                  date="1403-9-23"
                  link="/"
                  title='The best programming languages in 2025.'
                  desc='Python and JavaScript continue to lead in 2025 due to their versatility, ease of use, and applications in AI, web development, and data science.'
                />
              </div>


              <div className='col-span-1'>
                <Post
                  src={post3}
                  author="Hassanullah Usmani"
                  date="1403-10-3"
                  link="/"
                  title='Why is Python the favorite programming language of hackers?'
                  desc='Python is a favorite among hackers due to its simplicity, versatility, and extensive library support. It enables quick development of scripts and tools for tasks like web scraping, network scanning, and password cracking. Libraries like Scapy, Socket, and PyCrypto make it ideal for penetration testing and cybersecurity.'
                />
              </div>

              <div className='col-span-1'>
                <Post
                  src={post1}
                  author="Mohmmadajan Mohmmady"
                  date="1403-9-21"
                  link="/"
                  title='What is TailwindCSS framwork?'
                  desc='TailwindCSS is a utility-first CSS framework that provides pre-defined classes for fast and customizable styling directly in your HTML. It simplifies responsive design and speeds up development without writing custom CSS.'
                />
              </div>

            </div>

          </div>

        </div>
      </div>
    </Layout>
  )
}
