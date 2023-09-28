import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About 
          </p>
        </div>

        <p className="text-xl mt-10">
        I am  final year student  with a strong passion for creating innovative
        solutions and solving complex problems. With Bachelors Degree in Computer Science from IIIT NAGPUR, 
        I have honed my skills in both front-end and back-end development, allowing me to craft seamless and user-friendly 
        web applications.
        </p>

        <br />
        <p className="text-xl mt-10">
        I possess formidable problem-solving skills and boast a deep proficiency in data structures and algorithms. I have successfully tackled over 300 high-quality DS and Algorithm challenges across diverse platforms, including LeetCode, HackerRank, and Geeks for Geeks.
        </p>

        <p className="text-xl mt-10 mb-10">
       Beyond my coding Journey I am an adept communicator and a collaborative team player. Flourishing in group settings, I relish sharing ideas, learning from peers, and contributing to collective aspirations. My core values include forging robust connections with clients and colleagues, grounded in trust, respect, and effective communication. My goal is to continuously refine my craft while nurturing meaningful professional relationships.
        </p>
      </div>
    </div>
  );
};

export default About;