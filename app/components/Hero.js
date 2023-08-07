import { Box, useMediaQuery, Typography } from "@mui/material";
import CtaBox from "./CtaBox";

import CustomButton from "./CustomButton";

const Hero = ({
  backgroundImg,
  cta,
  title,
  buttonOne,
  buttonTwo,
  children,
  customStyles,
}) => {
  const styles = {
    container: {
      height: "45vh",
      width: "100%",
      background: `linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${backgroundImg})`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderBottom: "2px solid black",
      overflow: "hidden",
      zIndex: 0,
      objectFit: "cover",
      position: "relative",

      ...customStyles,
    },
  };
  return (
    <Box sx={styles.container} id={"hero"}>
      {cta ? (
        <CtaBox title={title}>
          <CustomButton>
            <Typography variant="h6">Book A Table</Typography>
          </CustomButton>
          <CustomButton>
            {" "}
            <Typography variant="h6">Book A Table</Typography>
          </CustomButton>
        </CtaBox>
      ) : (
        <div
          style={{
            position: "absolute",
            bottom: 100,
          }}
        >
          {children}
        </div>
      )}
    </Box>
  );
};

export default Hero;
