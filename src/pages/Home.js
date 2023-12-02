import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import hero1 from '../assets/12.jpg'
import Destination from "../components/Destination";
import RecentTrips from "../components/RecentTrips";
import Footer from "../components/Footer";


function Home(){

    return(
        <div>
            <Navbar/>
            <Hero 
                class="hero"
                heroImg = {hero1}
                title = "Your Journey Your Story"
                text = "Choose Your Favourite Destination"
                url="/"
                button="Travel Plan"
            />
            <Destination/>
            <RecentTrips/>
            <Footer/>
        </div>
    );


}

export default Home;