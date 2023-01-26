import { useState } from 'react'
import FormLogin from './component/componentLogin/formLogin'
import ImgLogin from './component/componentLogin/imgLogin'

function App() {

  return (
    <div className="App relative w-full h-[100vh] bg-[#070616] grid grid-cols-[1fr_auto] auto-rows-auto overflow-x-hidden overflow-y-auto min-[2500px]:grid-cols-[1fr_0.4fr]">

      {/* component img form */}
      <ImgLogin/>
      {/* component form login */}
      <FormLogin/>
    </div>
  )
}

export default App
