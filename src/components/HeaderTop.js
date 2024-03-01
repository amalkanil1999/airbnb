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

    <BonusWrapper>
    <MainWrapper>
    <Wrapper>
          <MainC>
            <H1container>
        <H1>
          <LinkA>
            <Logo
              src={require("../assets/icons/airbnb.svg").default}
              alt="airbnb"
            />
          </LinkA>
              </H1>
              </H1container>
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
            to="experiences"
            isActive={activeNavItem === "onlineExperiences"}
            onClick={() => handleNavItemClick("onlineExperiences")}
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
            <CheckButtonPop>
              <Dates>Another Check</Dates>
              <InputDate type="date" placeholder="Add dates" />
            </CheckButtonPop>
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
      </MainWrapper>
      <Popup trigger={openPopup} setTrigger={setopenPopup}></Popup>
      </BonusWrapper>
  );
}
const BonusWrapper = styled.section`
background-color: #fff;
position: sticky;
top: 0;
z-index: 10;
`;

const MainWrapper = styled.section`
width: 90%;
margin: 0 auto;


`;
const Wrapper = styled.section`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
`;
const MainC = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
  width: 100%;
  @media all and (max-width: 480px){
    width: 25%;
    margin: 0 auto;
    margin-bottom: 10px;
  }
  @media all and (max-width: 360px){
    width: 40%;
  }
`;
const H1container = styled.div`
width: 20%;
@media all and (max-width: 980px){
    width: 15%;
  }
  @media all and (max-width: 768px){
    width: 25%;
    margin: 0 auto;
    margin-bottom: 10px;
  }
  @media all and (max-width: 480px){
    width: 100%;
  }
`;

const H1 = styled.h1`
  width: 100px;
`;
const LinkA = styled(Link)`
`;
const Middle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  @media all and (max-width: 980px){
    width: 51%;
  }
  @media all and (max-width: 768px){
    width: 70%;
  }
  @media all and (max-width: 640px){
    width: 100%;
  }
  @media all and (max-width: 480px){
    display: none;
  }
`;
const SnavLinkButton = styled.button`
  &:hover {
    background-color: ${(props) =>
      props.isActive ? "#fff" : "#e0e0e0"};
  }
  padding: 6px 12px;
  border-radius: 40px;
  background-color: ${(props) => (props.isActive ? "#fff" : "transparent")};
`;
const SnavLink = styled(NavLink)`
  &:hover {
    background-color: ${(props) => (props.isActive ? "#fff" : "#e0e0e0")};
    border-radius: 40px;
  }
  padding: 6px 12px;
  color: grey;
  text-decoration: none;
  background-color: ${(props) => (props.isActive ? "#fff" : "transparent")};
  color: ${(props) => (props.isActive ? "#000" : "grey")};

`;
const Para = styled.h3`
  font-size: 16px;
  font-weight: 400;
  margin: 4px;
  color: ${(props) => (props.isActive ? "grey" : "#000")};
`;
const ParaH = styled.h3`
  font-size: 16px;
  font-weight: 400;
  margin: 4px;
`;
const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 20%;
  @media all and (max-width: 980px){
    width: 33%;
  }
  @media all and (max-width: 768px){
    display: none;
  }
`;
const Logo = styled.img`
  width: 100%;
  display: block;
`;
const Span = styled.h4`
  font-size: 13px;
  color: #000;
  font-weight: 550;
  margin: 8px;
  white-space: nowrap;
`;
const LinkIcon = styled(Link)`
  &:hover {
    background-color: #e0e0e0;
    border-radius: 40px;
  }
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
  margin-left: 10px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Curve = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #e8e8e8;
  border-radius: 40px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 60%;
  @media all and (max-width: 1280px){
    width: 90%;
  }
  @media all and (max-width: 980px){
    width: 100%;
  }
  @media all and (max-width: 768px){
    width: 70%;
  }
`;
const DestinationButton = styled.div`
  width: 30%;
  padding: 10px 20px;
  &:hover {
    background-color: #e0e0e0;
    border-radius: 40px;
  }
  @media all and (max-width: 768px){
    width: 50%;
  }
  @media all and (max-width: 360px){
    display: none;
  }
`;

const Inputdestination = styled.input`
  font-size: 15px;
  font-weight: 500;
  width: 90%;
  ${DestinationButton}:hover & {
    background-color: #e0e0e0;
  }
`;

const CheckButton = styled.div`
  width: 20%;
  padding: 10px 20px;
  &:hover {
    background-color: #e0e0e0;
    border-radius: 40px;
  }
    @media all and (max-width: 768px){
    display: none;
  }
`;
const CheckButtonPop = styled.div`
  width: 40%;
  padding: 10px 20px;
  &:hover {
    background-color: #e0e0e0;
    border-radius: 40px;
  }
`;
const Dates = styled.p`
  font-size: 12px;
  font-weight: 550;
  color: #000;
`;
const InputDate = styled.input`
  font-size:15px;
  ${CheckButton}:hover & {
    background-color: #e0e0e0;
  }
`;
const GuestButton = styled.div`
  width: 30%;
  padding: 10px 5px 10px 20px; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    background-color: #e0e0e0;
    border-radius: 40px;
  }
  @media all and (max-width: 768px){
    width: 50%;
  }
  @media all and (max-width: 360px){
    width: 100%;
    
  }
`;
const Left = styled.div`
width: 60%;`;
const GuestInput = styled.input`
  font-size:15px;
  font-weight: 500;
  width: 90%;
  ${GuestButton}:hover & {
    background-color: #e0e0e0;
  }
`;
const SearchContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: red;
  padding: 8px;
`;
const Search = styled.img`
  width: 100%;
  display: block;
`;
export default HeaderTop;
