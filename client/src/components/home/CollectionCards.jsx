export default function CollectionCards() {
     return(
          <div className='w-screen absolute top-[100vh] flex justify-center gap-x-5 my-20'>
               <div>
                    <img src="http://localhost:1337/uploads/yellow_office_chair_65c2c38ac6.webp?updated_at=2023-01-09T20:17:09.439Z" className='object-cover' alt="" />
                    <div className='absolute top-0 ml-5 flex flex-col gap-y-7 mt-10'>
                         <h3 className='font-semibold text-2xl w-[60%]'>New Office Chair Collection</h3>
                         <a href="/shop" className='underline text-gray-700 hover:text-orange-500 transition-colors'>Shop Now</a>
                    </div>
               </div>
               <div>
                    <img src="http://localhost:1337/uploads/brown_bench_d2572e26bf.webp?updated_at=2023-01-09T20:18:58.062Z" alt="" />
                    <div className='absolute top-0 ml-5 flex flex-col gap-y-7 mt-10'>
                         <h3 className='font-semibold text-2xl w-[60%]'>Living Room Collection</h3>
                         <a href="/shop" className='underline text-gray-700 hover:text-orange-500 transition-colors'>Shop Now</a>
                    </div>
               </div>
               <div>
                    <img src="http://localhost:1337/uploads/color_pattern_bench_afe8c72fd5.webp?updated_at=2023-01-09T20:18:58.074Z" alt="" />
                    <div className='absolute top-0 ml-5 flex flex-col gap-y-7 mt-10'>
                         <h3 className='font-semibold text-2xl w-[60%]'>Children Room Collection</h3>
                         <a href="/shop" className='underline text-gray-700 hover:text-orange-500 transition-colors'>Shop Now</a>
                    </div>
               </div>
          </div>
     );
}