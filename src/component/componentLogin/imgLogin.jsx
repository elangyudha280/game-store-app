



const ImgLogin = ()=>{
    return (
        <section className="img-login relative w-full h-full bg-[url(./bg-login.png)] p-2 brightness-90 bg-cover bg-center bg-no-repeat ">
            <div className="bg-dark w-full h-full bg-[rgba(0,0,0,0.5)] absolute top-0 left-0"></div>
            <h2 className="title-img-login text-white text-5xl font-gilroy-medium text-center top-[20%] z-20 uppercase relative select-none min-[3000px]:text-8xl">Easy<span className="font-gilroy-bold">Games</span></h2>
            <p className="desc-img-login text-white text-lg font-montserrat font-[400] text-center top-[22%] z-20 uppercase relative select-none min-[3000px]:text-2xl">
            your most wanted games are here
            </p>

        </section>
    )
}

export default ImgLogin;