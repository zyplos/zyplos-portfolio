"use client";

import { type HTMLMotionProps, motion } from "motion/react";

interface BlurIntoExistenceProps extends HTMLMotionProps<"div"> {}

export default function BlurIntoExistence({
  children,
  className,
}: BlurIntoExistenceProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        filter: "blur(5px)",
        transform: "scale(0.95)",
      }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
        transform: "scale(1)",
      }}
      transition={{ duration: 0.3, ease: "easeIn", delay: 1 }}
    >
      {children}
    </motion.div>
  );
}
