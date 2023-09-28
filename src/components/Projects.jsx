import React from "react";


const Projects = () => {
  const portfolios = [
    {
      id: 1,
   
      title:"IIITN-Hostel-Management-System",
      desc:" A system built for hostel room allocation and management .This web application has two users student and admin.Admin can allocate rooms,add rooms,add fee structure,view room allotment and manage it.Student can make registration and apply for room allotment.",
      codeLink: "https://github.com/snehal224/IIITN_Hostel_Management",
    },
    {
      id: 2,
   
      title:"Vehical Number Plate Recognition System ",
      desc:" Machine learning model for detecting vehical licence plate. Implemented using tensorflow,keras,opencv. Model is build using CNN and chatracter segmentation.licence plate is detected from vehical correctly with acurracy of 87.4percent",
      codeLink: "https://github.com/snehal224/Number_plate_recognition_system",
    },
    {
      id: 3,
   
      title:"Data Analysis Of Human Development Index",
      desc:"This project will analyse the development of various countries on the basis of Human Development Index (HDI) and determine the correlation between development and various factors.various graphs are drawn using matplotlib to analyze HD",
      codeLink: "https://github.com/snehal224/DATA-ANALYSIS-OF-HUMAN-DEVELOPMENT-INDEX",
    },
    {
      id: 4,
   
      title:"Placement Record Management System",
      desc:" Asystem build for storing and retrieving the information of students, companies and the placements done in a college.Users with role of TnP and they can add student details, companies coming for placements and placement record for every student placed.",
      codeLink: "https://github.com/snehal224",
    },
    {
      id: 5,
   
      title:"Threshold-of-Hope",
      desc:"The sole purpose of this website is to provide help on Mental Health Problems in this Modern Era where Mental Health Issues need to be treated. ",
      codeLink: "https://github.com/snehal224/Threshold-of-Hope",
    },
    {
      id: 6,
   
      title:"BIGINT-IMPLEMENTATION-IN-CPP",
      desc:" The is to create a program which can simulate the basic operations like addition and subtraction on really long integers by best utilising the underlying architecture. It is similar to the functionality provided by the BigInt class in java.",
      codeLink: "https://github.com/snehal224/BIGINT-IMPLEMENTATION-IN-CPP",
    },
    
   
    
  ];

 

  const redirectToCode = (codeLink) => {
    window.location.href = codeLink;
  };

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-3xl font-bold inline border-b-4 border-gray-500">
            Projects :
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id,  title,desc, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              
              <h2 className=" mx-2 my-4 font-bold " >{title}:</h2><hr />
              
              <p className="mt-4 px-6 ">{desc}</p>
              <div className="flex items-center justify-center">
              
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => redirectToCode(codeLink)}>
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;