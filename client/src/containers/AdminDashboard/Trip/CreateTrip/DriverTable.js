import { Table, Typography } from "antd";


const DriverTable = () => {

  const columns = [
    {
      title: "Sr.",
      dataIndex: "sr",
      minWidth: 200,
      render: (text, record, index) => {
        return `${index + 1}`;
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      minWidth: 200,
    },
    {
      title: "Age",
      dataIndex: "age",
      minWidth: 200,
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Trip Completed",
      dataIndex: "trip_completed",
      minWidth: 200,
      sorter: (a, b) => a.trip_completed - b.trip_completed,
    },
    {
      title: "Email",
      dataIndex: "email",
      minWidth: 200,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      minWidth: 200,
      sorter: (a, b) => a.phone - b.phone,
    },
    {
      title: "Years Experience",
      dataIndex: "years_experience",
      minWidth: 200,
      sorter: (a, b) => a.years_experience - b.years_experience,
      render: (years_experience) => {
        return <p>{years_experience} years</p>;
      },
    },
    {
      title: "Driving Status",
      dataIndex: "driving_status",
      minWidth: 200,
      sorter: (a, b) => a.driving_status - b.driving_status,
      render: (driving_status) => {
        return (
          <p
            className={
              driving_status === "rest"
                ? "bg-[rgba(255,189,90,.2)] text-[#ffc107] rounded pl-2"
                : driving_status === "ready"
                ? "bg-[rgba(28,213,174,.2)] text-[#38cab3] rounded pl-2"
                : driving_status === "on-trip"
                ? "bg-[#7CB9E8] text-[#0039a6] rounded pl-2"
                : "bg-[rgba(247,79,117,.2)] text-[#f74f75] rounded pl-2"
            }
          >
            {driving_status}
          </p>
        );
      },
    },
  ];
  return (
    <span className="block w-full md:w-2/3">
      <Typography.Title level={4}>Driver</Typography.Title>
      <Table
        columns={columns}
        dataSource={[]}
        pagination={{
          pageSize: 5,
        }}
        scroll={{ x: true }}
      />
    </span>
  );
};
export default DriverTable;
