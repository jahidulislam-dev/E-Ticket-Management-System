import UpcomingBookingTable from "@/containers/UserDashboard/IncompleteTourAndBooking";
import RootLayout from "@/layouts/RootLayout";
import UserDashboardLayout from "@/layouts/UserDashboardLayout";
import React from "react";

const UpcomingBooking = () => {
  return (
    <div>
      <UpcomingBookingTable />
    </div>
  );
};

export default UpcomingBooking;

UpcomingBooking.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <UserDashboardLayout>{page}</UserDashboardLayout>
    </RootLayout>
  );
};
