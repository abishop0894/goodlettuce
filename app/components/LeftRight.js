"use client";
import { Grid, Stack, useMediaQuery } from "@mui/material";
import Image from "next/image";
import FadeIn from "../Utils/FadeIn";

const LeftRight = ({
  width,
  children,
  gap,
  height,
  largeImage,
  imgOne,
  imgTwo,
  customStyles,
  mapLR,
}) => {
  const notPc = useMediaQuery("(max-width: 770px)");
  const ipadMini = useMediaQuery("(max-width: )");
  const styles = {
    container: {
      width: width ? width : "100%",
      height: height ? height : "auto",
      minHeight: "fit-content",
      overflowX: "hidden",
      overflowY: "hidden",
      maxWidth: "100%",
    },

    img: {
      borderLeft: ".5px solid #FDFAEC",
      borderRight: ".5px solid #FDFAEC",
      height: "42vh",
      width: notPc ? "100vw" : "50vw",
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      borderBottom: "2px solid black",
      overflow: "hidden",
      objectFit: "cover",
      marginBottom: "-.4vh",
    },
    ...customStyles,
  };

  return (
    <Stack
      gap={gap}
      display={"flex"}
      flexWrap={notPc && (mapLR ? "wrap-reverse" : "wrap")}
      sx={styles.container}
      direction={"row"}
      justifyContent={notPc ? "flex-start" : "center"}
    >
      {largeImage ? (
        <>
          <FadeIn>
            <img style={styles.img} src={imgOne} />{" "}
          </FadeIn>
          <FadeIn>
            <img style={styles.img} src={imgTwo} />
          </FadeIn>
        </>
      ) : (
        children
      )}
    </Stack>
  );
};

export default LeftRight;
