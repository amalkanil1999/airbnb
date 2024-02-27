import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

import Popup from "./screens/popup/Popup";

function HeaderTop() {
  const [openPopup, setopenPopup] = useState(false);
  const [checkButtonsVisible, setCheckButtonsVisible] = useState(true);
  const [activeNavItem, setActiveNavItem] = useState("stays");

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };

  const toggleCheckButtons = () => {
    setCheckButtonsVisible((prev) => !prev);
  };
  return (
    <MainWrapper>
    <Wrapper>
      <MainC>
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
            to="/"
            isActive={activeNavItem === "stays"}
            onClick={() => handleNavItemClick("stays")}
          >
            <ParaH>Stays</ParaH>
          </SnavLink>
          <SnavLinkButton
            isActive={activeNavItem === "experience"}
            onClick={() => {
              handleNavItemClick("experience");
              toggleCheckButtons();
            }}
          >
            <Para isActive={checkButtonsVisible}>Experiance</Para>
          </SnavLinkButton>
          <SnavLink
            to="/experiences"
            isActive={activeNavItem === "onlineExperience"}
            onClick={() => handleNavItemClick("onlineExperience")}
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
                src={
                  require("../assets/icons/globe-alt-svgrepo-com.svg").default
                }
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
        </Right>
      </MainC>
      <Bottom>
        <Curve>
          <DestinationButton>
            <Dates>Check Out</Dates>
            <Inputdestination type="text" placeholder="Search destinations" />
          </DestinationButton>
          {checkButtonsVisible ? (
            <>
              <CheckButton>
                <Dates>Check In</Dates>
                <InputDate type="date" placeholder="Add dates" />
              </CheckButton>
              <CheckButton>
                <Dates>Check Out</Dates>
                <InputDate type="date" placeholder="Add dates" />
              </CheckButton>
            </>
          ) : (
            <CheckButton>
              <Dates>Another Check</Dates>
              <InputDate type="date" placeholder="Add dates" />
            </CheckButton>
          )}
          <GuestButton>
            <Left>
              <Dates>Who</Dates>
              <GuestInput type="text" placeholder="Add guests" />
            </Left>
            <SearchContainer>
              <Search
                src={require("../assets/icons/search-svgrepo-com.svg").default}
              />
            </SearchContainer>
          </GuestButton>
        </Curve>
      </Bottom>
      </Wrapper>
      <Popup trigger={openPopup} setTrigger={setopenPopup}></Popup>
    </MainWrapper>
    
  );
}
const MainWrapper = styled.section`
width: 90%;
margin: 0 auto;
max-width: 1380px;
`;
const Wrapper = styled.section`
  padding: 0 0 20px 0;
  position: sticky;
  top: 0;
`;
const MainC = styled.nav`
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
  align-items: center;
`;
const SnavLinkButton = styled.button`
  &:hover {
    background-color: ${(props) =>
      props.isActive ? "#fff" : "#e0e0e0"};
  }
  margin-top: 5px;
  padding: 0 15px;
  border: none;
  border-radius: 40px;
  background-color: ${(props) => (props.isActive ? "#fff" : "transparent")};
`;
const SnavLink = styled(NavLink)`
  &:hover {
    background-color: ${(props) => (props.isActive ? "#fff" : "#e0e0e0")};
    border-radius: 40px;
  }
  padding: 0 15px;
  color: grey;
  text-decoration: none;
  background-color: ${(props) => (props.isActive ? "#fff" : "transparent")};
  color: ${(props) => (props.isActive ? "#000" : "grey")};

`;
const Para = styled.h3`
  font-size: 15px;
  font-weight: 400;
  color: ${(props) => (props.isActive ? "grey" : "#000")};
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
    background-color: #e0e0e0;
    border-radius: 40px;
  }
  padding: 0 15px;
  text-decoration: none;
`;
const GlobeIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
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

const Bottom = styled.div`
  width: 55%;
  margin: 10px auto;
`;
const Curve = styled.div`
  display: flex;
  border: 1px solid #e8e8e8;
  border-radius: 40px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const DestinationButton = styled.div`
  width: 50%;
  padding: 2%;

  &:hover {
    background-color: #e0e0e0;
    border-radius: 40px;
  }
`;

const Inputdestination = styled.input`
  border: none;
  outline: none;
  ${DestinationButton}:hover & {
    background-color: #e0e0e0;
  }
`;

const CheckButton = styled.div`
  width: 25%;
  padding: 2%;
  &:hover {
    background-color: #e0e0e0;
    border-radius: 40px;
  }
`;
const Dates = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 600;
`;
const InputDate = styled.input`
  border: none;
  outline: none;

  ${CheckButton}:hover & {
    background-color: #e0e0e0;
  }
`;
const GuestButton = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2%;
  &:hover {
    background-color: #e0e0e0;
    border-radius: 40px;
  }
`;
const Left = styled.div``;
const GuestInput = styled.input`
  border: none;
  outline: none;
  ${GuestButton}:hover & {
    background-color: #e0e0e0;
  }
`;
const SearchContainer = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
  padding: 8px;
`;
const Search = styled.img`
  width: 100%;
  display: block;
`;
export default HeaderTop;
