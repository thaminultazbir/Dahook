import React from "react";

const Test = () =>{
    return(
        <nav className=" bg-blue-400 mx-auto px-14 flex justify-between items-center h-24">
            <div className="">
                <a href="/#" className="text-white font-bold text-4xl"> Dahook</a>
            </div>
            <div className="hidden md:flex md:items-center space-x-12 text-white">
                <a href="/#">Home</a>
                <a href="/#">Category</a>
                <a href="/#">Blog</a>
                <a href="/#">Contact</a>
            </div>
            <div>
                <input placeholder="Search Product"></input>
                <button>Sign In</button>
            </div>

        </nav>
    );
};

export default Test;