import { userRole } from "@/config/userRole";
import AdminDashboardLayout from "@/layouts/AdminDashboardLayout";
import TravelerListContainer from "@/containers/AdminDashboard/Traveler/TravelerList";

import React from "react";
import { useGetAllTravelersQuery } from "@/redux/traveler/traveler";

const TravelerList = () => {
  const { data, isLoading } = useGetAllTravelersQuery();

  return (
    <>
      {"admin" === userRole.ADMIN && (
        <TravelerListContainer data={data} isLoading={isLoading} />
      )}
    </>
  );
};

export default TravelerList;

TravelerList.getLayout = function getLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
