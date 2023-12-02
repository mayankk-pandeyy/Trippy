import Card from "./Card";
import image6 from "../assets/5.jpg"
import image7 from "../assets/4.jpg"
import image8 from "../assets/10.jpg"



function RecentTrips(){


    return(
        <div className="mt-14 pb-16">
            <div className="pb-8">
                <div className="text-6xl font-bold text-slate-900 font-poppins">
                    Recent Trips
                </div>
                <div className="text-xl mt-4 text-slate-600 font-poppins">
                    You can discover unique destinations using Google Maps.
                </div>
            </div>
            <div className="flex w-10/12 mx-auto gap-3">
                <Card
                image={image6}
                title= "Trip in Indonesia"
                description="Indonesia, officially the Republic of Indonesia, is a country in Southeast 
                Asia and Oceania between the Indian and Pacific oceans.
                 It consists of over 17,000 islands, including Sumatra, Java, 
                 Sulawesi, and parts of Borneo and New Guinea."
                />

                <Card
                image={image7}
                title= "Trip in Malaysia"
                description="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. 
                It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences."
                />

                <Card
                image={image8}
                title= "Trip in France"
                description="France, in Western Europe, encompasses medieval cities, alpine villages and 
                Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art 
                museums including the Louvre and monuments like the Eiffel Tower."
                />
            </div>
        </div>
    );
}

export default RecentTrips;