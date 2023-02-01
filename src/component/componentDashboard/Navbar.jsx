import imgProfile from '../../assets/bg-login2.webp'
import { useRef,useEffect,useState,useContext } from 'react'
import { DashboardContext } from '../../context/dashboardContext'


// component devide logout
const DevideLogout = ()=>{
    return (
        <>
           <button  className="devide-profile  absolute  right-0 gap-3 top-[190%] w-[110px]  bg-[#1c2541] py-2 px-3 rounded-md transition-all duration-75 flex items-center shadow-[0_0_0.5em_#1c2541] font-gilroy-medium text-white hover:text-red-500 active:scale-95">
                        <i className="fa-solid fa-power-off  "></i>
                        <span className="logout-text m-0 p-0  flex-1  text-start">Logout</span>
                        </button>
        </>
    )
} 


const Navbar = ()=>{

    
    let {state,dispatch} = useContext(DashboardContext)

    // event toggle devide profile
    let toggleDevide = ()=>{
        dispatch({type:'showDevide'})
    }

    return (
        <nav className="navbar relative w-full h-[62px] py-[0.9em] px-4  bg-[#1D1725] shadow-[0_0.8em_1em_rgba(0,0,0,0.3)]">
            <div className="container-nav mx-auto max-w-7xl h-full  flex ">
                <a href="#" className="title-nav  font-gilroy-bold text-content-purple flex items-center text-xl">Easy<span className="font-gilroy-medium text-white ">games</span></a>
                <div className="nav-item  flex-1 flex gap-2 justify-end relative items-center ">
                        <button onClick={toggleDevide} className="profile devide w-[130px] h-full gap-2 bg-[#1c2541] py-2 px-3 flex items-center rounded-full">
                            <i className="devide arrow-devide fa-solid fa-angle-up scale-90 text-white rotate-[180deg] transition-all duration-300"></i>
                            <span className="nav-username devide w-[50px] font-gilroy-medium text-white truncate">{localStorage.getItem('user')}</span>
                            <img src={imgProfile} alt="img_profile" className='devide absolute right-0 top-0 w-[37px] h-full rounded-full' />
                        </button>
                     {
                        (state.showDevide)  && <DevideLogout/>
                     }
                </div>
            </div>
        </nav>
    )
}


export default Navbar;