import { Fragment } from "react";
import AllNews from "../components/AllNews";
import Footers from "../components/Footers";
import FouthArticle from "../components/FouthArticle";
import HeroSection from "../components/HeroSection";
import MenuHeader from "../components/MenuHeader";
import SlidesThird from "../components/slidesThird";
import SubscribeLetter from "../components/SubscribeLetter";

export default function Home() {
  return (
    <Fragment>
      <MenuHeader />
      <HeroSection />

      <SlidesThird />

      <FouthArticle />
      <SubscribeLetter />
      <AllNews />
      <Footers />
    </Fragment>
  );
}
