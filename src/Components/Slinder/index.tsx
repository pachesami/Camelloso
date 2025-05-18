import images from "@/exports/images";
import '../../styles/Slinder.css';
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

const Slinder = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="slider-container flex flex-col items-center py-8">
            {/* Título centrado arriba */}
            <h1 className="text-3xl font-extrabold text-center text-gray-800 drop-shadow mb-4">
                Camellosos Team
            </h1>
            {/* Imagen principal redonda */}
            <img
                className={`h-128 w-128 object-cover rounded-full shadow-lg mb-6 border-4 border-white transition-transform duration-300 ${isHovered ? "scale-105" : ""}`}
                src={images[1]}
                alt="Imagen principal"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            />
            {/* Integrantes alineados */}
            <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mt-2">
                {/* Paula - Izquierda */}
                <div className="flex flex-col items-center mx-10">
                    <span className="text-2xl font-bold text-primary text-center">Paula Fernanda Díaz Celis</span>
                    <span className="text-base text-secondary">815516</span>
                    <a
                        href="https://github.com/illysathy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-base text-secondary hover:text-black transition-colors mt-1"
                    >
                        <FaGithub className="w-5 h-5" />
                        @illysathy
                    </a>
                </div>
                {/* Samuel - Centro */}
                <div className="flex flex-col items-center mx-10">
                    <span className="text-2xl font-bold text-primary text-center">Samuel Andres Pacheco Arias</span>
                    <span className="text-base text-secondary">820892</span>
                    <a
                        href="https://github.com/pachesami"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-base text-secondary hover:text-black transition-colors mt-1"
                    >
                        <FaGithub className="w-5 h-5" />
                        @pachesami
                    </a>
                </div>
                {/* Jeison - Derecha */}
                <div className="flex flex-col items-center mx-10">
                    <span className="text-2xl font-bold text-primary text-center">Jeison Kadid Vivas Capera</span>
                    <span className="text-base text-secondary">818684</span>
                    <a
                        href="https://github.com/jeisonvivas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-base text-secondary hover:text-black transition-colors mt-1"
                    >
                        <FaGithub className="w-5 h-5" />
                        @jeisonvivas
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Slinder;
