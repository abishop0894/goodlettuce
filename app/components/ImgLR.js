import LeftRight from "./LeftRight";
import Card from "./Card";
import Image from "next/image";
import TopBottom from "./TopBottom";
import CustomButton from "./CustomButton";
import { useMediaQuery } from "@mui/material";

const ImgLR = ({ image, customStyles, btnContent, content, title }) => {
  const mobile = useMediaQuery("(max-width: 750px)");
  const notPc = useMediaQuery("(max-width: 900px)");
  return (
    <LeftRight
      gap={2}
      height={"100vh"}
      customStyles={{
        marginTop: "2vh",
        display: "flex",
        ...customStyles,
      }}
    >
      <Card
        customStyles={{
          marginTop: "2vh",
          backgroundImage: `url(${image})`,
        }}
        border={"1px solid black"}
        width={mobile && "80%"}
        minWidth={"40%"}
        height={"50vh"}
      />

      <TopBottom
        customStyles={{
          width: !mobile && "15vw",
        }}
        contentBody={true}
        heading={title}
        content={content}
      >
        <CustomButton
          customStyles={{
            width: "fit-content",
          }}
          color={"black"}
        >
          {btnContent}
        </CustomButton>
      </TopBottom>
    </LeftRight>
  );
};

export default ImgLR;
