import { userRole } from "@/config/userRole";
import AdminDashboardLayout from "@/layouts/AdminDashboardLayout";
import React from "react";
import TravelerListContainer from "@/containers/AdminDashboard/Traveler";

const TravelerList = () => {

  return <>{"admin" === userRole.ADMIN && <TravelerListContainer />}</>;
};

export default TravelerList;

TravelerList.getLayout = function getLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
