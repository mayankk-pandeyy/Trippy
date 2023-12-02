import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";



function Footer(){
    return(
        <div className="bg-black">
            <div className="w-10/12 mx-auto pt-20 pb-20">
                {/* Upper Row */}
                <div className="flex justify-between">
                    {/* Left col */}
                    <div>
                        <div className="text-white text-3xl font-bold cursor-pointer text-start">
                            Trippy
                        </div>
                        <div className="font-poppins text-xl mt-2 pr-10 text-white">
                            Choose your favourite destination
                        </div>
                    </div>

                    {/* Right Col */}
                    <div className="flex text-white text-3xl gap-4 pr-6 hover:scale:150">
                        <a href="https://www.facebook.com/" target="_blank">
                            <FaFacebook />
                        </a>

                        <a href="https://www.instagram.com/" target="_blank">
                            <FaInstagram />
                        </a>
                        
                        <a href="https://twitter.com/login" target="_blank">
                            <FaXTwitter />
                        </a>

                        <a href="https://www.youtube.com/" target="_blank">
                            <FaYoutube />
                        </a>
                    </div>

                </div>



                {/* Bottom Row */}
                <div className="flex justify-between mt-10">
                    <div className="text-start">
                        <div className="text-white text-xl font-bold cursor-pointer text-start">Project</div>
                        <div className="font-poppins text-lg mt-2 pr-10 text-white">Changelog</div>
                        <div className="font-poppins text-lg mt-2 pr-10 text-white">Status</div>
                        <div className="font-poppins text-lg mt-2 pr-10 text-white">License</div>
                        <div className="font-poppins text-lg mt-2 pr-10 text-white">All Versions</div>
                    </div>
                    <div className="text-start">
                        <div className="text-white text-xl font-bold cursor-pointer text-start">Community</div>
                        <div className="font-poppins text-lg mt-2 pr-10 text-white">Github</div>
                        <div className="font-poppins text-lg mt-2 pr-10 text-white">Issues</div>
                        <div className="font-poppins text-lg mt-2 pr-10 text-white">Project</div>
                        <div className="font-poppins text-lg mt-2 pr-10 text-white">Twitter</div>
                    </div>
                    <div className="text-start">
                        <div className="text-white text-xl font-bold cursor-pointer text-start">Help</div>
                        <div className="font-poppins text-lg mt-2 pr-10 text-white">Support</div>
                        <div className="font-poppins text-lg mt-2 pr-10 text-white">Troubleshooting</div>
                        <div className="font-poppins text-lg mt-2 pr-10 text-white">Contact Us</div>
                    </div>
                    <div className="text-start">
                        <div className="text-white text-xl font-bold cursor-pointer text-start">Others</div>
                        <div className="font-poppins text-lg mt-2 pr-10 text-white">Terms of Service</div>
                        <div className="font-poppins text-lg mt-2 pr-10 text-white">Privacy Policy</div>
                        <div className="font-poppins text-lg mt-2 pr-10 text-white">License</div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Footer;