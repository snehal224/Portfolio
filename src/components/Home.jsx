import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Type from "./Type";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-8 flex flex-col items-center justify-center h-full px-4 md:flex-row-reverse">
        <div className="flex flex-col mx-3 justify-center h-full">
          <h6 className="text-2xl sm:text-4xl font-bold text-white">
            I'm 
            <Type></Type>
          </h6>
          
          <p className="text-gray-400 py-4 max-w-md">
            Hello, I'm SNEHAL KALE,
            highly motivated software developer ,web developer and problem solver with a passion for 
            creating engaging and user-friendly digital experiences. With a strong background 
            in front-end and back-end development, I strive to deliver innovative solutions that 
            meet the unique needs of clients and users.
            
          </p>

          <div>
            <Link
              to="skills"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              
            Skills
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-4xl  px-6 py-3 my-auto mx-auto w-2/3 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
