import React,{useState} from "react";
import Vectors from "./lists/Vectors";
import styled from "styled-components";
import Tick from "../../assets/icons/tick-svgrepo-com.svg"

function Main() {
  const [toggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!toggled);
  };
  return (
    <Wrapper>
      <FlexWrapper>
        <MainC>
          <Top>
            <Slidercont>
              <Vectors />
            </Slidercont>
            <FilterDiv>
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
          </Top>
        </MainC>
      </FlexWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  border-top: 1px solid #a9a9a9;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
`;
const FlexWrapper = styled.section`
  width: 90%;
  margin: 0 auto;
`;
const Slidercont = styled.section`
  width: 70%;
  z-index: 0;
`;
const FilterDiv = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e0e0e0;
height: 50px;
padding: 0 10px ;  
border-radius: 16px;
  `;
const MainC = styled.section``;
const PopupButton = styled.section`
display: flex;
align-items: center;
justify-content: space-between;
border: 1px solid #e0e0e0;
height: 50px;
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
// const PopupButton = styled.section``;
// const Filterimg = styled.section``;

export default Main;
