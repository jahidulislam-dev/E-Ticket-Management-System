import React from "react";
import TravelerList from "./TravelerList";
import { useGetAllTravelersQuery } from "@/redux/traveler/traveler";

const TravelerListContainer = () => {
  const { data, isLoading } = useGetAllTravelersQuery();
  return <TravelerList data={data?.data} loading={isLoading} />;
};

export default TravelerListContainer;
