import { CardThree } from '../Components/Cards'
import { FooterFour } from '../Components/Footer'
import { FeatureTwo } from '../Components/Feature'
import { NavbarDefault } from '../Components/Navbar'
import Search from '../Components/Search'


const Home = () => {
    return ( <div>
        <div className='flex flew-wrap flex-col'>
        <div className='flex flex-wrap justify-center w-full'>
            <NavbarDefault/>
        </div>
        <div className='mt-20'>
          <Search/>
        </div>
        <div className='flex flex-wrap flex-row '>
            <div>
              <CardThree/>
            </div>
        </div>
        <FeatureTwo/>
        <FooterFour/>
    </div>
    </div> );
}
 
export default Home;