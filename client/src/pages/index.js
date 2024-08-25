import WhatWeOffer from "@/containers/HomePage/WhatWeOffer";
import Banner from "@/containers/Banner";
import React from "react";
import RootLayout from "@/layouts/RootLayout";
import PageTitle from "@/components/Shared/PageTitle";
import ReserveABus from "@/containers/HomePage/ReserveABus";
import ExclusiveOffer from "@/containers/HomePage/ExclusiveOffer";
import Review from "@/containers/HomePage/Review";
import FAQ from "@/containers/HomePage/FAQ";
import OurBuses from "@/containers/HomePage/OurBuses";
import SaySomething from "@/containers/HomePage/SaySomething";

const HomePage = () => {
  return (
    <>
      <PageTitle title={"Home"} />
      <Banner />
      <WhatWeOffer />
      <ReserveABus />
      <ExclusiveOffer />
      <Review />
      <FAQ />
      <OurBuses />
      <SaySomething />
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
