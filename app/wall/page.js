"use client";
import Page from "../components/Page";
import Hero from "../components/Hero";
import { Typography } from "@mui/material";
import FadeIn from "../Utils/FadeIn";

const Wall = ({}) => {
  return (
    <Page>
      <Hero
        cta={false}
        backgroundImg={
          "https://cdn.discordapp.com/attachments/1112569325795160115/1134626459466600619/blurred-city-lights.jpg"
        }
        children={
          <FadeIn delay={1}>
            <Typography
              display={"flex"}
              alignSelf={"center"}
              variant="h1"
              color={"#FDFAEC"}
            >
              Wall
            </Typography>
          </FadeIn>
        }
      />
    </Page>
  );
};

export default Wall;
