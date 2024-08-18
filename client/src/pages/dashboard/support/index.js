import SupportList from "@/containers/AdminDashboard/Support/SupportList";
import AdminDashboardLayout from "@/layouts/AdminDashboardLayout";

const Support = () => {
  return <SupportList />;
};

export default Support;

Support.getLayout = function getLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
