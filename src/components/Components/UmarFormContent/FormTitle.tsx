import { Form, Input } from "antd";
import React from "react";

type Props = {
  label: string;
  name: string;
  title?: string;
  placeholder?: string;
};

const FormTitle = (props: Props) => {
  const { label, name } = props;
  return (
    <Form.Item<Props>
      label={label}
      name={"title"}
    >
      <Input style={{ height: 55.37 }} placeholder={"Title"} />
    </Form.Item>
  );
};

export default FormTitle;
