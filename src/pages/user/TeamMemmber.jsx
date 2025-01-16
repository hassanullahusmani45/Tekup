
import { BuildingOffice2Icon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'
import Layout from '../../Layout/Layout'
import hassanProfile from "../../assets/images/hassan.JPG"

export default function TeamMemmber() {
  return (
    <Layout>
      <div className='w-[85%] mx-auto'>
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
          </div>

          <div className='col-span-5 p-8 pt-12 rounded-xl  bg-slate-800'>
            <div className=' text-xl font-serif my-8'>Hi there! I’m Hassanullah Usmani 🖐</div>
            <div>
              I’m a Full-Stack Developer with over three years of experience in web development. I have worked as a back-end developer at Entire Thinkers Technology and am currently working as a Full-Stack Developer at the Ministry of Transport and Aviation in Afghanistan contry.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

