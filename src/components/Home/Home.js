import React from "react";

import Banner from "../Header/Banner/Banner";

import AppSection from "../Main/AppSection/AppSection";
import HostSection from "../Main/hostSection/HostSection";
import Services from "../Main/Services/Services";

const Home = () => {
  document.title = "AirRnR";
  return (
    <div id="home">
      <Banner></Banner>
      <Services></Services>
      <HostSection></HostSection>
      <AppSection></AppSection>
    </div>
  );
};

export default Home;
