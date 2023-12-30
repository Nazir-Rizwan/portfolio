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

        <p className="text-xl mt-20">
        I am Nazir and I'm passionate Full Stack Developer with experience in (JavaScript ,Typescript) to build 
web application use (React Js ,Node Js ).


        </p>

        <br />

        <p className="text-xl">
        I thrive in collaborative environments and believe in the power of teamwork. I want to working with diverse teams and contributing my skills to create outstanding applications. 

I love break down complex challenges into efficient solutions. I value open communication shared knowledge and positive environment.

Let's connect and bring innovative ideas to life!
        </p>
      </div>
    </div>
  );
};

export default About;