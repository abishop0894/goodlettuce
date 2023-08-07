const CustomButton = ({ children, color, customStyles }) => {
  const styles = {
    button: {
      border: `1px solid  ${color ? color : "#FDFAEC"}`,
      color: color ? color : "#FDFAEC",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "6vh",
      width: "auto",
      minWidth: "fit-content",
      paddingLeft: "2vw",
      paddingRight: "2vw",
      backgroundColor: "transparent",
      whiteSpace: "nowrap",
      ...customStyles,
    },
  };

  return <button style={styles.button}>{children}</button>;
};

export default CustomButton;
