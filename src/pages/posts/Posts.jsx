import { useEffect, useState } from 'react'
import { ArrowsUpDownIcon, FolderOpenIcon, MagnifyingGlassIcon, ShieldExclamationIcon } from '@heroicons/react/24/outline'
import Layout from '../../Layout/Layout'
import Post from '../../components/Post'
import post1 from "../../assets/images/post1.webp"
import axios from '../../api/axios'

export default function Posts() {

  const [allArticles, setAllArticles] = useState([]);
  const [sortStatus, setSortStatus] = useState("all");
  const [sortArticles, setSortArticles] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    axios.get('/all-articles')
      .then(response => {
        setAllArticles(response.data.allArticles);
        setSortArticles(response.data.allArticles);
      });
  }, []);

  useEffect(() => {
    switch (sortStatus) {
      case "all": {
        setSortArticles(allArticles);
        break;
      }
      case "mostPopular": {
        const mostPopular = [...allArticles]
          .sort((a, b) => b.show - a.show);
        setSortArticles(mostPopular);
        break;
      }
      case "new": {
        const newArticles = [...allArticles].reverse();
        setSortArticles(newArticles);
        break;
      }
      case "old": {
        setSortArticles(allArticles);
        break;
      }
      case "frontend": {
        const frontend = [...allArticles].filter(article => article.category === 1)
        setSortArticles(frontend);
        break;
      }
      case "backend": {
        const backend = [...allArticles].filter(article => article.category === 2)

        setSortArticles(backend);
        break;
      }
      case "artificialIntelligence": {
        const artificialIntelligence = [...allArticles].filter(article => article.category === 3)

        setSortArticles(artificialIntelligence);
        break;
      }
      case "security": {
        const security = [...allArticles].filter(article => article.category === 4)

        setSortArticles(security);
        break;
      }
      default:
        setSortArticles(allArticles);
        break;
    }
  }, [sortStatus])

 
  const searchHandler = () => {
    const searchInput = document.getElementById("search");
    searchInput.value = ""
    const search = [...allArticles].filter(article => article.title.toLowerCase().includes(searchValue));
    setSortArticles(search);
  }


  return (
    <Layout>
      <div>

        <div className='flex justify-between items-center mb-10 px-4'>
          <div className='text-2xl font-semibold'>Total Articles</div>
          <div className='text-base font-semibold text-slate-300'> {sortArticles.length} <span className='text-white'>Articles</span></div>
        </div>


        <div className='grid grid-cols-12 gap-x-2'>


          <div className='col-span-3'>
            <div className="relative bg-slate-800 rounded-full overflow-hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <MagnifyingGlassIcon className='size-6' />
              </div>
              <input type="text" id="search" placeholder="Search posts ..."
                className="block border-none outline-none bg-slate-800 w-full py-4 ps-12 pe-24 text-sm  placeholder:text-slate-300 placeholder:text-sm"
                required autoComplete='off' onChange={(event) => { setSearchValue(event.target.value.toLowerCase()) }} />
              <button type="submit" onClick={searchHandler}
                className="absolute end-2.5 bottom-2.5 bg-teal-700 hover:bg-teal-900 font-medium rounded-full text-sm px-4 py-2">Search</button>
            </div>

            <div className='bg-slate-800 p-4 rounded-xl my-10'>
              <div className='flex justify-start items-center gap-2 text-lg font-medium'><FolderOpenIcon className='size-7' /> Article categories</div>
              <div className='mt-6 ms-3 space-y-5'>
                <div className="flex items-center">
                  <input checked={sortStatus === "frontend"} id="frontend" type="checkbox" value="" className="w-3 h-3 rounded" onChange={()=>setSortStatus("frontend")} />
                  <label htmlFor="frontend" className={`ms-2 text-sm font-medium ${sortStatus == "frontend" ? "text-teal-400" : "text-white/50"}`}>Frontend</label>
                </div>
                <div className="flex items-center">
                  <input checked={sortStatus === "backend"} id="backend" type="checkbox" value="" className="w-3 h-3 rounded" onChange={()=>setSortStatus("backend")} />
                  <label htmlFor="backend" className={`ms-2 text-sm font-medium ${sortStatus == "backend" ? "text-teal-400" : "text-white/50"}`}>Backend</label>
                </div>
                <div className="flex items-center">
                  <input checked={sortStatus === "artificialIntelligence"} id="artificialIntelligence" type="checkbox" value="" className="w-3 h-3 rounded text-teal-500 focus:ring-teal-400 border-gray-300" onChange={()=>setSortStatus("artificialIntelligence")} />
                  <label htmlFor="artificialIntelligence" className={`ms-2 text-sm font-medium ${sortStatus == "artificialIntelligence" ? "text-teal-400" : "text-white/50"}`}>Artificial intelligence</label>
                </div>
                <div className="flex items-center">
                  <input checked={sortStatus === "security"} id="security" type="checkbox" value="" className="w-3 h-3 rounded text-teal-500 focus:ring-teal-400 border-gray-300" onChange={()=>setSortStatus("security")} />
                  <label htmlFor="security" className={`ms-2 text-sm font-medium ${sortStatus == "security" ? "text-teal-400" : "text-white/50"}`}>Security</label>
                </div>
              </div>

            </div>

          </div>



          <div className='col-span-9'>
            <div className='flex justify-start items-center rounded-xl bg-slate-800 px-4 gap-8'>
              <div className='flex justify-start items-center me-8  py-3'>
                <ArrowsUpDownIcon className='size-7 me-1' />
                <div className='text-lg font-semibold'>Sort Articles By :</div>
              </div>
              <div onClick={() => { setSortStatus("all") }} className={`text-base cursor-pointer font-semibold px-1.5 ${sortStatus == "all" ? "text-teal-500 border-y-2 border-teal-600 py-3" : "text-slate-400"}`}>All</div>
              <div onClick={() => { setSortStatus("mostPopular") }} className={`text-base cursor-pointer font-semibold px-1.5 ${sortStatus == "mostPopular" ? "text-teal-500 border-y-2 border-teal-600 py-3" : "text-slate-400"}`}>Most popular</div>
              <div onClick={() => { setSortStatus("new") }} className={`text-base cursor-pointer font-semibold px-1.5 ${sortStatus == "new" ? "text-teal-500 border-y-2 border-teal-600 py-3" : "text-slate-400"}`}>Newest</div>
              <div onClick={() => { setSortStatus("old") }} className={`text-base cursor-pointer font-semibold px-1.5 ${sortStatus == "old" ? "text-teal-500 border-y-2 border-teal-600 py-3" : "text-slate-400"}`}>Oldest</div>
            </div>

            <div className='grid grid-cols-3 gap-4 my-10'>

              {sortArticles.length > 0 ? (
                sortArticles.map((allArticle, index) => (
                  <div key={index} className='col-span-1'>
                    <Post
                      src={post1}
                      author={allArticle.author.fullName}
                      date={allArticle.created_at && (allArticle.created_at).slice(0, 10)}
                      link={`/show-article/${allArticle.title}`}
                      title={allArticle.title}
                      desc={allArticle.shorInfo}
                    />
                  </div>
                ))
              ) : (
                <div className='col-span-3 bg-yellow-400/80 rounded-xl'>
                  <div className='flex justify-evenly items-center w-full h-56'>
                    <ShieldExclamationIcon className='size-24' />
                    <div className='font-bold font-serif text-2xl text-slate-100'>This Category Article Is Not Found !</div>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>
      </div>
    </Layout>
  )
}
