import React from "react";
import { styled } from "styled-components";

function SignUp(props) {
  return props.trigger ? (
    <>
      <PopupContainer>
        <Popupdiv>
          <Top>
            <Closebutton onClick={() => props.setTrigger(false)}>
              <Close
                src={
                  require("../../../assets/icons/close-square-svgrepo-com.svg")
                    .default
                }
              />
            </Closebutton>
            <H3>Welcome to Airbnb</H3>
          </Top>
          <Content>
            <InputCompo>
              <H5>Sign Up</H5>
              <Input type="text" placeholder="Username" />
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <SignupButton>Continue</SignupButton>
            </InputCompo>
          </Content>
        </Popupdiv>
      </PopupContainer>
      {props.children}
    </>
  ) : (
    ""
  );
}

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Popupdiv = styled.div`
  width: 30%;
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const H3 = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  margin-left: 10%;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Content = styled.div`
  text-align: center;
`;

const InputCompo = styled.div`
  margin-bottom: 20px;
`;

const H5 = styled.h5`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
`;

const SignupButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`;

const Closebutton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const Close = styled.img`
  width: 100%;
  height: 100%;
`;

export default SignUp;
