"use client";
import Nav from "../components/Nav";
import Page from "../components/Page";
import Hero from "../components/Hero";
import LeftRight from "../components/LeftRight";
import MapLR from "../components/MapLR";
import ImgLR from "../components/ImgLR";

const Home = () => {
  return (
    <Page>
      <Hero
        cta={true}
        customStyles={{
          marginTop: "12vh",
          backgroundImage: `url(${"https://www.theartisttree.com/wp-content/uploads/2021/02/green-smoke.jpg"})`,
        }}
        title={"The Good Lettuce Lounge"}
      />
      <LeftRight
        largeImage={true}
        imgOne={
          "https://www.theartisttree.com/wp-content/uploads/2022/08/Inside-looking-outside-southeast-small.jpg"
        }
        imgTwo={
          "https://www.theartisttree.com/wp-content/uploads/2022/08/Studio-Lounge-Doors.jpg"
        }
      />
      <MapLR />

      <ImgLR
        customStyles={{}}
        title={"we saved you a seat"}
        content={
          "Relax on our outdoor patio or chill in our indoor seating area. Enjoy our rotating art exhibits and live entertainment from local artists"
        }
        btnContent={" VIEW EVENT CALENDAR"}
      />
    </Page>
  );
};

export default Home;
