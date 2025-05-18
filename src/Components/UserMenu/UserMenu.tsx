import React from "react";
import { AvatarDemo } from "../Avatar";
import AnimatedMenu from "../ui/AnimatedMenu";

interface UserMenuProps {
  user: { name: string };
  onUpdateData: () => void;
  onLogout: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ user, onUpdateData, onLogout }) => (
  <AnimatedMenu
    className="absolute right-0 mt-112 w-80 bg-primary rounded-xl shadow-2xl border z-50 flex flex-col items-center py-8 px-6"
    // Puedes pasar más props si lo necesitas
  >
    <div className="w-24 h-24 mb-2 flex items-center justify-center">
      <AvatarDemo />
    </div>
    <div className="mb-6 font-bold text-lg">{user.name}</div>
    <button
      className="w-full mb-3 px-4 py-3 bg-black rounded-4xl text-base font-semibold transition"
      onClick={onUpdateData}
    >
      Actualizar datos
    </button>
    <div className="flex-grow" />
    <button
      className="w-full px-4 py-3 bg-red-700 rounded-4xl text-base font-semibold transition mt-4"
      onClick={onLogout}
    >
      Cerrar sesión
    </button>
  </AnimatedMenu>
);

export default UserMenu;