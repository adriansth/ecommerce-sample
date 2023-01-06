// icons
import { MagnifyingGlassIcon, UserIcon, ShoppingCartIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
// react router
import { Link } from 'react-router-dom';

export default function Navbar() {
     return(
          <div className='w-screen'>
               {/* logo and icons section */}
               <div className='w-full flex justify-between items-center py-5 px-20'>
                    <div>
                         <span className='font-bold text-3xl text-gray-700'>BestShop</span>
                    </div>
                    <div className='flex gap-x-3'>
                         <MagnifyingGlassIcon className='w-5 hover:text-orange-500 cursor-pointer transition-colors' />
                         <div className='w-[1px] h-8 bg-gray-700'></div>
                         <UserIcon className='w-5 hover:text-orange-500 cursor-pointer transition-colors' />
                         <div className='w-[1px] h-8 bg-gray-700'></div>
                         <ShoppingCartIcon className='w-5 hover:text-orange-500 cursor-pointer transition-colors' />
                    </div>
               </div>
               {/* navs section */}
               <div className='w-full bg-gray-300 flex justify-center py-5 gap-x-10 px-20'>
                    <Link to='/' className='hover:text-orange-500 cursor-pointer transition-colors text-sm'>Home</Link>
                    <Link to='/about' className='hover:text-orange-500 cursor-pointer transition-colors text-sm'>About Us</Link>
                    <div className='flex gap-x-1 items-center hover:text-orange-500 cursor-pointer transition-colors'>
                         <Link to='/shop' className='text-sm'>Shop</Link>
                         <ChevronDownIcon className='w-3' />
                    </div>
                    <Link to='/blog' className='hover:text-orange-500 cursor-pointer transition-colors text-sm'>Blog</Link>
                    <Link to='/contact' className='hover:text-orange-500 cursor-pointer transition-colors text-sm'>Contact Us</Link>
               </div>
          </div>
     );
}