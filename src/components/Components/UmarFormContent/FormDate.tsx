import { DatePicker, Form } from "antd";
import React from "react";
type Props = {
  label: string;
  name: string;
  date?: string;
  placeholder?: string;
};
const FormDate = (props: Props) => {
  const { label } = props;
  return (
    <Form.Item<Props> label={label} name={"date"}>
      <DatePicker className='h-[55.37px] w-full' placeholder={"2024-09-06"} />
    </Form.Item>
  );
};

export default FormDate;
