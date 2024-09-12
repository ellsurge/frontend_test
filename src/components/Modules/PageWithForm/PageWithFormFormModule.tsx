import {
  Form,
  Select,
  DatePicker,
  Button,
  Input,
  message,
} from "antd";
import { useState } from "react";
import UploadInput from "~/views/input/UploadInput";
const { TextArea } = Input;

type Props = {
  setFormData: (data: any) => void;
};

export const PageWithFormFormModule = (props: Props) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    void message.info(JSON.stringify(values));
  };

  return (
    <div>
      <div className="w-full bg-[#F0F5FF] p-4 text-[16px]">
        <span className="font-[650] text-[#2F54EB]">10 FAO </span>will be deducted when voting is generated <br />(Amount : 9 FAO)
      </div>
      <Form
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        onFieldsChange={(changedFields) => {
          props.setFormData((prevData: any) =>
            changedFields.reduce(
              (acc, { name, value }) => ({ ...acc, [name[0]]: value }),
              prevData,
            ),
          );
        }}
        className=""
        layout="horizontal"
        style={{ maxWidth: 600, padding: 10, background: 'white', }}
        onFinish={onFinish}
      >
        <Form.Item label="Category" name="Select">
          <Select style={{ height: 40, }} placeholder='Birthday AD'>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Vote Input" name="Input">
          <Input style={{ height: 40, }} placeholder="Title" />
        </Form.Item>
        <Form.Item label="Image" name="Upload" style={{ width: "100%" }}>
          <UploadInput />
        </Form.Item>
        <Form.Item label="Description" name="TextArea">
          <TextArea rows={6} placeholder="Please write down a description of the event" />
        </Form.Item>
        <Form.Item label="Start" name="DatePicker">
          <DatePicker style={{ height: 40, width: '100%', }} placeholder="2024-09-06" />
        </Form.Item>
        <div className="flex w-full items-center justify-center">
          <Button type="primary" htmlType="submit" className="w-full" style={{ height: 38, background: '#2F54EB', }}>
            Create Vote
          </Button>
        </div>
      </Form>
    </div>
  );
};
