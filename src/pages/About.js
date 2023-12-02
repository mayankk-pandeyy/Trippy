import Navbar from "../components/Navbar";
import hero1 from '../assets/night.jpg'
import Hero from "../components/Hero";
import AboutDesc from "../components/AboutDesc";
import Footer from "../components/Footer";



function About(){

    return(
        <div>
            <Navbar/>
            <Hero 
                class="hero-mid"
                heroImg = {hero1}
                title = "About"
                url="/"
                button="Contact Us"
            />
            <AboutDesc/>
            <Footer/>
        </div>
    );


}

export default About;