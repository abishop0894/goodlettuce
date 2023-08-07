import { Stack } from "@mui/material";
import FadeIn from "../Utils/FadeIn";
import Nav from "./Nav";
import { motion } from "framer-motion";

const Floating = ({
  borderBottom,
  paddingTop,
  gap,
  height,
  children,
  backgroundImg,
}) => {
  const styles = {
    container: {
      height: height ? height : "50vh",
      width: "100%",
      zIndex: 100000,
      overflow: "auto",
      display: "flex",
      backgroundColor: "#FDFAEC",
      backgroundImg: backgroundImg,
      position: "fixed",
      top: "12vh",
      borderBottom: borderBottom,
      paddingTop: paddingTop,
    },
  };

  return (
    <motion.div
      style={styles.container}
      animate={{
        opacity: [0, 1],
        y: [25, 0],
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <Stack direction={"column"} zIndex={100000} gap={gap}>
        {children}
      </Stack>
    </motion.div>
  );
};

export default Floating;
