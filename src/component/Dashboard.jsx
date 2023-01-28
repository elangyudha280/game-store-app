import { useEffect } from "react";


const Dashboard = ()=>{

    useEffect(()=>{
        document.title = 'Dashboard page'
    },[])

    return(
        <section className="Dashboard gradient overflow-x-hidden  relative w-[100%] h-[100vh]">
                  
        </section>
    )
}

export default Dashboard;