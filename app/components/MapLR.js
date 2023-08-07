"use client";
import LeftRight from "./LeftRight";
import Card from "./Card";
import TopBottom from "./TopBottom";

import { useMediaQuery } from "@mui/material";
import { Typography } from "@mui/material";
import FadeIn from "../Utils/FadeIn";

const MapLR = ({ title, contentBody }) => {
  const mobile = useMediaQuery("(max-width: 770px)");
  const tabAndSmPc = useMediaQuery("(max-width: 1280px)");

  const styles = {};

  const info = [
    {
      bold: "LOCATION",
      regular: "",
      link: "",
    },
    {
      bold: "HOURS",
      regular: "",
      link: "",
    },
  ];

  return (
    <FadeIn>
      <LeftRight
        mapLR={true}
        customStyles={{
          borderBottom: "2px solid black",
          position: "relative !important",
        }}
      >
        <Card
          border={"1px solid black"}
          width={mobile ? "100%" : "30%"}
          height={mobile ? "45vh" : "auto"}
        />
        <Card width={mobile ? "100%" : "70%"}>
          <TopBottom width={"100%"}>
            <Typography
              variant="h4"
              paddingTop={"2vh"}
              paddingLeft={"4vw"}
              paddingRight={"4vw"}
            >
              {title ? title : "Good Lettuce Cannabis Lounge & Restaurant"}
            </Typography>
            <LeftRight
              gap={2}
              customStyles={{
                position: "relative",
              }}
            >
              <Typography
                width={mobile ? "100%" : "33vw"}
                height={"auto"}
                minHeight={"fit-content"}
                textAlign={"left"}
                paddingLeft={mobile || (tabAndSmPc && "4vw")}
                paddingRight={"4vw"}
                marginLeft={!mobile && !tabAndSmPc && "-4vw"}
              >
                {contentBody ? (
                  contentBody
                ) : (
                  <>
                    Finally, your kind of joint. Imagine a place where you can
                    order your favorite cannabis products tableside along with
                    food, craft canna-cocktails, and an assortment of smoking
                    devices. That’s what’s in store at The Studio Cannabis
                    Lounge & Restaurant located on the 2nd floor of The Artist
                    Tree Cannabis Dispensary in West Hollywood. <br /> <br />{" "}
                    <br /> As one of the only consumption lounges in the
                    country, we believe in the power of cannabis to enhance the
                    communal and artistic experience. From our Happy Hour to our
                    line-up of events and brand takeovers, we invite you to stop
                    by and experience cannabis like never before.
                  </>
                )}
              </Typography>
              <TopBottom>
                <Typography paddingLeft={1}>
                  <>
                    LOCATION
                    <br />
                    8625 Santa Monica Blvd.
                    <br />
                    2nd and 3rd Floor <br />
                    West Hollywood, CA 90069
                    <br />
                    GET DIRECTIONS
                  </>
                </Typography>
              </TopBottom>
              <TopBottom>
                <Typography paddingLeft={1}>
                  <>
                    LOCATION
                    <br />
                    8625 Santa Monica Blvd.
                    <br />
                    2nd and 3rd Floor <br />
                    West Hollywood, CA 90069
                    <br />
                    GET DIRECTIONS
                  </>
                </Typography>
              </TopBottom>
            </LeftRight>
          </TopBottom>
        </Card>
      </LeftRight>
    </FadeIn>
  );
};

export default MapLR;
