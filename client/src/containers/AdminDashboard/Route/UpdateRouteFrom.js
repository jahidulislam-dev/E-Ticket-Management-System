import { Form, Button, Input, InputNumber } from "antd";

const UpdateRouteForm = ({ editingRoute, resetEditing }) => {
  const onFinish = async (values) => {
    await updateRoute({ route_id: data?.data?._id, body: values });
  };

  const [form] = Form.useForm();
  form.setFieldsValue(data?.data);

  return (
    <div
      style={{
        textAlign: "left",
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
          name="from"
          label="From"
          rules={[
            {
              required: true,
              message: "Please enter From of the route",
            },
            { whitespace: true },
          ]}
          hasFeedback
        >
          <Input placeholder="Type From" />
        </Form.Item>

        <Form.Item
          name="to"
          label="To"
          rules={[
            {
              required: true,
              message: "Please enter To of the route",
            },
            { whitespace: true },
          ]}
          hasFeedback
        >
          <Input placeholder="Type To" />
        </Form.Item>

        <label className="font-small">
          <span className="primary-text">*</span> Distance
        </label>
        <Form.Item
          name="distance"
          className="mt-2 mb-6"
          rules={[
            {
              required: true,
            },
            {
              type: "number",
              message: "Please enter route distance",
              min: 20,
              max: 1600,
            },
          ]}
          hasFeedback
        >
          <InputNumber
            className="h-10 w-full flex items-center"
            formatter={(values) =>
              `${values}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            placeholder="Type distance"
          />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }}>
          <Button
            disabled={updateIsLoading ? true : false}
            block
            type="primary"
            htmlType="submit"
          >
            {updateIsLoading ? "Loading..." : "Submit"}
          </Button>
          <Button className="mt-2" block type="default" onClick={resetEditing}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateRouteForm;
