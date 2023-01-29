import { useState,useEffect } from "react";
import setStorage from "../../modules/setLocalStorage.mjs";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const FormLogin = ()=>{

    const { register, formState: { errors }, handleSubmit } = useForm();
    let toDashboard = useNavigate()
    // event login 
    const eventLogin = (e)=>{
      
        // set  token and data user
        setStorage.addStorage('token','fake token')
        setStorage.addStorage('user',e.username)
        setStorage.addStorage('password',e.password)
        
        toDashboard('/dashboard')
    }

   


    return(
        <section className="form-login w-full  px-3 py-[6em] relative h-full grid  place-items-center  slg:p-2 slg:w-[500px] min-[2500px]:w-full">
            <section  className="relative animate-show-img opacity-0 w-full min-[450px]:w-[410px]"  >
                <h2 className="title-form font-gilroy-medium text-2xl text-white mb-9 ">Login</h2>
              <form action="#" onSubmit={handleSubmit(eventLogin)} autoComplete="off">
                  {/* input username */}
                  <div className="input-group  w-full">
                    <label htmlFor="username" className="text-white bg-[#070616] font-gilroy-regular text-sm absolute left-[0.7em] translate-y-[-0.8em] px-2 rounded-md">Username</label>
                    <input type="text" {...register('username')} required id="username" name="username" placeholder="Username..." className="input-username" />
                </div>
                {/* input password */}
                 <div className="input-group  w-full mt-8">
                    <label htmlFor="password" className="text-white bg-[#070616] font-gilroy-regular text-sm absolute left-[0.7em] translate-y-[-0.8em] px-2 rounded-md">Password</label>
{                    <input type="password" {...register('password')} required id="password" name="password" placeholder="Password..." className="input-password" />
}                </div>
                <div className="flex gap-3 mt-8 items-center  flex-wrap">
                <button type="submit"  className="bg-content-btn-login   px-6 py-2 rounded-md text-white font-gilroy-medium transition-all duration-300 hover:ring-[1px] cursor-pointer hover:bg-transparent active:scale-90">Login</button>
                {/* button info account */}
                </div>
              </form>
               

            </section>
        </section>
    )
}

export default FormLogin;