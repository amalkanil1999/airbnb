import React,{useState} from "react";
import Vectors from "./lists/Vectors";
import styled from "styled-components";
import Tick from "../../assets/icons/tick-svgrepo-com.svg"
import { NavLink } from "react-router-dom";
import FilterPop from "./popup/FilterPop";

function Main() {
  const [toggled, setToggled] = useState(false);
  const [openPopup, setopenPopup] = useState(false);
  const handleToggle = () => {
    setToggled(!toggled);
  };
  return (
    
    <Wrapper>
      <FlexWrapper>
      <BonusWrapper>
        <MainC>
          <Top>
            <Slidercont>
              <Vectors />
            </Slidercont>
            <LeftDiv>
            <FilterDiv onClick={()=>setopenPopup(true)}>
              <Filterimg
                src={
                  require("../../assets/icons/filter-horizontal-svgrepo-com.svg")
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
      <FilterPop trigger={openPopup} setTrigger={setopenPopup}>
              </FilterPop>
      </Wrapper>
      
  );
}
const BonusWrapper = styled.section`
width: 90%;
margin: 0 auto;
`;

const Wrapper = styled.section`
  
  /* box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2); */
`;
const FlexWrapper = styled.section`
  width: 100%;
  margin: 0 auto;
  /* position: fixed;
  top:170px;
  left:0px; */
  background-color: #fff;
  border-top: 1px solid #a9a9a9;
`;
const Slidercont = styled.section`
  width: 70%;
  
`;
const FilterDiv = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e0e0e0;
  width: 20%;
  height: 50px;
  padding: 0 10px ;  
  border-radius: 16px;
  text-decoration: none;
  color: #000;
  `;
const MainC = styled.section`
padding-top: 20px;

`;
const PopupButton = styled.section`
display: flex;
align-items: center;
justify-content: space-between;
border: 1px solid #e0e0e0;
height: 50px;
width: 60%;
padding: 0 10px ;  
border-radius: 16px;
`;
const Top = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Filterimg = styled.img`
  display: block;
  width: 20px;
  margin-right: 10px;
`;
const ToggleBtn = styled.button`
  position: relative;
  width: 40px;
  height: 26px;
  border: 1px solid #e0e0e0;
  border-radius: 22px;
  background-color: #A0A0A0;
  cursor: pointer;
  margin-left:10px;
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
font-weight: 500;
font-size: 13px;

`;
const LeftDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  margin-left: 50px;
`;
const Bottom = styled.section`
/* height: 800px; */
`;

export default Main;
