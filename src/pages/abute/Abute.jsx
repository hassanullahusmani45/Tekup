import { Link } from 'react-router-dom'
import Layout from '../../Layout/Layout'
import abuteImage from '../../assets/images/1.png'
import profile from '../../assets/images/profile.jpg'
import hassanProfile from '../../assets/images/hassan.JPG'
import nasibjanProfile from '../../assets/images/nasibjan.jpg'
import mohmmadProfile from '../../assets/images/mohmmad.jpg'
import { EnvelopeIcon, GlobeEuropeAfricaIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Abute() {

  return (
    <Layout>
      <>
        <div className='grid grid-cols-2 gap-20'>
          <div className='cols-span-1'>
            <img src={abuteImage} alt='abute' className=' bg-cover w-full' />
          </div>
          <div className='cols-span-1 mt-32'>
            <div className='text-2xl font-medium leading-10'>Tekup The Best<br /> Place For Lernig Articles</div>
            <div className='mt-5 mb-16 pl-6 text-slate-200 leading-7'>
              Tekup is the best place for learning articles, offering insightful and high-quality content to help you stay ahead in technology and beyond. Whether you are a beginner or an expert, our articles are designed to inspire and educate, empowering you to expand your knowledge and skills.
            </div>
            <Link to='/contact-as' className='px-4 py-2 bg-teal-500 hover:bg-teal-600 rounded-full'>Contact Us</Link>
          </div>
        </div>

        <div className='mt-28 text-center font-semibold text-lg'>Our Experienced Team</div>
        <div className='w-1/4 mx-auto mt-4 border-t-2 border-dotted border-teal-300 ' ></div>

        <div className='grid grid-cols-4 gap-6 mt-16 pb-16'>

          <div className='cols-span-1 hover:scale-95 transition-all'>
            <div className='flex justify-center items-center bg-slate-800/90 pt-6 px-4 rounded-2xl shadow-3xl'>
              <div className='text-center'>

                <img src={hassanProfile} alt='abute' className='w-40 h-40 rounded-full border p-1.5 mx-auto' />
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
                  <div className='text-white font-medium text-base'>Hassanullah Usmani</div>
                  <div className='text-slate-200 text-sm'>LRTM full-stack developer</div>
                </div>

                <div className='text-slate-200 justify-center text-sm leading-6 h-44 mt-6'>
                  Hassanullah Usmani is a skilled LRTM full-stack developer with expertise in creating robust and dynamic web applications. He combines technical proficiency with innovative problem-solving to deliver high-quality solutions.
                </div>


              </div>
            </div>
          </div>


          <div className='cols-span-1 hover:scale-95 transition-all'>
            <div className='flex justify-center items-center bg-slate-800/90 pt-6 px-4 rounded-2xl shadow-3xl'>
              <div className='text-center'>

                <img src={nasibjanProfile} alt='abute' className='w-40 h-40 rounded-full border p-1.5 mx-auto' />
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
                  <div className='text-white font-medium text-base'>Nasibullah Niazi</div>
                  <div className='text-slate-200 text-sm'>Backend developer</div>
                </div>
                <div className='text-slate-200 justify-center text-sm leading-6 h-44 mt-6'>Nasibullah Niazi is a proficient backend developer with expertise in building and maintaining efficient server-side systems, focusing on database management, API development, and optimizing application performance.</div>

              </div>
            </div>
          </div>


          <div className='cols-span-1 hover:scale-95 transition-all'>
            <div className='flex justify-center items-center bg-slate-800/90 pt-6 px-4 rounded-2xl shadow-3xl'>
              <div className='text-center'>

                <img src={profile} alt='abute' className='w-40 h-40 rounded-full border p-1.5 mx-auto' />
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
                  <div className='text-white font-medium text-base'>Ahmadullah Saber</div>
                  <div className='text-slate-200 text-sm'>Frontend developer</div>
                </div>
                <div className='text-slate-200 justify-center text-sm leading-6 h-44 mt-6'>Ahmadullah Saber is a talented frontend developer specializing in creating user-friendly, visually appealing, and responsive web interfaces.</div>

              </div>
            </div>
          </div>


          <div className='cols-span-1 hover:scale-95 transition-all'>
            <div className='flex justify-center items-center bg-slate-800/90 pt-6 px-4 rounded-2xl shadow-3xl'>
              <div className='text-center'>

                <img src={mohmmadProfile} alt='abute' className='w-40 h-40 rounded-full border p-1.5 mx-auto' />
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
                  <div className='text-white font-medium text-base'>Mohmmadajan Mohmmady</div>
                  <div className='text-slate-200 text-sm'>IT manager</div>
                </div>
                <div className='text-slate-200 justify-center text-sm leading-6 h-44 mt-6'>Mohmmady is an accomplished IT Manager known for his expertise in overseeing and optimizing IT operations, ensuring seamless technology integration and innovation within organizations.</div>

              </div>
            </div>
          </div>


        </div>

      </>
    </Layout>
  )
}
