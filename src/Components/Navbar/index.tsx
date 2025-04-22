import { NavLink } from "react-router-dom";
import { AvatarDemo } from "../Avatar";

const Navbar = () => {
  const activeStyle = "underline underline-offset-4";

  return (
    <>
      <nav className="flex justify-between items-center fixed z-10 w-full pt-6 top-0 py-5 px-3 text-sm font-light border-b bg-gradient-to-r from-indigo-100 via-blue-100 to-sky-100 shadow-md">
        <ul className="flex items-center">
          <li className="font-extrabold px-8 text-2xl">
            <NavLink to="/">Camelloso</NavLink>
          </li>
        </ul>

        <ul className="flex items-center">
          <li className="font-extrabold px-8 text-2xl">
            <NavLink to="/RequestService" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
              Solicitar Servicio
            </NavLink>
          </li>
          <li className="font-extrabold px-8 text-2xl">
            <NavLink to="/UpdateData" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
              Actualizar Datos
            </NavLink>
          </li>
          <li className="font-extrabold px-8 text-2xl">
            <NavLink to="/HistoryC" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
              Historial
            </NavLink>
          </li>
          <li className="font-extrabold px-8 text-2xl">
            <NavLink to="/Doubts?" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
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
            <NavLink to="/Signin" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
              Sign in
            </NavLink>
          </li>
          <li className="font-extrabold px-3 py border-1 border-black rounded-md text-2xl">
            <NavLink to="/SignUp" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
              Sign up
            </NavLink>
          </li>
        </ul>
      </nav>

      <main className="pt-20">
        {/* Aquí va el contenido de tu página */}
      </main>
    </>
  );
};

export default Navbar;