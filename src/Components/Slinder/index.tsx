import images from "@/exports/images";
import '../../styles/Slinder.css';
import React, { useState } from "react";

const Slinder = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="slider-container flex flex-col items-center py-8">
            <h1 >Creadores </h1>
            {/* Imagen principal redonda */}
            <img
                className={`h-128 w-128 object-cover rounded-full shadow-lg mb-6 border-4 border-white transition-transform duration-300 ${isHovered ? "scale-105" : ""}`}
                src={images[1]}
                alt="Imagen principal"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            />
            {/* Texto debajo */}
            <div className="text-3xl font-extrabold text-center text-gray-800 drop-shadow">
                Camellosos Team
            </div>
        </div>
    );
}

export default Slinder;
