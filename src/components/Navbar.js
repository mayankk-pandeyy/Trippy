import React from "react";
import { Link } from "react-router-dom";
import NavItems from "./NavItems";


function Navbar(){
    return(
        <div className="w-[100%] flex justify-center">
            <nav className="flex justify-between items-center px-[30px] py-0 shadow-3xl w-[95%] h-[80px] rounded-xl font-poppins mt-2 fixed bg-white z-10">
                {/* Navbar Logo */}
                <div className="text-[#222] text-3xl font-bold cursor-pointer">
                    <Link to="/">
                        Trippy
                    </Link>
                </div>

                {/* Nav Links */}
                <div>
                    <ul className="flex gap-5 items-center">
                        {NavItems.map((item, index)=>{
                            return(
                                <div>
                                    <li key={index}>
                                        <Link to={item.url} className="flex px-3 py-3 items-center cursor-pointer gap-2 text-xl hover:bg-[#01959a] hover:text-white hover:rounded transition-al">
                                            {item.icon}{item.title}
                                        </Link>
                                    </li>
                                </div>
                            );
                        })}
                        <button className="text-xl rounded hover:bg-[#151516] hover:text-[#fff] transition-all px-4 py-2">
                            Sign Up
                        </button>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;