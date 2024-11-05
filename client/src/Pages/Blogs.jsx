// <<<<<<< HEAD
import { BookingCard } from "../Components/Cards1";
// import { SidebarWithLogo } from "../Components/SideBar";
import { SidebarWithSearch } from '../Components/SideBar'

const Blogs = () => {
  return ( 
  <div className="flex flex-row" >
    <div>
    <SidebarWithSearch/>
    </div>
    <div className="ml-[22rem] mt-2 grid grid-cols-3  gap-4 "> 
        <BookingCard/>
        <BookingCard/>
        <BookingCard/>  
        <BookingCard/>  
        <BookingCard/>  
        <BookingCard/>  

    </div>    
  </div> 
  );
}
 
export default Blogs;
