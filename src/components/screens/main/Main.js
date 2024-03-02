import React,{useState} from "react";
import Vectors from "../lists/vectors/Vectors";
import styled from "styled-components";
import Tick from "../../../assets/icons/tick-svgrepo-com.svg"
import { NavLink } from "react-router-dom";
import FilterPop from "../popup/FilterPop";

function Main({ toggleFilter }) {
  const [toggled, setToggled] = useState(false);
  const [filterPopOpen, setFilterPopOpen] = useState(false);
  const handleToggle = () => {
    setToggled(!toggled);
  };
  return (
    
    <Wrapper filterPopOpen={filterPopOpen}>
      <FlexWrapper>
      <BonusWrapper>
        <MainC>
          <Top>
            <Slidercont>
              <Vectors />
            </Slidercont>
            <LeftDiv>
            <FilterDiv onClick={toggleFilter}>
              <Filterimg
                src={
                  require("../../../assets/icons/filter-horizontal-svgrepo-com.svg")
                    .default
                }
              />
              <Filter>Filter</Filter>
            </FilterDiv>
            <PopupButton>
              <Filter>Display total before taxes</Filter>
              <ToggleBtn
                className={`toggle-btn ${toggled ? "toggled" : ""}`}
                onClick={handleToggle}
              >
                <Thumb className="thumb" />
              </ToggleBtn>
              </PopupButton>
              </LeftDiv>
          </Top>
        </MainC>
        <Bottom>
          </Bottom>
          </BonusWrapper>
      </FlexWrapper>
      {/* <FilterPop trigger={toggled} setTrigger={setToggled} /> */}
      </Wrapper>
      
  );
}
const BonusWrapper = styled.section`
width: 90%;
margin: 0 auto;
@media all and (max-width: 768px){
    width: 100%;
  }
`;

const Wrapper = styled.section`
`;
const FlexWrapper = styled.section`
  background-color: #fff;
  border-top: 1px solid #a9a9a9;
  @media all and (max-width: 768px){
    border: none;
    box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2); 
  }
`;
const Slidercont = styled.section`
  width: 70%;
  @media all and (max-width: 1280px){
    width: 85%;
  }
  @media all and (max-width: 768px){
    width: 100%;
  }
`;
const FilterDiv = styled(NavLink)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #e0e0e0;
  width: 30%;
  padding:15px 10px ;  
  border-radius: 12px;
  color: #000;
  @media all and (max-width: 1280px){
    width: 100%;
  }
  @media all and (max-width: 768px){
    display: none;
  }
  `;
const MainC = styled.section`
padding-top: 20px;
@media all and (max-width: 768px){
  padding-top: 0px;
  }
`;
const PopupButton = styled.section`
display: flex;
align-items: center;
justify-content: space-between;
border: 1px solid #e0e0e0;
width: 70%;
padding:13px 10px ;   
border-radius: 12px;
margin-left: 10px;
@media all and (max-width: 1280px){
    display: none;
  }
`;
const Top = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Filterimg = styled.img`
  display: block;
  width: 20px;
  /* margin-right: 10px; */
  margin-right: 20px;
  @media all and (max-width: 640px){
    border-radius: 50%;
    /* margin-right: 0; */
  }
`;
const ToggleBtn = styled.button`
  position: relative;
  width: 40px;
  height: 26px;
  border: 1px solid #e0e0e0;
  border-radius: 22px;
  background-color: #A0A0A0;
  cursor: pointer;
  &.toggled {
    background-color:	#282828 ;


  }
  &:hover {
      background-color: #282828 ;

    }
`;

const Thumb = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  transform: translateX(0);
  transition: 0.5s ease;
  position: absolute;
  left: 2px;
  top: 2px;

  ${ToggleBtn}.toggled & {
    transform: translateX(13px);
    background-image: url(${Tick});
    background-size: 19px;
    background-repeat: no-repeat;
    background-position: center;
  }
`
const Filter = styled.h5`
font-weight: 600;
font-size: 13px;
color: #000;
white-space: nowrap;
@media all and (max-width: 640px){
    display:none;
  }
`;
const LeftDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  margin-left: 20px;
  @media all and (max-width: 1280px){
    width: 10%;
  }
  @media all and (max-width: 980px){
    width: 14%;
  }
  @media all and (max-width: 768px){
    width: 20%;
  }
  @media all and (max-width: 480px){
    display: none;
  }
`;
const Bottom = styled.section`
`;

export default Main;
