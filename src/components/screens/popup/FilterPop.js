import React, { useRef, useState } from "react";
import { styled } from "styled-components";

function SignUp(props) {
  const [selectedType, setSelectedType] = useState('Any type');
  const [selectedBedroom, setSelectedBedroom] = useState('Any');
  const [selectedBed, setSelectedBed] = useState('Any');
  const [selectedBathroom, setSelectedBathroom] = useState('Any');

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };
  const handleBedroomClick = (type) => {
      setSelectedBedroom(type);
      
  };
  const handleBedClick = (type) => {
    setSelectedBed(type);
  };

  const handleBathroomClick = (type) => {
    setSelectedBathroom(type);
  };

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
            <H3>Filters</H3>
          </Top>
          <Flex>
          <Content>
            <InputCompo>
              <H5>Type of place</H5>
              <H6>A home all to yourself.</H6>
              <SelectDiv>
                <Type
                  first clicked={selectedType === "Any type"}
                  onClick={() => handleTypeClick("Any type")}
                >
                  <Text clicked={selectedType === "Any type"}>Any type</Text>
                </Type>
                <Type
                  clicked={selectedType === "Room"}
                  onClick={() => handleTypeClick("Room")}
                >
                  <Text clicked={selectedType === "Room"}>Room</Text>
                </Type>
                <Type
                  last clicked={selectedType === "Entire Home"}
                  onClick={() => handleTypeClick("Entire Home")}
                >
                  <Text clicked={selectedType === "Entire Home"}>
                    Entire Home
                  </Text>
                </Type>
              </SelectDiv>
            </InputCompo>
            </Content>
            <Content>
              <InputCompo>
                <H5>Rooms and beds</H5>
                <Rooms>
                <H6>Bedrooms</H6>
                <SelectDivDown>
                  {["Any",0, 1, 2, 3, 4, 5, 6, 7, '8+'].map((type, index) => (
                    <TypeRooms
                      key={index}
                      first={index === 0}
                      last={index === 8}
                      clicked={selectedBedroom === type}
                      onClick={() => handleBedroomClick(type)}
                    >
                      <Text clicked={selectedBedroom === type}>{type}</Text>
                    </TypeRooms>
                  ))}
                  </SelectDivDown>
                </Rooms>
                <Rooms>
                <H6>Bed</H6>
                <SelectDivDown>
                  {["Any",0, 1, 2, 3, 4, 5, 6, 7, '8+'].map((type, index) => (
                    <TypeRooms
                      key={index}
                      first={index === 0}
                      last={index === 8}
                      clicked={selectedBed === type}
                      onClick={() => handleBedClick(type)}
                    >
                      <Text clicked={selectedBed === type}>{type}</Text>
                    </TypeRooms>
                  ))}
                </SelectDivDown>
                </Rooms>
                <Rooms>
                <H6>Bathrooms</H6>
                <SelectDivDown>
                  {["Any",0, 1, 2, 3, 4, 5, 6, 7, '8+'].map((type, index) => (
                    <TypeRooms
                      key={index}
                      first={index === 0}
                      last={index === 8}
                      clicked={selectedBathroom === type}
                      onClick={() => handleBathroomClick(type)}
                    >
                      <Text clicked={selectedBathroom === type}>{type}</Text>
                    </TypeRooms>
                  ))}
                </SelectDivDown>
                  </Rooms>
              </InputCompo>
            </Content>
          </Flex>
          <Bottom>
          <H3Down>Clear All</H3Down>
            <ClosebuttonDown onClick={() => props.setTrigger(false)}>
              <TextShow>Show places</TextShow>
            </ClosebuttonDown>
            
          </Bottom>
        </Popupdiv>
      </PopupContainer>
      {props.children}
    </>
  ) : (
    ""
  );
}

const PopupContainer = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const Popupdiv = styled.div`
  width: 50%;
  height: 85%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  @media all and (max-width: 980px){
    width: 90%;
  }
  @media all and (max-width: 768px){
    width: 95%;
  }
  `;


const H3 = styled.h3`
  font-size: 18px;
  text-align: center;
  color: #000;
  width: 10%;
  font-weight: 600;
  margin: 0 auto;
  `;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #e0e0e0;
  padding: 10px;
  position: sticky;
  top: 0;
  background-color: #fff;
`;

  const Flex = styled.div`
  `;
const Content = styled.div`
  text-align: center;
  padding: 25px;
  border-bottom: 1px solid #e0e0e0;
`;

const InputCompo = styled.div`
  margin-bottom: 20px;
`;

const H5 = styled.h5`
  font-size: 26px;
  color: #000;
  text-align: left;
  font-weight: 600;
  margin-bottom: 10px;
`;
const H6 = styled.h5`
  font-size: 16px;
  color: #000;
  text-align: left;
  font-weight: 360;
`;
const SelectDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Type = styled.div`
  padding: 30px 0;
  width: 30%;
  border-top-left-radius: ${props => props.first ? '10px' : '0'};
  border-bottom-left-radius: ${props => props.first ? '10px' : '0'};
  border-top-right-radius: ${props => props.last ? '10px' : '0'};
  border-bottom-right-radius: ${props => props.last ? '10px' : '0'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.clicked ? 'black' : "white"};
  border: 1px solid #e0e0e0;
  &:hover{
  border: 1px solid #000;

  }
  `;
const Text = styled.h5`
  color: ${props => props.clicked ? 'white' : 'black'};
  font-size: 16px;
  font-weight: 400;
`;
const Rooms = styled.div`
margin: 15px 0 ;
`;
const SelectDivDown = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;

`;
const TypeRooms = styled.div`
  height: 40px;
  width: 60px;
  border-radius:18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.clicked ? 'black' : "white"};
  border: 1px solid #e0e0e0;
  &:hover{
    border-color: 1px solid #000 !important;
  }
`;
const Bottom = styled.div`
position: sticky;
bottom: 0;
height: 50px;
background-color: #fff;
display: flex;
align-items: center;
justify-content:space-between;
padding: 10px;
`;
const Closebutton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
const H3Down = styled.button`
  font-size: 16px;
  text-align: center;
`;
const ClosebuttonDown = styled.button`
  padding: 10px 20px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Close = styled.img`
  width: 100%;
  height: 100%;
`;
const TextShow = styled.h5`
color: #fff;
font-size: 16px;
white-space: nowrap;
font-weight: 550;
`;

export default SignUp;
