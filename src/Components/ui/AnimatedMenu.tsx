import React from "react";
import { motion } from "framer-motion";

interface AnimatedMenuProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedMenu: React.FC<AnimatedMenuProps> = ({ children, className }) => (
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 100 }} // Cambia aquí: sale hacia la derecha, igual que entra
    transition={{ duration: 0.25 }}
    className={className}
  >
    {children}
  </motion.div>
);

export default AnimatedMenu;