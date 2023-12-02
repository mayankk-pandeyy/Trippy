import Navbar from "../components/Navbar";
import hero1 from '../assets/night.jpg'
import Hero from "../components/Hero";
import RecentTrips from "../components/RecentTrips";
import Footer from "../components/Footer";


function Service(){

    return(
        <div>
            <div>
                <Navbar/>
                <Hero 
                    class="hero-mid"
                    heroImg = {hero1}
                    title = "Our Services"
                    url="/"
                    button="Contact Us"
                />
            </div>
            <div className="mt-[-150px]">
                <RecentTrips/>
            </div>
            <Footer/>
        </div>
    );


}

export default Service;