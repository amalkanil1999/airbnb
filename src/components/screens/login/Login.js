import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
  };

  return (
    <RightContainer>
      <LoginContainer>
        <LoginHeading>Login to your Account</LoginHeading>
        <LoginInfo>Enter email and password to login</LoginInfo>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <TextInput
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type="email"
              placeholder="Email"
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
