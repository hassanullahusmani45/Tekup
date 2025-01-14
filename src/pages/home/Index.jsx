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

       

      </div>
    </Layout>
  )
}

