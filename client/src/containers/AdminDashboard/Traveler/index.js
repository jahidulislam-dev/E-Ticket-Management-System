import React from "react";
import { useGetAllDriverQuery } from "@/redux/driver/driverApi";
import TravelerList from "./TravelerList";

const TravelerListContainer = () => {
  const { data, isLoading } = useGetAllDriverQuery();
  return <TravelerList data={data?.data} loading={isLoading} />;
};

export default TravelerListContainer;
