import React, { useRef, useEffect, useState } from "react";
import Main from "./_components/main/Main";
import styled from "styled-components";

import Slider from "react-slick";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import ImageCards from "./_components/Imagecards/ImageCards";

function Home({ showFilter, toggleFilter, openSignup }) {

  return (
    
    <MainWrapper>
      <Helmet>
        <title>Airbnb | Holiday rental</title>
      </Helmet>
      <Wrapper>
      <Main toggleFilter={toggleFilter} />
      </Wrapper>
      <FlexWrapper >
        <ImageCards showFilter={showFilter} toggleFilter={toggleFilter} openSignup={openSignup} />
      </FlexWrapper>
    </MainWrapper>
  );
}
const MainWrapper = styled.section`
`;

const Wrapper = styled.section`
position: sticky;
top: 161.5px;
z-index: 5;
@media all and (max-width: 980px){
  top: 219.8px;

  }
  @media all and (max-width: 768px) {
    top: 116.5px;
  }
`;
const FlexWrapper = styled.section`
  padding: 15px 0;
  width: 90%;
  margin: 0 auto;
  
`;

export default Home;
