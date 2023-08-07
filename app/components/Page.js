import { Box, Stack } from "@mui/material";

const Page = ({ children, customStyles }) => {
  const styles = {
    container: {
      width: "100%",
      height: "auto",
      minHeight: "100vh",
      overflow: "auto",
      backgroundColor: "#FDFAEC",
      ...customStyles,
    },
  };
  return (
    <Stack direction={"column"} sx={styles.container}>
      {children}
    </Stack>
  );
};

export default Page;
