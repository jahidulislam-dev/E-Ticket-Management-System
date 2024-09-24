import { Button, Table, Modal, Avatar } from "antd";
import { useState } from "react";
import { EditOutlined } from "@ant-design/icons";

const TravelerList = ({ data, isLoading }) => {
  console.log("traveler data", data);
  const [isEditing, setIsEditing] = useState(false);
  const [editingTraveler, setEditingTraveler] = useState(null);
  const [dataSource, setDataSource] = useState(data);
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
      title: "Image",
      dataIndex: "image",
      minWidth: 200,
      render: (image) => {
        return <Avatar src={image?.avatar} />;
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      minWidth: 200,
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
    },
    {
      title: "Age",
      dataIndex: "age",
      minWidth: 200,
    },
  ];

  const onEditTrip = (TravelerData) => {
    setIsEditing(true);
    setEditingTraveler({ ...TravelerData });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingTraveler(null);
  };
  return (
    <div className="App">
      <header className="App-header">
        {isLoading ? (
          <Spinner />
        ) : (
          <Table
            columns={columns}
            dataSource={data}
            scroll={{ x: true }}
          ></Table>
        )}
        <Modal
          title="Update a trip"
          open={isEditing}
          okText="Save"
          centered
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            /* add there your logic on edit trip */
            resetEditing();
          }}
        >
          {/* <UpdateTripForm editingTraveler={editingTraveler} /> */}
          <h1>here will be a form for edit user info</h1>
        </Modal>
      </header>
    </div>
  );
};

export default TravelerList;

const demoData = [
  {
    key: "1",
    sr: "1",
    name: "Traveler",
    image: "https://robohash.org/hicveldicta.png",
    email: "user1@example.com",
    phone: "123-456-7890",
  },
  {
    key: "2",
    sr: "2",
    name: "Traveler",
    image: "https://robohash.org/doloremquesintcorrupti.png",
    email: "user2@example.com",
    phone: "987-654-3210",
  },
  {
    key: "3",
    sr: "3",
    name: "Traveler",
    image: "https://robohash.org/consequunturautconsequatur.png",
    email: "user3@example.com",
    phone: "555-123-4567",
  },
];
