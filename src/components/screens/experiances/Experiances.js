import React from 'react'
import styled from 'styled-components'

function Experiances() {
  return (
    <Wrapper>
      <Secondary>
        <H1>New this week</H1>
        <ImageContainers>
          <ImageDiv>
            <Img src={require("../../../assets/image/images/2fe40f4f-5ea3-432f-9fbd-e2ce3c6c3855.webp")} alt="curly image" />
          </ImageDiv>
          <ImageDiv>
          <Img src={require("../../../assets/image/images/58819d01-2a71-441d-b3bc-baae0cd64da1.webp")} alt="cookery"/>
          </ImageDiv>
          <ImageDiv>
          <Img src={require("../../../assets/image/images/e35bb307-05f4-48a4-bdc5-3b2198bb9451.webp")} alt="desert" />
          </ImageDiv>
        </ImageContainers>
       </Secondary>
    </Wrapper>
  )
}
const Wrapper = styled.section`
width: 90%;
margin: 0 auto;
`;
const Secondary = styled.section``;
const H1 = styled.h1`
color: #000;
font-size: 32px;
font-weight: 700;
margin-bottom: 30px;
`;
const ImageContainers = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
`;
const ImageDiv = styled.section`
width: 32%;
`;
const Img = styled.img`
width: 100%;
display: block;
border-radius: 12px;
`;
export default Experiances