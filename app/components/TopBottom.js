import { Stack, Typography } from "@mui/material";

const TopBottom = ({
  children,
  contentBody,
  width,
  height,
  heading,
  content,
  button,
  customStyles,
}) => {
  const styles = {
    container: {
      ...customStyles,
    },
  };

  return (
    <Stack
      direction={"column"}
      gap={2}
      display={"flex"}
      alignContent={"flex-start"}
      width={width ? width : "fit-content"}
      height={height}
      minHeight={"fit-content"}
      style={styles.container}
    >
      {contentBody && (
        <>
          <Typography textAlign={"left"} variant="h6" fontWeight={"bolder"}>
            {heading}
          </Typography>
          <Typography textAlign={"left"} variant="p">
            {content}
          </Typography>
        </>
      )}
      {children}
    </Stack>
  );
};

export default TopBottom;
