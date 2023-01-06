// icons 
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline'; 

export default function Slider() {
     return(
          <div>
               {/* slide left icon */}
               <div className='absolute left-0 top-[50%] p-2 bg-white rounded-full ml-3 shadow-sm hover:bg-orange-500 hover:text-white transition-colors cursor-pointer flex items-center justify-center'>
                    <ChevronLeftIcon className='w-7' />
               </div>
               {/* slide right icon */}
               <div className='absolute right-0 top-[50%] p-2 bg-white rounded-full mr-3 shadow-sm hover:bg-orange-500 hover:text-white transition-colors cursor-pointer flex items-center justify-center'>
                    <ChevronRightIcon className='w-7' />
               </div>
               {/* content */}
               <div className='w-screen'>
                    <img className='w-full h-screen object-cover' src="http://localhost:1337/uploads/phillip_goldsberry_f_Zule_Efe_A1_Q_unsplash_a8ae280421.jpg?updated_at=2023-01-06T00:57:11.067Z" alt="" />
               </div>
          </div>
     )
}