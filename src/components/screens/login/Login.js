import React, { useState, useEffect , useContext} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../../../axiosConfig";
import { UserContext } from "../../../App";

const Login = () => {
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const {updateUserData } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    axios.post(`${BASE_URL}api/v1/users/student/login/`, { country, phone, password })
      .then((response) => { 
        let data = response.data;
        if (data.status_code === 6000) {
          localStorage.setItem("user_data", JSON.stringify(data.data))
          updateUserData({ type: "LOGIN",payload: data.data});
          navigate("/home")
          console.log("success")
        }
        else {
          console.log(data);
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
            console.log(data.message)
          }
          setMessage(errorMessage);
        }
      })
      .catch((error) => {
        
    })
  };

  return (
    <RightContainer>
      <LoginContainer>
        <LoginHeading>Login to your Account</LoginHeading>
        <LoginInfo>Enter email and password to login</LoginInfo>
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
  );
};

const RightContainer = styled.div`
  background: #efefef;
  width: 50%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding: 50px 30px 0px;
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
`;

const LoginInfo = styled.p`
  font-size: 18px;
  margin-bottom: 35px;
  color: #000;
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
`;

const LoginButton = styled(NavLink)`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 25px;
  color: #046bf6;
  font-size: 20px;
`;

const SubmitButton = styled.button`
  background: #046bf6;
  border: 0;
  outline: 0;
  color: #fff;
  padding: 25px 40px;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
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
`;

export default Login;
