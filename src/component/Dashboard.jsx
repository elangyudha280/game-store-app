import { useEffect,useState,useReducer } from "react";
import {DashboardContext} from '../context/dashboardContext'
import reducer from "../features/reducer";

import Navbar from "./componentDashboard/Navbar";



// component loading
import Loading from "./loading";
import ModalLogout from "./modal/modalLogout";


let dashboardDatas = {
  showDevide:false,
  showModalLogout:true
}

const Dashboard = ()=>{

  let [state,dispatch] = useReducer(reducer,dashboardDatas)
    
  const [loading,setLoading] = useState(true);

  let detail = {
    state,
    dispatch
  }
    
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
        <DashboardContext.Provider value={detail}>
          {
              (loading) ? <Loading/> 
              :
              <section className="Dashboard animate-show gradient overflow-x-hidden  relative w-[100%] h-[100vh]">
                    
                    {/* component navbar */}
                    <Navbar/>

              {/* modal logout */}
                {
                  (state.showModalLogout) && <ModalLogout/>
                }
              </section>
          }
        </DashboardContext.Provider>
       </>
    )
}

export default Dashboard;