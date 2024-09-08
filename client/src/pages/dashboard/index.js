import BusChart from "@/components/Charts/BusChart";
import DriversChart from "@/components/Charts/DriversChart";
import RoadChart from "@/components/Charts/RoadChart";
import UserChart from "@/components/Charts/UserChart";
import PageTitle from "@/components/Shared/PageTitle";
import { userRole } from "@/config/userRole";
import AdminDashboardLayout from "@/layouts/AdminDashboardLayout";
import { useGetDashBoardQuery } from "@/redux/traveler/traveler";

const Dashboard = () => {
  const { data, isLoading } = useGetDashBoardQuery();

  return (
    <>
      <PageTitle title={"Admin Dashboard"} />
      {"admin" === userRole.ADMIN && (
        <div className="max-w-5xl mx-auto w-[95%]">
          <div className="lg:main-container grid grid-cols-1 md:grid-cols-2 gap-5 justify-center ">
            <UserChart data={data?.data?.totalTraveler} />
            <DriversChart data={data?.data?.totalDriver} />
            <BusChart data={data?.data?.totalBus} />
            <RoadChart data={data?.data?.totalRoute} />
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
