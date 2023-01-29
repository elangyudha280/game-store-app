import { useState,useEffect } from 'react'
import FormLogin from './componentLogin/formLogin'
import ImgLogin from './componentLogin/imgLogin'
import Loading from './loading';

function App() {

  const [loading,setLoading] = useState(true);

    
  useEffect(() => {
    document.title = 'Login page'
    let domLoad = ()=>{
      setLoading(true)
    }
    if (document.readyState !== 'loading') {
       setTimeout(() => {
        document.querySelector('.loading').classList.add('opacity-0')
       }, 500);
       setTimeout(() => {
        setLoading(false)
        document.querySelector('.loading').classList.remove('opacity-0')
       }, 800);
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
        <section className="App">
          {/* component img form */}
          <ImgLogin/>
          {/* component form login */}
          <FormLogin/>
        </section>
      }
    </>
  )
}

export default App
