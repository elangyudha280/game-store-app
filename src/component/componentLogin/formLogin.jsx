



const FormLogin = ()=>{
    return(
        <section className="form-login w-[500px] relative h-full grid place-items-center  p-2  min-[2500px]:w-full">
            <form action="#" className="relative w-[410px]" autoComplete={false}>
                <h2 className="title-form font-gilroy-medium text-2xl text-white mb-9 ">Login</h2>
                <div className="input-group  w-full">
                    <label htmlFor="username" className="text-white bg-[#070616] font-gilroy-regular text-sm absolute left-[0.7em] translate-y-[-0.8em] px-2 rounded-md">Username</label>
                    <input type="text" id="username" name="username" placeholder="Username..." className="outline-none w-full px-4 pt-4 pb-3  bg-transparent text-white border-[1px] border-content-green rounded-md font-gilroy-medium placeholder:font-gilroy-regular caret-content-green" />
                </div>
                 <div className="input-group  w-full mt-8">
                    <label htmlFor="password" className="text-white bg-[#070616] font-gilroy-regular text-sm absolute left-[0.7em] translate-y-[-0.8em] px-2 rounded-md">Password</label>
                    <input type="password" id="password" name="password" placeholder="Password..." className="outline-none w-full px-4 pt-4 pb-3  bg-transparent text-white border-[1px] border-content-green rounded-md font-gilroy-medium placeholder:font-gilroy-regular caret-content-green" />
                </div>
                <div className="flex justify-between items-center mt-12">
                <button type="submit" className="bg-content-btn-login  px-6 py-2 rounded-md text-white font-gilroy-medium transition-all duration-300 hover:ring-[1px]  hover:bg-transparent active:scale-90">Login</button>
                <button className="btn-info-login relative  px-2 self-center">
                    <i className="fa-solid fa-info text-white"></i>
                    <span class="flex h-2 w-2  absolute right-0 top-0">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-content-purple opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-content-purple"></span>
                    </span>
                </button>
                </div>

            </form>
        </section>
    )
}

export default FormLogin;