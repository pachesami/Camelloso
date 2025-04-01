import { NavLink } from "react-router-dom"
import { AvatarDemo } from "../Avatar"
import { DarkModb } from "../DarkMode"



const Navbar = () => {

    const activeStyle = 'underline underline-offset-4'

    return(
        
     <nav className="flex justify-between items-center fixed z-10 w-full pt-6 top-0 py-5 px-3 text-sm font-light">
        <ul className="flex items-center">
            <li className="font-semibold px-8">
                 <NavLink to="/">
                    Camelloso
                  </NavLink>
             </li>
        </ul>

        <ul className="flex items-center ">
             <li className="font-semibold px-8">
                <NavLink to="/RequestService" className={({isActive})=>
                    isActive ? activeStyle : undefined
                }>
                    Solicitar Servicio
                 </NavLink>
             </li>
             <li className="font-semibold px-8">
                <NavLink to="/UpdateData" className={({isActive})=>
                    isActive ? activeStyle : undefined}>
                    Actualizar Datos
                 </NavLink>
             </li>
             <li className="font-semibold px-8">
                <NavLink to="/HistoryC" className={({isActive})=>
                    isActive ? activeStyle : undefined}>
                    Historial
                 </NavLink>
             </li>
             <li className="font-semibold px-8" >
                <NavLink to="/Doubts?" className={({isActive})=>
                    isActive ? activeStyle : undefined}>
                    ¿Dudas?
                 </NavLink>
             </li>  

        </ul>

        <ul className="flex items-center">
            <li>
                <DarkModb/>
            </li>
            <li className="">
                <AvatarDemo/>
            </li>  
            <li className="text-black/80 px-2">
                Pacheco
            </li>
            <li className="font-semibold px-1">
                <NavLink to="/Signin" className={({isActive})=>
                    isActive ? activeStyle : undefined}>
                    Sign in
                 </NavLink>
             </li>
             <li className="font-semibold px-3 py border-1 border-black rounded-md">
                <NavLink to="/SignUp" className={({isActive})=>
                    isActive ? activeStyle : undefined}>
                    Sign up
                 </NavLink>
             </li>  
        </ul>
     </nav>

    )
}


export default Navbar;