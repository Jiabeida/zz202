import React, { useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
export default function Local() {
  const [flag, setFlag] = useState(false);
  useEffect(() => {}, [flag]);
  const Demo = () => {
    const onFinish = (values) => {
      values.id = Date.now();
      const obj = values;
      if (localStorage.getItem('Data')) {
        const arr = JSON.parse(localStorage.getItem('Data'));
        arr.push(obj);
        localStorage.setItem('Data', JSON.stringify(arr));
        values.username = values.Img = values.Price = values.Num = '';
        setFlag(!flag);
      } else {
        const arr1 = [];
        arr1.push(obj);
        localStorage.setItem('Data', JSON.stringify(arr1));
        values.username = values.Img = values.Price = values.Num = '';
        setFlag(!flag);
      }
    };
    const onFinishFailed = (errorInfo) => {};
    return (
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="名称"
          name="username"
          rules={[{ required: true, message: '请输入名称' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="图片地址"
          name="Img"
          rules={[{ required: true, message: '请输入图片地址' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="价格"
          name="Price"
          rules={[{ required: true, message: '请输入价格' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="数量"
          name="Num"
          rules={[{ required: true, message: '请输入数量' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            添加
          </Button>
        </Form.Item>
      </Form>
    );
  };

  return (
    <div>
      <Demo style={{ float: 'left' }} />
    </div>
  );
}
