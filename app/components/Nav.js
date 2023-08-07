"use client";
import { Divider, useMediaQuery } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import { Spiral as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useCallback, useState } from "react";
import Floating from "./Floating";
import { useEffect } from "react";

const Nav = ({ backgroundColor, title }) => {
  const mobile = useMediaQuery("(max-width: 750px)");
  const notPc = useMediaQuery("(max-width: 900px)");
  const [toggle, setToggle] = useState(false);

  const mobileNavLinks = [
    {
      href: "/wall",
      name: "Wall",
    },
    {
      href: "/feed",
      name: "Feed",
    },
  ];

  const MLinks = () => {
    return (
      <>
        {mobileNavLinks.map((item) => {
          <Link href={item.href}>
            <Typography variant="h6">{item.name}</Typography>
          </Link>;
        })}
      </>
    );
  };

  useEffect(() => {
    window.addEventListener("load", () => {
      console.log("works");
    });
  }, []);

  const styles = {
    container: {
      width: "100%",
      height: "12vh",
      display: "flex",

      justifyContent: "center",
      alignItems: "center",
      backgroundColor: backgroundColor,
      borderBottom: ".2px solid black",
    },
    toolbar: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: !mobile ? "center" : "space-between",
      position: "relative",
      gap: !mobile && "4vw",
    },
    menu: {
      position: "absolute",
      right: "2vw",
    },
    logo: {
      position: "absolute",
      left: "2vw",
    },
    divider: {
      marginTop: "1vh",
      width: "100vw",
    },
  };

  const countDown = () => {
    setTimeout(() => {
      setToggle(false);
    }, 5);
  };

  return (
    <>
      <AppBar sx={styles.container} position="fixed">
        <Toolbar sx={styles.toolbar}>
          {!mobile && <Link href={"/wall"}>Wall</Link>}
          <Link
            href={"/"}
            style={{
              fontSize: "larger",
              fontWeight: "bolder",
              zIndex: 10001,
            }}
          >
            Good Lettuce
          </Link>
          {!mobile && <Link href={"/feed"}>Feed</Link>}

          {mobile && (
            <Hamburger
              toggle={setToggle}
              toggled={toggle}
              color="black"
              style={{
                zIndex: 10001,
              }}
            />
          )}
        </Toolbar>
      </AppBar>
      {toggle && mobile && (
        <Floating paddingTop={"2vh"}>
          <Typography paddingLeft={2} variant="h6">
            <Link onClick={() => countDown()} href={mobileNavLinks[0].href}>
              {" "}
              Wall
            </Link>
          </Typography>

          <Divider sx={styles.divider} />

          <Typography paddingLeft={2} variant="h6">
            <Link onClick={() => countDown()} href={mobileNavLinks[1].href}>
              Feed
            </Link>
          </Typography>

          <Divider sx={styles.divider} />
        </Floating>
      )}
    </>
  );
};

export default Nav;
