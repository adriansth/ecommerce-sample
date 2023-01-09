export default function Slider() {
     return(
          <div>
               {/* content */}
               <div className='w-screen'>
                    <img className='w-full h-[95%] object-cover absolute z-0' src="http://localhost:1337/uploads/katja_rooke_Ub_Ka73_V_Yt_WU_unsplash_dba0ce0c53.jpg?updated_at=2023-01-09T19:51:45.278Z" alt="" />
                    <div className='absolute z-2 w-full h-full flex flex-col gap-y-5 items-center justify-center'>
                         <h3 className='text-4xl font-semibold text-white'>New Products</h3>
                         <h2 className='text-7xl font-semibold text-white'>Flexible Sofa Set</h2>
                         <p className='text-lg text-white'>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                         <button className='bg-orange-500 text-white py-3 px-10 hover:bg-orange-400 transition-colors'>Shop Now</button>
                    </div>
               </div>
          </div>
     )
}