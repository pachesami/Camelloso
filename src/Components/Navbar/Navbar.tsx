import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserMenu from "../UserMenu/UserMenu";
import { FaBars } from "react-icons/fa"; // Asegúrate de tener react-icons instalado
import { AnimatePresence } from "framer-motion";

interface NavbarProps {
  variant?: "minimal" | "full";
}

const Navbar: React.FC<NavbarProps> = ({ variant = "full" }) => {
  const [show, setShow] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(window.scrollY);
  const navigate = useNavigate();

  // Simula datos de usuario
  const user = {
    name: "Pacheco",
  };

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

  const handleLogout = () => {
    // Aquí puedes limpiar el estado de autenticación si lo tienes
    navigate("/");
  };

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
            {/* Menú hamburguesa y UserMenu */}
            <div className="relative flex items-center ml-4">
              <button
                className="p-2 rounded-full hover:bg-gray-200"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label="Abrir menú"
              >
                <FaBars size={28} />
              </button>
              <AnimatePresence>
                {menuOpen && (
                  <UserMenu
                    user={user}
                    onUpdateData={() => {
                      setMenuOpen(false);
                      navigate("/UpdateData");
                    }}
                    onLogout={() => {
                      setMenuOpen(false);
                      handleLogout();
                    }}
                  />
                )}
              </AnimatePresence>
            </div>
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