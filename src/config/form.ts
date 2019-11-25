interface FormItemLayout {
  labelCol: {
    xs: { span: number };
    sm: { span: number };
  };
  wrapperCol: {
    xs: { span: number };
    sm: { span: number };
  };
}

export const formItemLayout: Readonly<FormItemLayout> = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
};
