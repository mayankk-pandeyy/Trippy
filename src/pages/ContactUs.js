import Navbar from "../components/Navbar";
import hero1 from '../assets/2.jpg'
import Hero from "../components/Hero";
import Contactform from "../components/ContactForm";
import Footer from "../components/Footer";

function ContactUs(){

    return(
        <div>
        <Navbar/>
        <Hero 
            class="hero-mid"
            heroImg = {hero1}
            title = "We Love to Connect"
            url="/"
            button="Contact Us"
        />
        <Contactform/>
        <Footer/>
    </div>
    );


}

export default ContactUs;