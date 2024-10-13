import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const FaceCard = ({ name, image }) => {
  return (
    <div className="flex flex-col justify-between w-64 h-72 bg-cover bg-center text-white rounded-lg p-5 relative shadow-lg" style={{ backgroundImage: "url('https://ik.imagekit.io/shubhusarathy/facecardBG.png?updatedAt=1728830690108')" }}>
      <img src="https://ik.imagekit.io/shubhusarathy/kroniclelogo.png?updatedAt=1728830692691" alt="Logo" className="absolute top-0 right-0 w-10 rounded-full z-10" />
      <h3 className="absolute top-3 left-3 text-lg font-bold text-left text-white pr-10 bg-opacity-75 z-9">{name}</h3>
      <img src={image} alt={`${name}'s photo`} className="absolute bottom-2 right-0 w-[90%] h-auto object-cover max-h-[250px] rounded-b-lg" />
      <div className="absolute bottom-2 left-1 flex flex-col gap-5">
        <FaInstagram className="w-7 h-7 bg-cover rounded-full cursor-pointer transition-colors duration-300 hover:bg-opacity-20" style={{ backgroundImage: "url('https://ik.imagekit.io/shubhusarathy/elipse.png?updatedAt=1728830689873')" }} />
        <FaTwitter className="w-7 h-7 bg-cover rounded-full cursor-pointer transition-colors duration-300 hover:bg-opacity-20" style={{ backgroundImage: "url('https://ik.imagekit.io/shubhusarathy/elipse.png?updatedAt=1728830689873')" }} />
        <FaLinkedin className="w-7 h-7 bg-cover rounded-full cursor-pointer transition-colors duration-300 hover:bg-opacity-20" style={{ backgroundImage: "url('https://ik.imagekit.io/shubhusarathy/elipse.png?updatedAt=1728830689873')" }} />
      </div>
    </div>
  );
};

export default FaceCard;
