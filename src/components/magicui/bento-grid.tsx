import { cn } from "../../lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-4 perspective-[1000px]",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className?: string;
  background: React.ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
  cta: string;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for rotation
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Map mouse position to rotation degrees
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Disable on mobile
    if (window.innerWidth < 768) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      key={name}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative col-span-3 flex flex-col justify-end overflow-hidden rounded-xl",
        "bg-white border border-gray-200 dark:bg-gray-950 dark:border-gray-800",
        "hover:shadow-2xl transition-all duration-300 will-change-transform",
        className,
      )}
    >
      <div className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-opacity duration-500" style={{ transform: "translateZ(-50px)" }}>
        {background}
      </div>
      <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 transition-all duration-500 group-hover:-translate-y-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent" style={{ transform: "translateZ(30px)" }}>
        <Icon className="h-12 w-12 origin-left text-white mb-2" />
        <h3 className="text-xl font-bold text-white">
          {name}
        </h3>
        <p className="max-w-lg text-white/80">{description}</p>
      </div>

      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-10 flex-row items-center p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100",
        )}
        style={{ transform: "translateZ(40px)" }}
      >
        <a href={href} className="pointer-events-auto bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 w-full text-center">
          {cta}
        </a>
      </div>
      <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
    </motion.div>
  );
};

export { BentoCard, BentoGrid };
