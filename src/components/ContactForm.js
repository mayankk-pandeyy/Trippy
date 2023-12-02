


function Contactform(){

    return(
        <div className="w-10/12 mx-auto text-[#2a2a2a] mt-[-150px] pb-10">
            <div className="text-5xl font-bold">
                Send a message to us!
            </div>
            <form className="flex flex-col pt-12 items-center gap-2 w-1/2 mx-auto">
                <input type="text" placeholder="Mayank Pandey" className="h-[3rem] py-0 px-4 mb-8 rounded-md border border-[#2a2a2a] w-full"/>
                <input type="email" placeholder="mayankp7781@gmail.com" className="h-[3rem] py-0 px-4 mb-8 rounded-md border border-[#2a2a2a] w-full"/>
                <input type="text" placeholder="Subject" className="h-[3rem] py-0 px-4 mb-8 rounded-md border border-[#2a2a2a] w-full"/>
                <textarea type="text" placeholder="Message" rows="4" className="py-0 px-4 mb-8 rounded-md border border-[#2a2a2a] w-full"/>
                <button className="py-2 text-xl text-white px-4 mb-8 rounded-md bg-slate-400 w-full hover:bg-slate-800 hover:text-white transition duration-700">Send Message</button>
            </form>
        </div>
    );


}

export default Contactform;