import { Table, Typography } from "antd";

const RouteTable = () => {
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
      title: "Route Code",
      dataIndex: "route_code",
      minWidth: 200,
      sorter: (a, b) => a.route_code - b.route_code,
    },
    {
      title: "From",
      dataIndex: "from",
      minWidth: 200,
      sorter: (a, b) => a.from - b.from,
    },
    {
      title: "To",
      dataIndex: "to",
      minWidth: 200,
    },
    {
      title: "Distance",
      dataIndex: "distance",
      minWidth: 200,
      sorter: (a, b) => a.distance - b.distance,
    },
  ];
  return (
    <span className="block w-full md:w-1/2">
      <Typography.Title level={4}>Route</Typography.Title>

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
export default RouteTable;
