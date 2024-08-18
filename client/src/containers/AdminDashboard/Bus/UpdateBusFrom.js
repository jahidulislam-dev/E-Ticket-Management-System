import { Form, Button, Input, Select } from "antd";

const UpdateBusForm = ({ editingBus, resetEditing }) => {
  const onFinish = async (values) => {
    console.log("bus update info", values);
  };

  const [form] = Form.useForm();

  return (
    <div
      style={{
        textAlign: "left",
        marginTop: "20px",
      }}
    >
      <Form
        form={form}
        autoComplete="off"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={(error) => {
          console.log({ error });
        }}
      >
        <Form.Item
          name="model"
          label="Model"
          rules={[
            {
              required: true,
              message: "Please enter Bus model name",
            },
            { whitespace: true },
          ]}
          hasFeedback
        >
          <Input placeholder="Type model name" />
        </Form.Item>

        <Form.Item
          name="brand_name"
          label="Brand Name"
          rules={[
            {
              required: true,
              message: "Please enter Bus Brand Name",
            },
            { whitespace: true },
          ]}
          hasFeedback
        >
          <Input placeholder="Type bus brand" />
        </Form.Item>
        <Form.Item
          name="total_seats"
          label="Bus seats"
          requiredMark="require"
          rules={[
            {
              required: true,
              message: "bus seats is required",
            },
          ]}
          hasFeedback
        >
          <Select placeholder="Select trip Driver code">
            <Select.Option value="40">40 seats bus</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }}>
          <Button disabled={false} block type="primary" htmlType="submit">
            {"Update"}
          </Button>
          <Button className="mt-2" block type="default" onClick={resetEditing}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateBusForm;
