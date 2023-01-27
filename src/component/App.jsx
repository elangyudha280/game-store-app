import { useState,useEffect } from 'react'
import FormLogin from './componentLogin/formLogin'
import ImgLogin from './componentLogin/imgLogin'
import Loading from './loading';

function App() {

  const [loading,setLoading] = useState(false);

    
  // useEffect(() => {
  //   const onPageLoad = (event) => {
  //     if (event.target.readyState === "complete") {
  //       document.querySelector('.loading').classList.add('opacity-0')                
  //       if(document.querySelector('.loading').classList.contains('opacity-0')){
  //        setTimeout(() => {
  //         setLoading(value=>value = false)
  //         document.querySelector('.loading').classList.remove('opacity-0')
  //        }, 600);
  //       }
  //     }
  //     else{
  //       setLoading(false)
  //     }
  //   };

  //   document.addEventListener("readystatechange",onPageLoad);

  //   return ()=>{
  //     return document.removeEventListener('readystatechange',onPageLoad)
  //   }
  // },[])
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
