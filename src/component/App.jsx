import { useState,useEffect } from 'react'
import FormLogin from './componentLogin/formLogin'
import ImgLogin from './componentLogin/imgLogin'
import Loading from './loading';

function App() {

  const [loading,setLoading] = useState(true);

    
  useEffect(() => {
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
       }, 620);
    } else {
      document.addEventListener('DOMContentLoaded',domLoad);
  }
    return ()=>{
      return  document.removeEventListener('DOMContentLoaded',domLoad);
    }
  },[])

  return (
    <>
      {
        (loading)? <Loading/> :
        <div className="App relative w-full h-[100vh] animate-show bg-[#070616] grid auto-rows-auto grid-cols-[1fr] overflow-x-hidden overflow-y-auto  slg:grid-cols-[1fr_auto]  min-[2500px]:grid-cols-[1fr_0.4fr]">

          {/* component img form */}
          <ImgLogin/>
          {/* component form login */}
          <FormLogin/>
        </div>
      }
    </>
  )
}

export default App
