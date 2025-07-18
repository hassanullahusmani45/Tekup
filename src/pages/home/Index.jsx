import { AcademicCapIcon, ChevronLeftIcon, ChevronRightIcon, CircleStackIcon, ClipboardDocumentListIcon, InboxStackIcon, MagnifyingGlassIcon, ShieldCheckIcon, Square3Stack3DIcon, TrophyIcon, TvIcon, UsersIcon } from '@heroicons/react/24/outline';
import Layout from '../../Layout/Layout';
import LandingCounter from '../../components/LandingCounter';
import hassanProfile from '../../assets/images/hassan.JPG'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import { Link, useNavigate } from 'react-router-dom';
import { BoltIcon, SparklesIcon } from '@heroicons/react/24/solid';
import Post from '../../components/Post';
import post1 from "../../assets/images/post1.webp"
import post3 from "../../assets/images/post3.jpg"
import { useEffect, useRef, useState } from 'react';
import TeamMemmberCard from '../../components/TeamMemmberCard';
import axios from '../../api/axios';

export default function Index() {
  const [categoryCounts, setCategoryCounts] = useState({
    frontend: 0,
    backend: 0,
    artificialIntelligence: 0,
    security: 0
  });
  const navigat = useNavigate()
  const swiperRef = useRef(null);
  const [articleNumbers, setArticleNumbers] = useState(0);
  const [teamMembersNumbers, setTeamMembersNumbers] = useState(0);
  const [userNumbers, setUserNumbers] = useState(0);
  const [teamMembers, setTeamMembers] = useState([]);
  const [allArticles, setAllArticles] = useState([]);
  const [allSearchArticles, setAllSearchArticles] = useState([]);
  const [searchArticle, setSearchArticle] = useState([]);
  const [newArticles, setNewArticles] = useState([]);
  const [onFocus, setOnFocus] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');

  const searchHandler = (title) => {
    navigat(`/show-article/${encodeURIComponent(title)}`)
  }
  const searchInputOnchangeHandler = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setSearchInputValue(event.target.value);
    const filteredArticle = [...allSearchArticles].filter(article => article.title.toLowerCase().includes(inputValue));

    if (event.target.value.trim().length) {
      setSearchArticle(filteredArticle);
    } else {
      setSearchArticle(allArticles);
    }
  }

  useEffect(() => {

    axios.get('/all-articles-for-serch')
      .then(response => {
        setAllSearchArticles(response.data.allSeachArticle);
        setSearchArticle(response.data.allSeachArticle);
      });

    axios.get('/leading-conter')
      .then(response => {
        setArticleNumbers(response.data.articleNumbers);
        setTeamMembersNumbers(response.data.teamMembersNumbers);
        setUserNumbers(response.data.userNumbers);
      });

    axios.get('/team-members')
      .then(response => {
        setTeamMembers(response.data.teamMembers)
      });

    axios.get('/posts')
      .then(response => {
        setAllArticles(response.data.allArticles);
      });

    axios.get('/new-articles')
      .then(response => {
        setNewArticles(response.data.newArticles);
      })
  }, []);

  useEffect(() => {
    const counts = allSearchArticles.reduce((acc, article) => {
      switch (article.category) {
        case 1:
          acc.frontend += 1;
          break;
        case 2:
          acc.backend += 1;
          break;
        case 3:
          acc.artificialIntelligence += 1;
          break;
        case 4:
          acc.security += 1;
          break;
        default:
          break;
      }
      return acc;
    }, { frontend: 0, backend: 0, artificialIntelligence: 0, security: 0 });

    setCategoryCounts(counts);
  }, [allSearchArticles]);
  
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

          <div className={`relative bg-slate-800 ${onFocus ? 'rounded-t-2xl' : 'rounded-full'} mb-20 mt-14 w-4/6`}>
            <input onFocus={() => setOnFocus(true)} onChange={searchInputOnchangeHandler} value={searchInputValue} type="text" placeholder="Search posts here..."
              className={`block border-none outline-none bg-slate-800 w-full py-5 ps-8 pe-10 text-base  placeholder:text-slate-300 placeholder:text-sm ${onFocus ? 'rounded-t-2xl' : 'rounded-full'}`}
              required autoComplete='off' />
            <button onClick={() => setOnFocus(false)} type="submit"
              className="absolute end-3 bottom-2 bg-teal-700 hover:bg-teal-900 font-medium rounded-full text-sm p-3">
              <MagnifyingGlassIcon className='size-6' />
            </button>
            <div className={`absolute inset-0 top-16 h-40 w-full bg-slate-700/95 rounded-b-2xl py-1 overflow-hidden transition-all ${onFocus ? 'opacity-100 pointer-events-auto' : 'hidden'}`} >
              <div>
                {searchArticle.map((article, index) => (
                  <div onClick={() => searchHandler(article.title)} key={index} className={`block px-8 py-3 cursor-pointer hover:bg-slate-600 pointer-events-auto`}>{article.title}</div>
                ))}
              </div>
            </div>
          </div>


          <div className='grid grid-cols-3 w-1/2'>
            <div className=' col-span-1 flex flex-col justify-center items-center'>
              <UsersIcon className='size-14 mb-3' />
              <LandingCounter count={teamMembersNumbers} />
              <div className=' text-base'>Team Mammbers</div>
            </div>
            <div className='col-span-1 flex flex-col justify-center items-center'>
              <ClipboardDocumentListIcon className='size-14 mb-3' />
              <LandingCounter count={articleNumbers} />
              <div className=' text-base'>Total Articles</div>
            </div>
            <div className='col-span-1 flex flex-col justify-center items-center'>
              <AcademicCapIcon className='size-14 mb-3' />
              <LandingCounter count={userNumbers} />
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
              {teamMembers.map((teamMember, index) => (
                <SwiperSlide key={index}>
                  <TeamMemmberCard
                    profile={hassanProfile}
                    email={teamMember.emailLink}
                    whatsApp={teamMember.whatsappLink}
                    websit={teamMember.webLink}
                    name={teamMember.fullName}
                    positionTitle={teamMember.position}
                    quickInfo={teamMember.info}
                  />
                </SwiperSlide>
              ))}

            </Swiper>
          </div>
          {/* end SwiperJs part  */}





          {/* start all articles */}
          <div className='mt-28 text-start font-semibold text-xl text-fuchsia-500'><InboxStackIcon className='inline size-8 me-2 text-violet-500' />All Articles</div>
          <div className='w-1/4 mt-2 border-t-2 border-dotted border-fuchsia-300 '></div>

          <div className='grid grid-cols-4 gap-4 my-10'>

            {allArticles.map((article, index) => (
              <div key={index} className='col-span-1'>
                <Post
                  src={post1}
                  author={article.author.fullName}
                  date={article.created_at && (article.created_at).slice(0, 10)}
                  link={`/show-article/${article.title}`}
                  title={article.title}
                  desc={article.shorInfo}
                />
              </div>
            ))}

          </div>
          {/* end all articles */}





          {/* start category part  */}
          <div className='mt-28 text-start font-semibold text-xl text-sky-500'><Square3Stack3DIcon className='inline size-8 me-2 text-blue-500' />Numbers of the categories articles</div>
          <div className='w-1/3 mt-2 border-t-2 border-dotted border-sky-300'></div>


          <div className='grid grid-cols-4 gap-x-6 py-8'>

            <Link to={"/posts"} className='flex flex-col justify-center items-center py-5 bg-gradient-to-r from-[#3564ff] to-[#62f229] overflow-hidden rounded-xl'>
              <ShieldCheckIcon className='size-12 mb-3' />
              <div className=' font-medium'>{categoryCounts.security}</div>
              <div className='text-base font-semibold'>Security</div>
            </Link>

            <Link to={"/posts"} className='flex flex-col justify-center items-center py-5 bg-gradient-to-r from-[#5bf0ca] to-[#0b75ee] overflow-hidden rounded-xl'>
              <TvIcon className='size-12 mb-3' />
              <div className=' font-medium'>{categoryCounts.frontend}</div>
              <div className='text-base font-semibold'>Frontend</div>
            </Link>

            <Link to={"/posts"} className='flex flex-col justify-center items-center py-5 bg-gradient-to-r from-[#9e4bc5] to-[#60d6f3] overflow-hidden rounded-xl'>
              <CircleStackIcon className='size-12 mb-3' />
              <div className=' font-medium'>{categoryCounts.backend}</div>
              <div className='text-base font-semibold'>Backend</div>
            </Link>

            <Link to={"/posts"} className='flex flex-col justify-center items-center py-5 bg-gradient-to-r from-[#f1ce59] to-[#f04d75] overflow-hidden rounded-xl'>
              <TrophyIcon className='size-12 mb-3' />
              <div className='font-medium'>{categoryCounts.artificialIntelligence}</div>
              <div className='text-base font-semibold'>Artificial intelligence</div>
            </Link>

          </div>
          {/* end category part  */}





          {/* start new articles part  */}
          <div className=' flex justify-between items-center mt-28'>
            <div className='w-full'>
              <div className='text-start font-semibold text-xl text-emerald-500'><BoltIcon className='inline size-8 me-2 text-green-500' /> New Articles</div>
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
              {newArticles.map((newArticle, index) => (
                <SwiperSlide key={index}>
                  <Post
                    src={post3}
                    author={newArticle.author.fullName}
                    date={newArticle.created_at && (newArticle.created_at).slice(0, 10)}
                    link={`/show-article/${newArticle.title}`}
                    title={newArticle.title}
                    desc={newArticle.shorInfo}
                  />
                </SwiperSlide>
              ))}

            </Swiper>
          </div>
          {/* end new articles part  */}




          {/* start Discription abute site articles */}
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
          {/* end Discription abute site articeles */}


        </main>

      </div>
    </Layout>
  )
}

