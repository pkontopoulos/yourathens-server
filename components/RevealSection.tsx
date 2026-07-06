"use client";

import { motion, useReducedMotion } from "framer-motion";

const hidden = { opacity: 0, y: 24 };
const visible = { opacity: 1, y: 0 };

export function RevealSection({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{ hidden, visible }}
      initial={shouldReduce ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      transition={{
        duration: shouldReduce ? 0 : 0.55,
        delay: shouldReduce ? 0 : delay / 1000,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
