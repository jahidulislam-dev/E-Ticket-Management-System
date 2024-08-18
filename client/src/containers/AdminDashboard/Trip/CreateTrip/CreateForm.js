import { Form, Select, InputNumber, DatePicker } from "antd";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsBusFront } from "react-icons/bs";
import { BiTrip, BiUser } from "react-icons/bi";
import MainButton from "@/components/UI/Button";
import moment from "moment";

const initialData = {
  route_code: "",
  bus_code: "",
  bus_id: "",
  departure_time: "",
  arrival_time: "",
  driver_id: "",
  route_code: "",
  ticket_price: 0,
};

const CreateTripForm = () => {
  const disabledDate = (current) => {
    // Disable dates before today after 7 days
    const today = moment().startOf("day");
    const sevenDaysAhead = moment().add(6, "days").endOf("day");

    return current && (current < today || current > sevenDaysAhead);
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const handleValuesChange = (changedValues) => {};

  const [form] = Form.useForm();

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
        onValuesChange={handleValuesChange}
        onFinishFailed={(error) => {
          console.log({ error });
        }}
      >
        <Form.Item name="route_code" label="Route code" requiredMark="require">
          <Select placeholder="Select trip route code">
            {[].map((rt, index) => (
              <Select.Option key={rt._id} value={`${rt?.route_code}`}>
                <span className="flex items-center">
                  <span className="ps-2 pe-2">
                    <BiTrip />
                  </span>
                  {rt?.from}
                  <span className="ps-3 pe-3">
                    <AiOutlineArrowRight />
                  </span>
                  {rt.to}
                </span>
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Departure Time"
          name="departure_time"
          rules={[
            {
              required: true,
              message: "Please enter Departure Time",
            },
          ]}
        >
          <DatePicker
            className="w-full "
            showTime={{ format: "hh:mm A", use12Hours: true }}
            placeholder="Select Departure Date"
            disabledDate={disabledDate}
          />
        </Form.Item>

        <Form.Item
          label="Arrival Time"
          name="arrival_time"
          rules={[
            {
              required: true,
              message: "Please enter Arrival Time",
            },
          ]}
        >
          <DatePicker
            className="w-full"
            placeholder="Select Arrival Date"
            showTime={{ format: "hh:mm A", use12Hours: true }}
            disabledDate={disabledDate}
          />
        </Form.Item>

        <Form.Item name="bus_id" label="Bus code" requiredMark="require">
          <Select placeholder="Select trip bus code">
            {[].map((bs) => (
              <Select.Option key={bs._id} value={`${bs?._id}`}>
                <span className="flex items-center">
                  <span className="ps-2 pe-2">
                    <BsBusFront />
                  </span>
                  <span className="ps-2 pe-2 capitalize">{bs?.brand_name}</span>
                  <span className="ps-2 pe-2">{bs?.model}</span>
                  <span className="ps-2 pe-2">{bs?.bus_code}</span>
                </span>
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name="driver_id" label="Driver" requiredMark="require">
          <Select placeholder="Select trip Driver">
            {[].map((bs) => (
              <Select.Option key={bs._id} value={`${bs?._id}`}>
                <span className="flex items-center">
                  <span className="ps-2 pe-2">
                    <BiUser />
                  </span>
                  <span className="ps-2 pe-2 capitalize">{bs?.name}</span>
                  <span className="ps-2 pe-2">{bs?.email}</span>
                  <span className="ps-2 pe-2">{bs?.age} Years</span>
                </span>
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="ticket_price"
          label="Fare Price"
          rules={[
            {
              required: true,
            },
            {
              type: "number",
              message: "Please enter trip fare",
              min: 0,
              max: 10000,
            },
          ]}
        >
          <InputNumber
            formatter={(values) =>
              `৳ ${values}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            className="w-full"
            placeholder="Type trip fare"
          />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }}>
          <MainButton btnName="Submit" styles="w-full py-3" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateTripForm;
