// components
import Slider from '../components/home/Slider';
import CollectionCards from '../components/home/CollectionCards';
import ProductList from '../components/home/ProductList';

export default function Home() {
     return(
          <div>
               <Slider />
               <div className='absolute top-[100vh]'>
                    <CollectionCards />
                    <ProductList />
               </div>
          </div>
     );
}