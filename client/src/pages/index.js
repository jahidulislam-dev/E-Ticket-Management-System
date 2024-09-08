import OurBuses from "@/containers/HomePage/OurBuses";
import ReserveABus from "@/containers/HomePage/ReserveABus";
import Review from "@/containers/HomePage/Review";
import SaySomething from "@/containers/HomePage/SaySomething";
import WhatWeOffer from "@/containers/HomePage/WhatWeOffer";
import Banner from "@/containers/Banner";
import React from "react";
import RootLayout from "@/layouts/RootLayout";
import PageTitle from "@/components/Shared/PageTitle";

const HomePage = () => {
  return (
    <>
      <PageTitle title={"Home"} />
      <Banner />
      <WhatWeOffer />
      <ReserveABus />
      <Review />
      <OurBuses />
      <SaySomething />
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
