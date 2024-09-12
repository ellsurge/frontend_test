import {
  Form,
  Radio,
  Select,
  TreeSelect,
  Cascader,
  DatePicker,
  InputNumber,
  Switch,
  Button,
  Slider,
  ColorPicker,
  Input,
  message,
} from "antd";
const { RangePicker } = DatePicker;
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
      style={{ maxWidth: 600, padding: 10, }}
      onFinish={onFinish}
    >
      <Form.Item label="Category" name="Select">
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Vote Input" name="Input">
        <Input />
      </Form.Item>
      <Form.Item label="Description" name="TextArea">
        <TextArea rows={6} />
      </Form.Item>
      <Form.Item label="Start" name="DatePicker">
        <DatePicker style={{ height: 40, width: '100%', }} />
      </Form.Item>
      <div className="flex w-full items-center justify-center">
        <Button type="primary" htmlType="submit" className="w-full" style={{ height: 38, background: '#2F54EB', }}>
          Create Vote
        </Button>
      </div>
    </Form>
  );
};
