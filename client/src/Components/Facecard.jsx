import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const FaceCard = ({ name, image }) => {
    return (
        <div className="flex flex-col justify-between w-60 h-72 bg-cover bg-center text-white rounded-lg p-5 text-left shadow-lg relative overflow-hidden" 
             style={{ backgroundImage: "url('../assets/facecardBG.png')" }}>
            <img src="/assets/kroniclelogo.png" alt="Logo" className="absolute top-2 right-0 w-10 h-auto rounded-full z-10" />
            <h3 className="absolute top-2 left-2 text-lg font-bold text-white px-2 py-1 rounded z-10">{name}</h3>
            <img src={image} alt={`${name}'s photo`} 
                 className="absolute bottom-2 right-0 w-[90%] max-h-[250px] object-cover rounded-b-lg" />
            <div className="absolute bottom-4 left-2 flex flex-col gap-5">
                <FaInstagram className="w-7 h-7 bg-[url('../assets/elipse.png')] bg-cover rounded-full p-2 hover:bg-white/20 cursor-pointer" />
                <FaTwitter className="w-7 h-7 bg-[url('../assets/elipse.png')] bg-cover rounded-full p-2 hover:bg-white/20 cursor-pointer" />
                <FaLinkedin className="w-7 h-7 bg-[url('../assets/elipse.png')] bg-cover rounded-full p-2 hover:bg-white/20 cursor-pointer" />
            </div>
        </div>
    );
};

export default FaceCard;
