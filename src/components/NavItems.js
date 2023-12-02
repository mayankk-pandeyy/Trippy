import { FaHome } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { IoMdContact } from "react-icons/io";


const NavItems = [
    {
        title : "Home",
        url : "/",
        className : "nav-links",
        icon : <FaHome/>
    },
    {
        title : "About",
        url : "/about",
        className : "nav-links",
        icon : <MdExpandMore />
    },
    {
        title : "Service",
        url : "/service",
        className : "nav-links",
        icon : <GrServices />
    },
    {
        title : "Contact",
        url : "/contact",
        className : "nav-links",
        icon : <IoMdContact />
    },
]

export default NavItems;