import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/5.jpg"
import img4 from "../assets/8.jpg"

function Destination(){

    return(
        <div className="mt-14 pb-16">
            <div>
                <div className="text-6xl font-bold text-slate-900 font-poppins">
                    Popular Destinations
                </div>
                <div className="text-xl mt-4 text-slate-600 font-poppins">
                    Tours give you the opportunity to see a lot within a time frame
                </div>
                <div className="flex w-10/12 mx-auto justify-between mt-10">
                    {/* Left Column */}
                    <div className="flex flex-col w-[48%] text-start mt-6">
                        <div className="text-2xl font-poppins font-bold">
                            Taal Volcano, Batangas
                        </div>
                        <div className="font-poppins text-xl mt-6 pr-10 text-gray-600">
                        One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you’ll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex w-[48%] gap-4">
                        <div>
                            <img src={img1} className="h-full mt-10 rounded-md object-cover"/>
                        </div>
                        <div>
                            <img src={img2} className="h-full rounded-md object-cover"/>
                        </div>
                    </div>
                </div>
            </div>


            <div className="pt-10">
                <div className="flex w-10/12 mx-auto justify-between mt-10">
                    {/* Left Column */}

                    <div className="flex w-[48%] gap-4">
                        <div className="w-[50%]">
                            <img src={img3} className="h-full mt-10 rounded-md object-cover"/>
                        </div>
                        <div className="w-[50%]">
                            <img src={img4} className="h-full rounded-md object-cover"/>
                        </div>
                    </div>


                    {/* Right Column */}


                    <div className="flex flex-col w-[48%] text-start mt-6">
                        <div className="text-2xl font-poppins font-bold">
                            Mt. Daguldul, Batangas
                        </div>
                        <div className="font-poppins text-xl mt-6 pr-10 text-gray-600">
                        If you’re looking for a hike that’s a little more challenging but still good for a beginner mountaineer, check out Mt. Daguldul in San Juan, Batangas. You’ll start your hike from the beach and pass through tropical forest, different rock formations, and small streams. There’s a small store halfway up the trail where you can take a break and drink buko juice, and though the summit itself may not have the best view, the breeze is fantastic. Once you’ve made it back down, head straight to the beach for a refreshing, well-deserved swim.
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );


}

export default Destination;