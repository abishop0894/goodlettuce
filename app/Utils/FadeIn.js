import { motion } from "framer-motion";

const FadeIn = ({ children, delay, zIndex }) => {
  return (
    <motion.div
      style={{
        margin: 0,
        padding: 0,
        zIndex: zIndex,
      }}
      whileInView={{
        opacity: [0, 1],
        y: [25, 0],
      }}
      transition={{
        delay: delay,
        easeIn: [0.17, 0.67, 0.83, 0.67],
        duration: 1,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
