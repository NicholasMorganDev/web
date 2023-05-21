import { Button, Form, Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};



export default function LoginForm ({user, setUser}) {
  const [formData, setFormData ] = useState({});
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await fetch('https://bucket-list-api-nm.web.app/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
  })
  const data = await response.json()

  if(data.token) {
    localStorage.setItem("token", data.token)
    localStorage.setItem("uid", data.user.id)
    console.log(data)
    setUser(true)
    navigate("/")
  } else {
    alert("Invalid Email or Password")
  }
}

  const onChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData, // shallow copy all previous state
      [name]: value, // update specific key/value
    }));
    console.log(formData)
  }
  return (
    <>
      <h1>Login</h1>

      <Form
        className="login-form"
        onSubmit={handleLogin}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="Email"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input value={formData.email} onChange={onChange} name={'email'}/>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password value={formData.password} onChange={onChange} name={'password'}/>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" onSubmit={handleLogin} onClick={handleLogin}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
