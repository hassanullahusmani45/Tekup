
import { Bars4Icon, BuildingOffice2Icon, CalendarIcon, ChevronDownIcon, ChevronUpIcon, EnvelopeIcon, EyeIcon, MapPinIcon, UserIcon } from '@heroicons/react/24/outline'
import Layout from '../../Layout/Layout'
import hassanProfile from "../../assets/images/hassan.JPG"
import post1 from "../../assets/images/post1.webp"
import { useEffect, useState } from 'react'
import axios from '../../api/axios'
import { Link, useParams } from 'react-router-dom'
import { Square2StackIcon } from '@heroicons/react/16/solid'

export default function ShowPost() {
  const params = useParams()
  const [author, setAuthor] = useState('');
  const [article, setArticle] = useState('');
  const [articleInfos, setArticleInfos] = useState([]);
  const [isTitleOpen, setIsTitleOpen] = useState(true)

  useEffect(() => {
    axios.get(`/author-article/${params.name}`)
      .then(response => {
        setAuthor(response.data.author);
        setArticle(response.data.article);
        setArticleInfos(response.data.articleInfos);
      });
  }, [params]);

  const toggleTitleArticle = () => {
    setIsTitleOpen(!isTitleOpen);
  }

  return (
    <Layout>
      <div className=''>
        <div className=' grid grid-cols-7 gap-4'>
          <div className='col-span-2 p-8 rounded-xl bg-slate-800 h-fit'>

            <span className='flex justify-center'>
              <span className='relative'>
                <Link to={`/team-memmber-profile/${author.fullName}`}>
                  <img className=" w-56 h-56 rounded-full p-1.5 border-2 border-orange-300 border-dotted" src={hassanProfile} />
                </Link>
                <div className='absolute p-1.5 bg-slate-900 -right-1 bottom-7 rounded-full border  border-orange-300'>🎯</div>
              </span>
            </span>
            <div className='space-y-2 text-slate-300'>
              <div className='text-lg font-medium my-6 text-white'>{author.fullName}</div>
              <div className='text-slate-100'>{author.position} ❤</div>
              <div className='text-sm'>{author.biography}</div>
              <div className='flex items-center gap-2 text-sm'><BuildingOffice2Icon className='size-5 text-white' />{author.jobPlace}</div>
              <div className='flex items-center gap-2 text-sm'><EnvelopeIcon className='size-5 text-white' />{author.emailLink}</div>
              <div className='flex items-center gap-2 text-sm'><MapPinIcon className='size-5 text-white' />{author.address}</div>
            </div>

            <div className='text-lg font-medium my-6 text-white'>💪 My Skills</div>
            <div className='text-sm font-serif text-slate-300'>{author.skills}</div>

          </div>

          <div className='col-span-5 rounded-xl p-8 bg-slate-800'>
            <div className='text-xl font-bold'>{article.title}</div>
            <hr className='border-slate-600 my-3' />
            <div className='flex items-center gap-x-16 text-slate-400'>
              <div className='flex justify-center gap-x-2' ><UserIcon className='size-6' />{author.fullName}</div>
              <div className='flex justify-center gap-x-2' ><CalendarIcon className='size-6' />{article.created_at && (article.created_at).slice(0, 10)}</div>
              <div className='flex justify-center gap-x-2' ><EyeIcon className='size-6' />{article.show}</div>
            </div>

            {/* show the article topic titles */}
            <div className=' w-full bg-slate-900/60 my-8 p-5 rounded-xl !rounded-tl-none border border-slate-700/60'>
              <div className=' flex justify-between items-center'>
                <div className='flex items-center gap-x-2 text-lg font-semibold text-slate-100' ><Bars4Icon className='size-5 text-white' />Headlines of this article:</div>
                <div onClick={toggleTitleArticle} className=' p-1.5 bg-slate-700 rounded-full hover:bg-slate-600 cursor-pointer transition-all'>
                  {isTitleOpen ? (<ChevronDownIcon className='size-5' />) : (<ChevronUpIcon className='size-5' />)}
                </div>
              </div>

              {isTitleOpen &&
                <>
                  <hr className='border-slate-800 my-4' />
                  <div className=' text-slate-300 text-sm font-medium space-y-4 mt-4'>
                    {articleInfos.map((articleInfo, index) => (
                      <div key={index} className='flex items-center gap-1'>
                      <Square2StackIcon className='size-4'/>
                      {articleInfo.title}
                      </div>
                    ))}
                  </div>
                </>
              }
            </div>

            {/* show the articl img */}
            <div className=' w-full h-fit my-8'>
              <img className=' bg-cover w-full rounded-xl' src={post1}></img>
            </div>

            {/* show the topic part */}
            {articleInfos.map((articleInfo, index) => (
              <div key={index}>
                <div className='text-slate-50 text-lg font-medium my-8'>{articleInfo.title}</div>
                <div className='text-slate-300/90 font-medium'>{articleInfo.body}</div>
              </div>
            ))}

          </div>

        </div>
      </div>
    </Layout>
  )
}

