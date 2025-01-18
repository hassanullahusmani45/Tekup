
import { BuildingOffice2Icon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'
import Layout from '../../Layout/Layout'
import hassanProfile from "../../assets/images/hassan.JPG"
import { SwiperSlide } from 'swiper/react'
import Post from '../../components/Post'
import { Swiper } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/autoplay';

import post1 from "../../assets/images/post1.webp"
import post2 from "../../assets/images/post2.jpg"
import post3 from "../../assets/images/post3.jpg"

export default function TeamMemmber() {
  return (
    <Layout>
      <div className=''>
        <div className=' grid grid-cols-7 gap-4'>
          <div className='col-span-2 p-8 rounded-xl bg-slate-800'>

            <span className='flex justify-center'>
              <span className='relative'>
                <img className=" w-56 h-56 rounded-full p-1.5 border-2 border-orange-300 border-dotted" src={hassanProfile} />
                <div className='absolute p-1.5 bg-slate-900 -right-1 bottom-7 rounded-full border  border-orange-300'>🎯</div>
              </span>
            </span>
            <div className='space-y-2 text-slate-300'>
              <div className='text-lg font-medium my-6 text-white'>Hassan ullah usmani</div>
              <div className='text-slate-100'>LRTM full-stack developer ❤</div>
              <div className='text-sm'>
                white three years experience as full stack developer by useing of in frontend React, Vue, TailwindCSS and backend Laravel, PHP language.
              </div>
              <div className='flex items-center gap-2 text-sm'><BuildingOffice2Icon className='size-5 text-white' />Entire Thinkers Technology</div>
              <div className='flex items-center gap-2 text-sm'><EnvelopeIcon className='size-5 text-white' />hassanullahusmani45@gmail.com</div>
              <div className='flex items-center gap-2 text-sm'><MapPinIcon className='size-5 text-white' />Kabul,Afghanistan</div>
            </div>

            <div className='text-lg font-medium my-6 text-white'>💪 My Skills</div>
            <div className='text-sm font-serif text-slate-300'>
              Laravel, PHP, JavaScript, React , Vue, Tailwind CSS, Bootstrap, HTML, CSS, Flex-box, CssGrid, MySQL, MongoDB, Git, and GitHub
            </div>

          </div>

          <div className='col-span-5 rounded-xl  bg-slate-800'>

            <div className='p-8'>
              <div className=' text-lg font-serif my-8'>Hi there! I’m Hassanullah Usmani 🖐</div>
              <div className='text-base text-slate-300'>
                I’m a Full-Stack Developer with over three years of experience in web development. I have worked as a back-end developer at Entire Thinkers Technology and am currently working as a Full-Stack Developer at the Ministry of Transport and Aviation in Afghanistan contry.
              </div>
            </div>

            <div className='p-3 rounded-lg'>
              <Swiper
                modules={[Autoplay]}
                slidesPerView={3}
                spaceBetween={10}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Post
                    src={post1}
                    author="Hassanullah Usmani"
                    date="1403-9-21"
                    link="/"
                    className={"bg-slate-700"}
                    title='What is TailwindCSS framwork?'
                    desc='TailwindCSS is a utility-first CSS framework that provides pre-defined classes for fast and customizable styling directly in your HTML. It simplifies responsive design and speeds up development without writing custom CSS.'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Post
                    src={post2}
                    author="Hassanullah Usmani"
                    date="1403-9-23"
                    link="/"
                    className={"bg-slate-700"}
                    title='The best programming languages in 2025.'
                    desc='Python and JavaScript continue to lead in 2025 due to their versatility, ease of use, and applications in AI, web development, and data science.'

                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Post
                    src={post1}
                    author="Hassanullah Usmani"
                    date="1403-9-21"
                    link="/"
                    className={"bg-slate-700"}
                    title='What is TailwindCSS framwork?'
                    desc='TailwindCSS is a utility-first CSS framework that provides pre-defined classes for fast and customizable styling directly in your HTML. It simplifies responsive design and speeds up development without writing custom CSS.'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Post
                    src={post3}
                    author="Hassanullah Usmani"
                    date="1403-10-3"
                    link="/"
                    className={"bg-slate-700"}
                    title='Why is Python the favorite programming language of hackers?'
                    desc='Python is a favorite among hackers due to its simplicity, versatility, and extensive library support. It enables quick development of scripts and tools for tasks like web scraping, network scanning, and password cracking. Libraries like Scapy, Socket, and PyCrypto make it ideal for penetration testing and cybersecurity.'
                  />
                </SwiperSlide>

              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

