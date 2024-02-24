import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

import Popup from "./screens/popup/Popup";

function Header() {
  const [openPopup, setopenPopup] = useState(false);
  return (
    <Wrapper>
    <Main>
      <H1>
        <LinkA>
          <Logo
            src={require("../assets/icons/airbnb.svg").default}
            alt="airbnb"
          />
        </LinkA>
      </H1>
      <Middle>
          <SnavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            <ParaH>Stays</ParaH>
          </SnavLink>
          <SnavLinkButton
            className={({ isActive }) => (isActive ? "active" : "")}
            
          >
            <Para>Experiance</Para>
          </SnavLinkButton>
          <SnavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="experiances"
          >
            <ParaH>Online Experiance</ParaH>
          </SnavLink>
      </Middle>
      <Right>
        <LinkIcon>
          <Span>Airbnb your home</Span>
        </LinkIcon>
        <LinkIcon>
          <GlobeIcon>
            <Globe
              src={require("../assets/icons/globe-alt-svgrepo-com.svg").default}
              alt="airbnb"
            />
          </GlobeIcon>
        </LinkIcon>

        <SignButton onClick={() => setopenPopup(true)}>
          <HamDiv>
            <Hamburger
              src={
                require("../assets/icons/burger-menu-svgrepo-com.svg").default
              }
              alt="hamburgermenu"
            />
          </HamDiv>
          <UserDiv>
            <UserIcon
              src={
                require("../assets/icons/user-circle-svgrepo-com.svg").default
              }
              alt="user"
            />
          </UserDiv>
          </SignButton>
          <Popup trigger={openPopup} setTrigger={setopenPopup}></Popup>
      </Right>
      
      </Main>
      </Wrapper>
  );
}
const Wrapper = styled.section`
padding: 0 0 20px 0;
`;
const Main = styled.nav`
position:sticky;
top:0;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const H1 = styled.h1`
  width: 100px;
`;
const LinkA = styled(Link)``;
const Middle = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
`;
const SnavLinkButton = styled.button`
&:hover {
    background-color: #E0E0E0 !important;
    border-radius: 40px;
  }
  padding: 0 15px;
  border:none;
  background-color: #fff !important;
`;
const SnavLink = styled(NavLink)`
&:hover {
    background-color: #E0E0E0;
    border-radius: 40px;
  }
  &.active {

    color: #000;
    background-color: #fff !important;
  }
  padding: 0 15px;
  color: grey;
  text-decoration: none;
`;
const Para = styled.h3`
  font-size: 15px;
  font-weight: 400;
  margin-top: 20px;
  color: grey;
`;
const ParaH = styled.h3`
font-size: 16px;
  font-weight: 400;
`;
const Right = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img`
  width: 100%;
  display: block;
`;
const Span = styled.h4`
  font-size: 16px;
  color: #000;
  font-weight: 400;
`;
const LinkIcon = styled(Link)`
&:hover {
    background-color: #E0E0E0;
    border-radius: 40px;
  }
  padding: 0 15px;
  /* margin-right: 20px; */
  text-decoration: none;
`;
const GlobeIcon = styled.div`

  width: 40px;
  height: 40px;
  display: flex;
  justify-content:center;
  align-items: center;
`;
const Globe = styled.img`
  width: 20px;
  display: block;
`;
const SignButton = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  width: 50px;
  border: 1px solid grey;
  padding: 5px;
  border-radius: 28px;
`;
const HamDiv = styled.div`
  width: 15px;
`;
const Hamburger = styled.img`
  width: 100%;
  display: block;
`;
const UserDiv = styled.div`
  width: 20px;
`;
const UserIcon = styled.img`
  width: 100%;
  display: block;
`;

// const Main = styled.div``;
// const Main = styled.div``;
// const Main = styled.div``;
// const Main = styled.div``;
// const Main = styled.div``;
// const Main = styled.div``;
// const Main = styled.div``;
export default Header;
