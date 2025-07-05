
import { BuildingOffice2Icon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'
import Layout from '../../Layout/Layout'
import hassanProfile from "../../assets/images/hassan.JPG"
import { SwiperSlide } from 'swiper/react'
import Post from '../../components/Post'
import { Swiper } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/autoplay';

import post3 from "../../assets/images/post3.jpg"
import { useEffect, useState } from 'react'
import axios from '../../api/axios'
import { useParams } from 'react-router-dom'

export default function TeamMemmber() {
  const params = useParams()
  const [member, setMember] = useState('');
  const [memberArticles, setMemberArticles] = useState([]);
  useEffect(() => {
    axios.get(`/member-information/${params.name}`)
      .then(response => {
        setMember(response.data);
      });
  }, [params.name]);

  useEffect(() => {

    axios.post('/member-articles', { 'id': member.id })
      .then(response => {
        setMemberArticles(response.data.memberArticles);
      });

  }, [member.id]);
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
              <div className='text-lg font-medium my-6 text-white'>{member.fullName}</div>
              <div className='text-slate-100'>{member.position} ❤</div>
              <div className='text-sm'>{member.biography}</div>
              <div className='flex items-center gap-2 text-sm'><BuildingOffice2Icon className='size-5 text-white' />{member.jobPlace}</div>
              <div className='flex items-center gap-2 text-sm'><EnvelopeIcon className='size-5 text-white' />{member.emailLink}</div>
              <div className='flex items-center gap-2 text-sm'><MapPinIcon className='size-5 text-white' />{member.address}</div>
            </div>

            <div className='text-lg font-medium my-6 text-white'>💪 My Skills</div>
            <div className='text-sm font-serif text-slate-300'>{member.skills}</div>

          </div>

          <div className='col-span-5 rounded-xl  bg-slate-800'>

            <div className='p-8'>
              <div className=' text-lg font-serif my-8'>Hi there! I’m {member.fullName} 🖐</div>
              <div className='text-base text-slate-300'>{member.info}</div>
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
                {memberArticles.map((memberArticle, index) => (
                  <SwiperSlide key={index}>
                    <Post
                      className={"bg-slate-700"}
                      src={post3}
                      author={memberArticle.author.fullName}
                      date={memberArticle.created_at && (memberArticle.created_at).slice(0, 10)}
                      link={`/show-article/${memberArticle.title}`}
                      title={memberArticle.title}
                      desc={memberArticle.shorInfo}
                    />
                  </SwiperSlide>
                ))}

              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

