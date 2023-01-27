import bgLogin from '../../assets/bg-login.png'



const ImgLogin = ()=>{
    return (
        <section className="img-login relative w-full h-[430px] p-3  overflow-hidden brightness-90 bg-cover bg-center bg-no-repeat slg:h-full">
            <img src={bgLogin} className="absolute animate-show-img  opacity-0 transition-all duration-500 p-0 m-0 top-0 left-0 w-full h-full object-cover object-center" alt="" />
            <div className="bg-dark w-full h-full bg-[rgba(0,0,0,0.5)] absolute top-0 left-0"></div>
            <h2 className="title-img-login animate-show text-white text-4xl min-[413px]:text-5xl font-gilroy-medium text-center top-[20%] z-20 uppercase relative select-none min-[3000px]:text-8xl">Easy<span className="font-gilroy-bold">Games</span></h2>
            <p className="desc-img-login animate-show text-white text-[1em] min-[413px]:text-lg font-montserrat font-[400] text-center top-[22%] z-20 uppercase relative select-none min-[3000px]:text-2xl">
            your most wanted games are here
            </p>

        </section>
    )
}

export default ImgLogin;