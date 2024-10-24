import React from "react";
import { useNavigate } from "react-router";
import { setToken } from "../../utils/token";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import "./index.scss";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const Login = () => {
  const navigate = useNavigate();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    //请求接口
    navigate("/Workbenches");
    setToken(1);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="loginBox">
      <h1>欢迎使用OurLink</h1>
      <Form
        name="basic"
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 300 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
          className="username"
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item<FieldType> name="remember" valuePropName="checked">
          <Checkbox>
            <div style={{ fontSize: "12px" }}>
              我已阅读并同意<Link to="/">《使用政策》</Link>和《
              <Link to="/">隐私政策》</Link>
            </div>
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: 300 }}>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
