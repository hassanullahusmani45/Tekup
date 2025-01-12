import { ArrowsUpDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Layout from '../../Layout/Layout'

export default function posts() {
  return (
    <Layout>
      <div>

        <div className='flex justify-between items-center mb-10 px-4'>
          <div className='text-2xl font-semibold'>Total Posts</div>
          <div className='text-base font-semibold text-slate-300'>462 <span className='text-lg text-white'>Posts</span></div>
        </div>


        <div className='grid grid-cols-12 gap-x-2'>

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

            

          </div>

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


          </div>
        </div>
      </div>
    </Layout>
  )
}
