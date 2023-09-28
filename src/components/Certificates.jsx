import React from "react";


const Certificates = () => {
  const portfolios = [
    {
      id: 1,
   
      title:"Web Development Course By INTERNSHALA",
     
      codeLink: "https://drive.google.com/file/d/1NBi8JZasn-lWKLD9_VybIY7V2t0VSVuS/view?usp=sharing",
    },
    {
      id: 2,
   
      title:"Fundamentals of Deep Learning Course By NVIDIA ",

      codeLink: "https://courses.nvidia.com/certificates/a479e3c491bd4221b38f91420373cf18/",
    },
    {
      id: 3,
   
      title:" Participation in Flipr Hackathon 17 By FLIPR",
   
      codeLink: "https://drive.google.com/file/d/1vxFNJm6QxEyUZN08NbnRHxU15K382c5l/view?usp=sharing",
    },
    {
      id: 4,
   
      title:"Participation in Devfest India By GDG Google",
     
      codeLink: "https://drive.google.com/file/d/1NJG9ONyrEaR49sJ8dP8RGwkh3QU5EsjV/view?usp=sharing",
    },
    {
      id: 5,
   
      title:"Web Development Mentorship Program By Skills Night",
    
      codeLink: "https://drive.google.com/file/d/1Rv-UVLxyvs-oHBO_HSyvNphIPqfjfWCA/view?usp=sharing",
    },
    {
      id: 6,
   
      title:"Participation in Coding Challenge By Codegoda",
    
      codeLink: "https://drive.google.com/file/d/1pxHkV0WbGXWg1XlI2fpTMlVajPqivPKv/view?usp=sharing",
    },
    
   
    
  ];

 

  const redirectToCode = (codeLink) => {
    window.location.href = codeLink;
  };

  return (
    <div
      name="certificates"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-3xl font-bold inline border-b-4 border-gray-500">
            Certificates :
          </p>
          
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id,  title,codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              
              <h2 className=" mx-2 my-4 font-bold " >{title}:</h2><hr />
              
           
              <div className="flex items-center justify-center  ">
              
                <button className="w-1/2 px-6 py-3 m-4 ounded-md bg-gradient-to-r from-cyan-500 to-blue-500  duration-200 hover:scale-105" onClick={() => redirectToCode(codeLink)}>
                  See Here
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;