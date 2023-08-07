import { Stack, Typography } from "@mui/material";
import FadeIn from "../Utils/FadeIn";

const CtaBox = ({ children, color, title }) => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "70%",
      height: "auto",
      minHeight: "30vh",
      border: `2px solid ${color ? color : "#FDFAEC"}`,
      paddingLeft: "2vw",
      paddingRight: "2vw",
      zIndex: 0,
    },
  };

  return (
    <Stack
      paddingTop={"2vh"}
      gap={"2vh"}
      direction={"column"}
      sx={styles.container}
    >
      {/*adjust font per screen */}
      <FadeIn>
        {" "}
        <Typography
          color={"#FDFAEC"}
          fontWeight={"bolder"}
          variant="h4"
          textAlign={"center"}
        >
          {title}
        </Typography>{" "}
      </FadeIn>
      <Stack
        direction={"row"}
        display={"flex"}
        flexWrap={"wrap"}
        width={"40%"}
        gap={"2.5vh"}
        justifyContent={"center"}
        paddingBottom={"2vh"}
        margin={0}
      >
        {children}
      </Stack>
    </Stack>
  );
};

export default CtaBox;
