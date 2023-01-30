import { useEffect,useState } from "react";
import Navbar from "./componentDashboard/Navbar";
// component loading
import Loading from "./loading";


const Dashboard = ()=>{

    
  const [loading,setLoading] = useState(true);
    
  useEffect(() => {
    document.title = 'Dashboard page'
    let domLoad = ()=>{
      setLoading(true)
    }
    if (document.readyState !== 'loading') {
       setTimeout(() => {
        document.querySelector('.loading').classList.add('opacity-0')
       }, 400);
       setTimeout(() => {
        setLoading(false)
        document.querySelector('.loading').classList.remove('opacity-0')
       }, 775);
    } else {
      document.addEventListener('DOMContentLoaded',domLoad);
  }
    return ()=>{
      return  document.removeEventListener('DOMContentLoaded',domLoad);
    }
  },[])

    return(
       <>
        {
            (loading) ? <Loading/> 
            :
            <section className="Dashboard animate-show gradient overflow-x-hidden  relative w-[100%] h-[100vh]">
                  
                  {/* component navbar */}
                  <Navbar/>

            </section>
        }
       </>
    )
}

export default Dashboard;