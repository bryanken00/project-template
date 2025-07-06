import { motion } from "framer-motion";
import { forwardRef } from "react";

const defaultVariants = {
  initial: { y: -100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  whileTap: { scale: 0.9 },
};

const MotionPress = forwardRef(
  ({ children, initial, animate, whileTap, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={initial || defaultVariants.initial}
        animate={animate || defaultVariants.animate}
        whileTap={whileTap || defaultVariants.whileTap}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

MotionPress.displayName = "MotionPress";

export default MotionPress;
