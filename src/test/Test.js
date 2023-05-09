import React from "react";

const Test = () =>{
    return(
        <nav className=" bg-blue-400 mx-auto px-14 flex justify-between items-center h-24">
            <div className="">
                <a href="/#" className="text-white font-bold text-4xl"> Dahook</a>
            </div>
            <div className="hidden md:flex md:items-center space-x-12 text-white">
                <a href="/#" className=" hover:text-gray-500 transition duration-200">Home</a>
                <a href="/#" className=" hover:text-gray-500 transition duration-200">Category</a>
                <a href="/#" className=" hover:text-gray-500 transition duration-200">Blog</a>
                <a href="/#" className=" hover:text-gray-500 transition duration-200">Contact</a>
            </div>
            <div className=" space-x-10">
                <input 
                placeholder="Search Product" 
                className=" rounded-md w-[250px] 
                h-[40px] p-4 relative
                transition duration-200
              text-gray-500 outline-none"
                ></input>
                {/* <img src="./img/search.png" alt="" className=" absolute r-0"/> */}
                <button className=" 
                w-[100px] h-[50px] 
                bg-blue-600 
                transition 
                duration-200 
                rounded-3xl 
                text-white text-lg 
                hover:bg-white 
                hover:text-blue-600"
                >Sign In</button>
            </div>

        </nav>
    );
};

export default Test;