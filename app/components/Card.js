import { Box } from "@mui/material";

const Card = ({
  customStyles,
  minWidth,
  img,
  width,
  height,
  children,
  border,
}) => {
  const styles = {
    container: {
      width: width,
      height: height,
      border: border,
      backgroundImage: img,
      minWidth: minWidth,
    },
    ...customStyles,
  };

  return <Box sx={styles.container}>{children}</Box>;
};

export default Card;
