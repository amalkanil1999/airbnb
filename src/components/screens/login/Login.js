import React, { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../../helpers/axiosConfig";
import { StoreContext } from "../../context/Store";
import { Helmet } from "react-helmet";

const Login = () => {
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useContext(StoreContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    axios
      .post(`${BASE_URL}api/v1/users/student/login/`, {
        country,
        phone,
        password,
      })
      .then((response) => {
        let data = response.data;
        if (data.status_code === 6000) {
          localStorage.setItem("user_data", JSON.stringify(data.data));
          dispatch({ type: "SET_USER_DATA", payload: data.data });
          navigate("/");
        } else {
          const errors = data.data.errors;
          let errorMessage = "";

          if (errors) {
            for (const key in errors) {
              const errorArray = errors[key];
              if (Array.isArray(errorArray) && errorArray.length > 0) {
                errorMessage = `${key}: ${errorArray[0]}`;
                break;
              }
            }
          } else if (data.message) {
            errorMessage = data.message;
          } else {
            errorMessage = "Unknown error occurred";
            console.log(data.message);
          }
          setMessage(errorMessage);
        }
      })
      .catch((error) => {});
  };

  return (
    <LoginC>
    <Helmet>
        <title>Login | Airbnb</title>
      </Helmet>
    <RightContainer>
      
      <LoginContainer>
        <LoginHeading>Login</LoginHeading>
        <LoginInfo>Enter details to login</LoginInfo>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <TextInput
              onChange={(e) => setCountry(e.target.value)}
              value={country}
              type="country"
              placeholder="Country"
            />
          </InputContainer>
          <InputContainer>
            <TextInput
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              type="number"
              placeholder="Phone Number"
            />
          </InputContainer>
          <InputContainer>
            <TextInput
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
            />
          </InputContainer>
          <LoginButton to="/signup">Signup Now</LoginButton>
          {message && <ErrorMessage>{message}</ErrorMessage>}
          <ButtonContainer>
            <SubmitButton>Login</SubmitButton>
          </ButtonContainer>
        </Form>
      </LoginContainer>
      </RightContainer>
      </LoginC>
  );
};

const LoginC = styled.div`
padding-top:20px;
 width: 90%;
 margin: 0 auto;
`;
const RightContainer = styled.div`
  background: #efefef;
  width: 50%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding: 30px 30px 0px;
  @media all and (max-width: 980px) {
    width: 80%;
  }
  @media all and (max-width: 640px) {
    width: 90%;
  }
  @media all and (max-width: 480px) {
    width: 100%;
  }
`;

const LoginContainer = styled.div`
  padding-bottom: 30px;
  border-bottom: 1px solid #fff;
  width: 100%;
  text-align: center;
`;

const LoginHeading = styled.h3`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #000;
  @media all and (max-width: 640px) {
    font-size: 28px;

  }
`;

const LoginInfo = styled.p`
  font-size: 18px;
  margin-bottom: 35px;
  color: #000;
  @media all and (max-width: 640px) {
    font-size: 17px;

  }
`;

const Form = styled.form`
  width: 100%;
  display: block;
`;

const InputContainer = styled.div`
  margin-bottom: 15px;
  position: relative;
`;

const TextInput = styled.input`
  padding: 20px 25px 20px 30px;
  width: 100%;
  display: block;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  background-color: #e0e0e0;
  @media all and (max-width: 640px) {
    font-size: 17px;

  }
`;

const LoginButton = styled(NavLink)`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 25px;
  color: #046bf6;
  font-size: 20px;
  @media all and (max-width: 640px) {
    font-size: 18px;
  }
`;

const SubmitButton = styled.button`
  background: #046bf6;
  border: 0;
  outline: 0;
  color: #fff;
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
  @media all and (max-width: 640px) {
    font-size: 18px;

  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ErrorMessage = styled.p`
  font-size: 17px;
  color: red;
  margin-bottom: 25px;
  text-align: center;
  @media all and (max-width: 640px) {
    font-size: 16px;
  }
`;

export default Login;
