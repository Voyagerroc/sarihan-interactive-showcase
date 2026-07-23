import { useRef, useState } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  as?: React.ElementType;
  href?: string;
}

export default function MagneticButton({ children, className = "", onClick, as: Component = "button", href }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 }); // 0.2 determines the magnetic strength
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const commonProps = {
    onClick,
    className: `magnetic flex items-center justify-center ${className}`,
    ...(href ? { href } : {})
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      <Component {...commonProps}>
        {children}
      </Component>
    </motion.div>
  );
}
