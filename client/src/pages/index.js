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
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
