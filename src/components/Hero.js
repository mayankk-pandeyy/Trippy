import React from "react";


function Hero(props){
    return(
        <div className="h-[100vh] w-[100vw] relative">
            <img src={props.heroImg} alt="hero" className={props.class}/>
            <div className="absolute top-[55%] left-[50%] w-[100%] -translate-x-[50%] -translate-y-[50%]">
                <div className="text-6xl font-extrabold text-white">
                    {props.title}
                </div>
                <div className="text-2xl pt-6 font-semibold pl-0 pb-[2rem] pr-0 text-white">
                    {props.text}
                </div>
                <button className="bg-white py-4 px-8 rounded-md transition-all text-[1.1rem] font-bold tracking-[2px] cursor-pointer hover:bg-slate-700 hover:text-yellow-200">
                    {props.button}
                </button>
            </div>
        </div>
    );


}
export default Hero;