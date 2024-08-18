import React, { useEffect } from "react";
import Image from "next/image";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Upload } from "antd";
import MainButton from "@/components/UI/Button";

const initialData = {
  image: undefined,
};

const UpdateImage = ({ ImageUpdate, resetImageSelect }) => {
  //   console.log(ImageUpdate);
  const [form] = Form.useForm();
  form.setFieldsValue(initialData);

  const onFinish = async (values) => {
    console.log(values);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <div className="mx-auto">
      <Image
        src={ImageUpdate?.url || "https://placehold.it/300x300"}
        className="object-cover"
        alt={ImageUpdate?.image_name}
        width={300}
        height={300}
        style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
      />

      {/* image change form */}
      <div className="mt-10">
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
            label="change this Image"
            name="image"
            valuePropName="fileList"
            getValueFromEvent={(event) => {
              return event?.fileList;
            }}
            rules={[
              {
                required: false,
                message: "please upload a image",
              },
              {
                validator(_, fileList) {
                  return new Promise((resolve, reject) => {
                    if (fileList && fileList[0].size > 2000000) {
                      reject("Image size must be under 2MB");
                    } else {
                      resolve("success");
                    }
                  });
                },
              },
            ]}
            hasFeedback
          >
            <Upload
              listType="picture-card"
              maxCount={1}
              beforeUpload={(file) => {
                return new Promise((resolve, reject) => {
                  if (file.size > 2000000) {
                    reject("File size must be under 2MB");
                  } else {
                    resolve("success");
                  }
                });
              }}
            >
              {uploadButton}
            </Upload>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 24 }} style={{ marginBottom: "0px" }}>
            <MainButton
              btnName="Update Image"
              styles="w-full py-3"
            ></MainButton>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default UpdateImage;
