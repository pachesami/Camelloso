import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { AvatarDemo } from "../Avatar";

interface NavbarProps {
  variant?: "minimal" | "full";
}

const Navbar: React.FC<NavbarProps> = ({ variant = "full" }) => {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setShow(false); // Oculta al bajar
      } else {
        setShow(true); // Muestra al subir
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeStyle = "underline underline-offset-4";

  return (
    <>
      <nav
        className={`transition-transform duration-300 ${
          show ? "translate-y-0" : "-translate-y-full"
        } flex justify-between items-center fixed z-10 w-full pt-6 top-0 py-5 px-3 text-sm font-light border-b border-primary shadow-md bg-primary text-text-primary`}
      >
        <ul className="flex items-center">
          <li className="font-extrabold px-8 text-2xl">
            <NavLink to="/">Camelloso</NavLink>
          </li>
        </ul>
        {variant === "full" && (
          <>
            <ul className="flex items-center">
              <li className="font-extrabold px-8 text-2xl">
                <NavLink
                  to="/RequestService"
                  className={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Solicitar Servicio
                </NavLink>
              </li>
              <li className="font-extrabold px-8 text-2xl">
                <NavLink
                  to="/UpdateData"
                  className={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Actualizar Datos
                </NavLink>
              </li>
              <li className="font-extrabold px-8 text-2xl">
                <NavLink
                  to="/HistoryC"
                  className={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Historial
                </NavLink>
              </li>
              <li className="font-extrabold px-8 text-2xl">
                <NavLink
                  to="/Doubts?"
                  className={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  ¿Dudas?
                </NavLink>
              </li>
            </ul>
            <ul className="flex items-center">
              <li>
                <AvatarDemo />
              </li>
              <li className="text-foreground px-2">Pacheco</li>
              <li className="font-extrabold px-1 text-2xl">
              </li>
              <li className="font-extrabold px-3 py border-1 border-black rounded-md text-2xl">
              </li>
            </ul>
          </>
        )}
      </nav>
      <main className="pt-9">
        {/* Aquí va el contenido de tu página */}
      </main>
    </>
  );
};

export default Navbar;