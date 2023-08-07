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
          "https://cdn.discordapp.com/attachments/1112569325795160115/1134860945630445718/logo_make_11_06_2023_222.jpg"
        }
        children={
          <FadeIn delay={1}>
            <Typography
              display={"flex"}
              alignSelf={"center"}
              variant="h1"
              color={"#FDFAEC"}
            >
              Feed
            </Typography>
          </FadeIn>
        }
      />
    </Page>
  );
};

export default Wall;
