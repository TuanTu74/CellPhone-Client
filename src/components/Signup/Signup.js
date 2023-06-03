import React, { useState } from "react";
import "./Signup.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { SignupUser } from "../../actions/UserAction";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import { message } from "antd";

function Signup(props) {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [messageApi, contextHolder] = message.useMessage();
  
  const {
    register,
    handleSubmit,
    // formState: { errors },
    // formState: {  },
  } = useForm();
  const onSubmit =  (data) => {
    if (password === confirmPassword) {

     dispatch(SignupUser(data));
    } else {
      alert("Wrong repeat password!");
    }
  };

  return (
    <div className="container">
      <div className="screen-signup">
        <div className="screen__content-signup">
          <h2 className="title"> SignUp </h2>
          <form className="signup" onSubmit={handleSubmit(onSubmit)}>
            <div className="signup__field">
              <UserOutlined />{" "}
              <input
                className="signup__input"
                {...register("name")}
                placeholder="User name "
                required
              />
            </div>
            <div className="signup__field">
              <MailOutlined />
              <input
                className="signup__input"
                type="email"
                {...register("email")}
                required
                placeholder="Email "
              />
            </div>
            <div className="signup__field">
              <LockOutlined />
              <input
                className="signup__input"
                type="password"
                {...register("password")}
                placeholder="Password "
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="signup__field">
              <LockOutlined />{" "}
              <input
                className="signup__input"
                type="password"
                {...register("repeat password")}
                placeholder=" Repeat password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" value="Đăng kí" className="button signup__submit" >
              <span className="button__text">Register</span>
              <CaretRightOutlined />
            </button>
            <div className="social-signup">
              <span>
                Bạn đã có tài khoản? <Link to="/login">Đăng nhập ngay!  </Link>
              </span>
            </div>
          </form>
        </div>
        {/* Background */}
        <div className="screen__background">
          {/* <span className="screen__background__shape screen__background__shape4" />
          <span className="screen__background__shape screen__background__shape3" />
          <span className="screen__background__shape screen__background__shape2" /> */}
          <span className="screen__background__shape screen__background__shape1" />
        </div>
      </div>
    </div>
  );
}

export default Signup;
