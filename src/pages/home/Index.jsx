import { AcademicCapIcon, ChevronLeftIcon, ChevronRightIcon, CircleStackIcon, ClipboardDocumentListIcon, EnvelopeIcon, GlobeEuropeAfricaIcon, InboxStackIcon, MagnifyingGlassIcon, PhoneIcon, ShieldCheckIcon, Square3Stack3DIcon, TrophyIcon, TvIcon, UsersIcon } from '@heroicons/react/24/outline';
import Layout from '../../Layout/Layout';
import LandingCounter from '../../components/LandingCounter';
import profile from '../../assets/images/profile.jpg'
import hassanProfile from '../../assets/images/hassan.JPG'
import nasibjanProfile from '../../assets/images/nasibjan.jpg'
import mohmmadProfile from '../../assets/images/mohmmad.jpg'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import { Link } from 'react-router-dom';
import { BoltIcon, SparklesIcon } from '@heroicons/react/24/solid';
import Post from '../../components/Post';
import post1 from "../../assets/images/post1.webp"
import post2 from "../../assets/images/post2.jpg"
import post3 from "../../assets/images/post3.jpg"
import { useRef } from 'react';

export default function Index() {

  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };
  return (
    <Layout>
      <div>

        {/*start heading part  */}
        <div className='flex flex-col justify-center items-center h-[80vh] pt-32'>

          <div className='text-3xl font-bold font-serif'>Tekup The Best Place For Lernig Articles</div>

          <div className="relative bg-slate-800 rounded-full overflow-hidden mb-20 mt-14 w-4/6">
            <input type="text" placeholder="Search posts here..."
              className="block border-none outline-none bg-slate-800 w-full py-5 ps-8 pe-10 text-base  placeholder:text-slate-300 placeholder:text-sm"
              required autoComplete='off' />
            <button type="submit"
              className="absolute end-3 bottom-2 bg-teal-700 hover:bg-teal-900 font-medium rounded-full text-sm p-3">
              <MagnifyingGlassIcon className='size-6' />
            </button>
          </div>


          <div className='grid grid-cols-3 w-1/2'>
            <div className=' col-span-1 flex flex-col justify-center items-center'>
              <UsersIcon className='size-14 mb-3' />
              <LandingCounter count={12} />
              <div className=' text-base'>Team Mammbers</div>
            </div>
            <div className='col-span-1 flex flex-col justify-center items-center'>
              <ClipboardDocumentListIcon className='size-14 mb-3' />
              <LandingCounter count={103} />
              <div className=' text-base'>Total Posts</div>
            </div>
            <div className='col-span-1 flex flex-col justify-center items-center'>
              <AcademicCapIcon className='size-14 mb-3' />
              <LandingCounter count={1_403} />
              <div className=' text-base'>Users</div>
            </div>
          </div>

        </div>
        {/* end heading part  */}

        <main className='w-[95%] mx-auto'>

          {/* start SwiperJs part  */}
          <div className='mt-28 text-start font-semibold text-xl text-teal-500'><SparklesIcon className='inline size-8 me-2 text-green-500' /> Our Experienced Team</div>
          <div className='w-1/4 mt-2 border-t-2 border-dotted border-teal-300 '></div>

          <div className='py-8'>
            <Swiper
              modules={[Autoplay]}
              slidesPerView={3}
              spaceBetween={40}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className='transition-all'>
                  <div className='flex justify-center items-center bg-slate-800/90 pt-6 px-4 rounded-2xl shadow-3xl'>
                    <div className='text-center'>

                      <Link to={"/posts"} className='inline-block'>
                        <img src={hassanProfile} alt='abute' className='w-40 h-40 rounded-full border p-1.5 mx-auto' />
                      </Link>
                      <div className='flex justify-center items-center gap-4 mt-4'>
                        <Link to={"/"} className="hover:translate-y-[-5px] hover:text-green-500 transition-transform duration-500">
                          <EnvelopeIcon className="size-5" />
                        </Link>
                        <Link to={"/"} className="hover:translate-y-[-5px] hover:text-green-500 transition-transform duration-500">
                          <PhoneIcon className="size-5" />
                        </Link>
                        <Link to={"/"} className="hover:translate-y-[-5px] hover:text-green-500 transition-transform duration-500">
                          <GlobeEuropeAfricaIcon className="size-6" />
                        </Link>
                      </div>

                      <div className='bg-slate-700 text-base px-4 py-2 mt-4 rounded-full space-y-4 hover:rounded-xl transition-all'>
                        <Link to={"/posts"} className='text-white font-medium text-base'>Hassanullah Usmani</Link>
                        <div className='text-slate-200 text-sm'>LRTM full-stack developer</div>
                      </div>

                      <div className='text-slate-200 justify-center text-sm leading-6 h-40 mt-6 line-clamp-6'>
                        Hassanullah Usmani is a skilled LRTM full-stack developer with expertise in creating robust and dynamic web applications. He combines technical proficiency with innovative problem-solving to deliver high-quality solutions.
                      </div>

                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='transition-all'>
                  <div className='flex justify-center items-center bg-slate-800/90 pt-6 px-4 rounded-2xl shadow-3xl'>
                    <div className='text-center'>

                      <Link to={"/posts"} className='inline-block'>
                        <img src={nasibjanProfile} alt='abute' className='w-40 h-40 rounded-full border p-1.5 mx-auto' />
                      </Link>
                      <div className='flex justify-center items-center gap-4 mt-4'>
                        <Link to={"/"} className="hover:translate-y-[-5px] hover:text-green-500 transition-transform duration-500">
                          <EnvelopeIcon className="size-5" />
                        </Link>
                        <Link to={"/"} className="hover:translate-y-[-5px] hover:text-green-500 transition-transform duration-500">
                          <PhoneIcon className="size-5" />
                        </Link>
                        <Link to={"/"} className="hover:translate-y-[-5px] hover:text-green-500 transition-transform duration-500">
                          <GlobeEuropeAfricaIcon className="size-6" />
                        </Link>
                      </div>

                      <div className='bg-slate-700 text-base px-4 py-2 mt-4 rounded-full space-y-4 hover:rounded-xl transition-all'>
                        <Link to={"/posts"} className='text-white font-medium text-base'>Nasibullah Niazi</Link>
                        <div className='text-slate-200 text-sm'>Backend developer</div>
                      </div>

                      <div className='text-slate-200 justify-center text-sm leading-6 h-40 mt-6 line-clamp-6'>
                        Nasibullah Niazi is a proficient backend developer with expertise in building and maintaining efficient server-side systems, focusing on database management, API development, and optimizing application performance.
                      </div>

                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='transition-all'>
                  <div className='flex justify-center items-center bg-slate-800/90 pt-6 px-4 rounded-2xl shadow-3xl'>
                    <div className='text-center'>

                      <Link to={"/posts"} className='inline-block'>
                        <img src={profile} alt='abute' className='w-40 h-40 rounded-full border p-1.5 mx-auto' />
                      </Link>
                      <div className='flex justify-center items-center gap-4 mt-4'>
                        <Link to={"/"} className="hover:translate-y-[-5px] hover:text-green-500 transition-transform duration-500">
                          <EnvelopeIcon className="size-5" />
                        </Link>
                        <Link to={"/"} className="hover:translate-y-[-5px] hover:text-green-500 transition-transform duration-500">
                          <PhoneIcon className="size-5" />
                        </Link>
                        <Link to={"/"} className="hover:translate-y-[-5px] hover:text-green-500 transition-transform duration-500">
                          <GlobeEuropeAfricaIcon className="size-6" />
                        </Link>
                      </div>

                      <div className='bg-slate-700 text-base px-4 py-2 mt-4 rounded-full space-y-4 hover:rounded-xl transition-all'>
                        <Link to={"/posts"} className='text-white font-medium text-base'>Ahmadullah Saber</Link>
                        <div className='text-slate-200 text-sm'>Frontend developer</div>
                      </div>

                      <div className='text-slate-200 justify-center text-sm leading-6 h-40 mt-6 line-clamp-6'>
                        Ahmadullah Saber is a talented frontend developer specializing in creating user-friendly, visually appealing, and responsive web interfaces.
                      </div>

                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='transition-all'>
                  <div className='flex justify-center items-center bg-slate-800/90 pt-6 px-4 rounded-2xl shadow-3xl'>
                    <div className='text-center'>

                      <Link to={"/posts"} className='inline-block'>
                        <img src={mohmmadProfile} alt='abute' className='w-40 h-40 rounded-full border p-1.5 mx-auto' />
                      </Link>
                      <div className='flex justify-center items-center gap-4 mt-4'>
                        <Link to={"/"} className="hover:translate-y-[-5px] hover:text-green-500 transition-transform duration-500">
                          <EnvelopeIcon className="size-5" />
                        </Link>
                        <Link to={"/"} className="hover:translate-y-[-5px] hover:text-green-500 transition-transform duration-500">
                          <PhoneIcon className="size-5" />
                        </Link>
                        <Link to={"/"} className="hover:translate-y-[-5px] hover:text-green-500 transition-transform duration-500">
                          <GlobeEuropeAfricaIcon className="size-6" />
                        </Link>
                      </div>

                      <div className='bg-slate-700 text-base px-4 py-2 mt-4 rounded-full space-y-4 hover:rounded-xl transition-all'>
                        <Link to={"/posts"} className='text-white font-medium text-base'>Mohmmadajan Mohmmady</Link>
                        <div className='text-slate-200 text-sm'>IT manager</div>
                      </div>
                      <div className='text-slate-200 justify-center text-sm leading-6 h-40 mt-6'>Mohmmady is an accomplished IT Manager known for his expertise in overseeing and optimizing IT operations, ensuring seamless technology integration and innovation within organizations.</div>

                    </div>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
          {/* end SwiperJs part  */}





          {/* start all posts */}
          <div className='mt-28 text-start font-semibold text-xl text-fuchsia-500'><InboxStackIcon className='inline size-8 me-2 text-violet-500' />All posts</div>
          <div className='w-1/4 mt-2 border-t-2 border-dotted border-fuchsia-300 '></div>

          <div className='grid grid-cols-4 gap-4 my-10'>

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
                author="Ahmadullah Sabir"
                date="1403-10-3"
                link="/"
                title='Why is Python the favorite programming language of hackers?'
                desc='Python is a favorite among hackers due to its simplicity, versatility, and extensive library support. It enables quick development of scripts and tools for tasks like web scraping, network scanning, and password cracking. Libraries like Scapy, Socket, and PyCrypto make it ideal for penetration testing and cybersecurity.'
              />
            </div>

          </div>
          {/* end all posts */}





          {/* start category part  */}
          <div className='mt-28 text-start font-semibold text-xl text-sky-500'><Square3Stack3DIcon className='inline size-8 me-2 text-blue-500' />Numbers of the categories posts</div>
          <div className='w-1/3 mt-2 border-t-2 border-dotted border-sky-300'></div>


          <div className='grid grid-cols-4 gap-x-6 py-8'>

            <Link to={"/posts"} className='flex flex-col justify-center items-center py-5 bg-gradient-to-r from-[#3564ff] to-[#62f229] overflow-hidden rounded-xl'>
              <ShieldCheckIcon className='size-12 mb-3' />
              <div className=' font-medium'>7</div>
              <div className='text-base font-semibold'>Security</div>
            </Link>

            <Link to={"/posts"} className='flex flex-col justify-center items-center py-5 bg-gradient-to-r from-[#5bf0ca] to-[#0b75ee] overflow-hidden rounded-xl'>
              <TvIcon className='size-12 mb-3' />
              <div className=' font-medium'>42</div>
              <div className='text-base font-semibold'>Frontend</div>
            </Link>

            <Link to={"/posts"} className='flex flex-col justify-center items-center py-5 bg-gradient-to-r from-[#9e4bc5] to-[#60d6f3] overflow-hidden rounded-xl'>
              <CircleStackIcon className='size-12 mb-3' />
              <div className=' font-medium'>14</div>
              <div className='text-base font-semibold'>Backend</div>
            </Link>

            <Link to={"/posts"} className='flex flex-col justify-center items-center py-5 bg-gradient-to-r from-[#f1ce59] to-[#f04d75] overflow-hidden rounded-xl'>
              <TrophyIcon className='size-12 mb-3' />
              <div className='font-medium'>13</div>
              <div className='text-base font-semibold'>Artificial intelligence</div>
            </Link>

          </div>
          {/* end category part  */}





          {/* start new posts part  */}
          <div className=' flex justify-between items-center mt-28'>
            <div className='w-full'>
              <div className='text-start font-semibold text-xl text-emerald-500'><BoltIcon className='inline size-8 me-2 text-green-500' /> New Posts</div>
              <div className='w-1/4 mt-2 border-t-2 border-dotted border-emerald-300 '></div>
            </div>

            <div className='flex justify-center items-center gap-2'>
              <span className='p-2 bg-green-500 rounded-full hover:bg-green-700 transition-colors cursor-pointer' onClick={handlePrev}><ChevronLeftIcon className='size-7 font-bold text-white' /></span>
              <span className='p-2 bg-green-500 rounded-full hover:bg-green-700 transition-colors cursor-pointer' onClick={handleNext}><ChevronRightIcon className='size-7 text-white' /></span>
            </div>
          </div>

          <div className='py-8'>
            <Swiper
              slidesPerView={4}
              spaceBetween={10}
              loop={true}
              className="mySwiper"
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              <SwiperSlide>
                <Post
                  src={post3}
                  author="Ahmadullah Sabir"
                  date="1403-10-3"
                  link="/"
                  title='Why is Python the favorite programming language of hackers?'
                  desc='Python is a favorite among hackers due to its simplicity, versatility, and extensive library support. It enables quick development of scripts and tools for tasks like web scraping, network scanning, and password cracking. Libraries like Scapy, Socket, and PyCrypto make it ideal for penetration testing and cybersecurity.'
                />
              </SwiperSlide>

              <SwiperSlide>
                <Post
                  src={post2}
                  author="Hassanullah Najimi"
                  date="1403-9-23"
                  link="/"
                  title='The best programming languages in 2025.'
                  desc='Python and JavaScript continue to lead in 2025 due to their versatility, ease of use, and applications in AI, web development, and data science.'
                />
              </SwiperSlide>

              <SwiperSlide>
                <Post
                  src={post1}
                  author="Mohmmadajan Mohmmady"
                  date="1403-9-21"
                  link="/"
                  title='What is TailwindCSS framwork?'
                  desc='TailwindCSS is a utility-first CSS framework that provides pre-defined classes for fast and customizable styling directly in your HTML. It simplifies responsive design and speeds up development without writing custom CSS.'
                />
              </SwiperSlide>

              <SwiperSlide>
                <Post
                  src={post3}
                  author="Ahmadullah Sabir"
                  date="1403-10-3"
                  link="/"
                  title='Why is Python the favorite programming language of hackers?'
                  desc='Python is a favorite among hackers due to its simplicity, versatility, and extensive library support. It enables quick development of scripts and tools for tasks like web scraping, network scanning, and password cracking. Libraries like Scapy, Socket, and PyCrypto make it ideal for penetration testing and cybersecurity.'
                />
              </SwiperSlide>

              <SwiperSlide>
                <Post
                  src={post2}
                  author="Hassanullah Najimi"
                  date="1403-9-23"
                  link="/"
                  title='The best programming languages in 2025.'
                  desc='Python and JavaScript continue to lead in 2025 due to their versatility, ease of use, and applications in AI, web development, and data science.'
                />
              </SwiperSlide>

            </Swiper>
          </div>
          {/* end new posts part  */}




          {/* start Discription abute site posts */}
          <div className='mt-28 text-center font-semibold text-2xl text-teal-400'>Why we chose Tekup web sit</div>
          <div className=' w-1/3 mx-auto mt-2 border-t-2 border-dotted border-teal-500 ' ></div>

          <div className='py-8 leading-8 text-justify font-serif text-slate-300 text-sm'>
            In today is digital age, having a reliable and user-friendly platform is essential for achieving goals efficiently. Tekup website has emerged as a top choice for individuals and organizations, offering exceptional features and unmatched performance. Here is why Tekup stands out:

            Modern Design: Tekup boasts a sleek, intuitive design that ensures easy navigation for all users.
            Speed and Reliability: The site is optimized for fast loading times, ensuring a seamless user experience.
            Mobile Responsiveness: Tekup is fully compatible with all devices, from desktops to smartphones.
            Comprehensive Features: It offers tools and resources tailored to diverse needs, be it for education, business, or personal use.
            Security First: Advanced security measures protect user data and provide a safe browsing experience.
            User-Centered Experience: With feedback-driven updates, Tekup always prioritizes user satisfaction.
            Offline Support: Innovative offline functionalities make it accessible anytime, anywhere.
            Customizability: Users can personalize their experience to suit their unique preferences.
            Expert Support Team: A responsive and professional team is always ready to assist with any issues.
            Community Engagement: Tekup fosters a vibrant community, enabling users to connect, collaborate, and grow together.
            Tekup is more than just a website; it is a gateway to achieving your objectives with ease. Its innovative approach and dedication to quality make it the perfect partner for modern digital needs. Whether you are a student, developer, or entrepreneur, Tekup is designed to empower you every step of the way.
          </div>
          {/* end Discription abute site posts */}


        </main>

      </div>
    </Layout>
  )
}

