import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";


const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    
  };

  return (
    <RightContainer>
      <SignupContainer>
        <SignupHeading>Signup for an Account</SignupHeading>
        <SignupInfo>Enter username, email, and password to signup</SignupInfo>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <TextInput
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type="text"
              placeholder="Username"
            />
          </InputContainer>
          <InputContainer>
            <TextInput
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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
          <ButtonContainer>
            <SubmitButton>Signup</SubmitButton>
          </ButtonContainer>
          {message && <ErrorMessage>{message}</ErrorMessage>}
          <LoginLink to="/login">Already have an account? Login here</LoginLink>
        </Form>
      </SignupContainer>
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

const SignupContainer = styled.div`
  padding-bottom: 30px;
  border-bottom: 1px solid #fff;
  width: 100%;
  text-align: center;
`;

const SignupHeading = styled.h3`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #000;
`;

const SignupInfo = styled.p`
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

const LoginLink = styled(NavLink)`
  display: block;
  margin-top: 20px;
  color: #046bf6;
  text-decoration: none;
`;

export default Signup;
