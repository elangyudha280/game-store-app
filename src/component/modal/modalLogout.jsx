import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { DashboardContext } from "../../context/dashboardContext"
import setStorage from "../../modules/setLocalStorage.mjs"


const ModalLogout = ()=>{

    let {state,dispatch} = useContext(DashboardContext)
    let toHome = useNavigate()
    let hiddenModalLogout = () =>{
        dispatch({type:'showModalLogout'})
    }

    let logOut = ()=>{
        setStorage.removeStorage('token')
        setStorage.removeStorage('user')
        setStorage.removeStorage('password')
        toHome('/')
    }

    return (
    <section onClick={hiddenModalLogout} className="modal-logout fixed w-full h-full  p-3 grid items-center top-0 left-0 bg-[rgba(0,0,0,0.4)] z-30">
        <div className="container-modal mx-auto w-full min-[330px]:w-[300px] animate-show rounded-md p-5 bg-[#1D1725]" onClick={(e)=>e.stopPropagation()}>
        <i className="fa-solid fa-triangle-exclamation text-7xl text-center block text-red-600"></i>
            <div className="action-modal w-full flex gap-3 flex-wrap items-center text-white font-gilroy-bold justify-center mt-5">
                <button onClick={hiddenModalLogout} className="btn-cancel py-2 px-4 rounded-full bg-content-dark-gray transition-all duration-100 hover:opacity-80 active:scale-90">
                    Cancel
                </button>
                <button onClick={logOut} className="btn-logout py-2 px-4 rounded-full bg-red-600  transition-all duration-100 hover:opacity-80 active:scale-90">
                    Logout
                </button>
            </div>
        </div>
    </section>
    )
}


export default ModalLogout