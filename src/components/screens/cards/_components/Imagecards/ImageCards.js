import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "../_components/slick/slick.css";
import "../_components/slick/slick-theme.css";
import { motion } from "framer-motion";

function ImageCards({ showFilter, toggleFilter, openSignup }) {
    const Imagecards = [
        {
          rating: "4.5",
          added: "9 weeks ago",
          desc: "Beach and Sunset Views",
          imgSrc: [
            require("../../../../../assets/image/images/image10.webp"),
            require("../../../../../assets/image/images/image5.webp"),
            require("../../../../../assets/image/images/image6.webp"),
            require("../../../../../assets/image/images/image7.webp"),
          ],
          price: "$40,000",
          date: "15-20 May",
          title: "Mariefred, Sweden",
        },
        {
          rating: "4.9",
          added: "8 weeks ago",
          desc: "Beach and Sunset Views",
          imgSrc: [
            require("../../../../../assets/image/images/image8.webp"),
            require("../../../../../assets/image/images/image9.webp"),
            require("../../../../../assets/image/images/image15.webp"),
            require("../../../../../assets/image/images/image5.webp"),
          ],
          price: "$30,000",
          date: "25-20 May",
          title: "Marbella, Spain",
        },
        {
          rating: "3.9",
          added: "5 weeks ago",
          desc: "Beach and Sunset Views",
          imgSrc: [
            require("../../../../../assets/image/images/image7.webp"),
            require("../../../../../assets/image/images/image12.webp"),
            require("../../../../../assets/image/images/image13.webp"),
            require("../../../../../assets/image/images/image14.webp"),
          ],
          price: "$45,000",
          date: "10-20 Oct",
          title: "Molde, Norway",
        },
        {
          rating: "4.1",
          added: "5 weeks ago",
          desc: "Beach and Sunset Views",
          imgSrc: [
            require("../../../../../assets/image/images/image5.webp"),
            require("../../../../../assets/image/images/image15.webp"),
            require("../../../../../assets/image/images/image16.webp"),
            require("../../../../../assets/image/images/image9.webp"),
          ],
          price: "$25,000",
          date: "15-20 May",
          title: "Broken Bow, US",
        },
        {
          rating: "4.2",
          added: "6 weeks ago",
          desc: "Beach and Sunset Views",
          imgSrc: [
            require("../../../../../assets/image/images/image10.webp"),
            require("../../../../../assets/image/images/image16.webp"),
            require("../../../../../assets/image/images/image12.webp"),
            require("../../../../../assets/image/images/image5.webp"),
          ],
          price: "$12,300",
          date: "15-20 May",
          title: "Lac-Beauport, Canada",
        },
        {
          rating: "2.9",
          added: "12 weeks ago",
          desc: "Beach and Sunset Views",
          imgSrc: [
            require("../../../../../assets/image/images/image11.webp"),
            require("../../../../../assets/image/images/image13.webp"),
            require("../../../../../assets/image/images/image5.webp"),
            require("../../../../../assets/image/images/image7.webp"),
          ],
          price: "$100",
          date: "15-20 May",
          title: "Marrakech, Morroco",
        },
        {
          rating: "4.95",
          added: "7 weeks ago",
          desc: "Beach and Sunset Views",
          imgSrc: [
            require("../../../../../assets/image/images/image12.webp"),
            require("../../../../../assets/image/images/image6.webp"),
            require("../../../../../assets/image/images/image7.webp"),
            require("../../../../../assets/image/images/image8.webp"),
          ],
          price: "$20,000",
          date: "15-20 May",
          title: "Breckenridge, Colorado",
        },
        {
          rating: "4.5",
          added: "7 weeks ago",
          desc: "Beach and Sunset Views",
          imgSrc: [
            require("../../../../../assets/image/images/image13.webp"),
            require("../../../../../assets/image/images/image7.webp"),
            require("../../../../../assets/image/images/image8.webp"),
            require("../../../../../assets/image/images/image9.webp"),
          ],
          price: "$1000",
          date: "15-20 May",
          title: "Gallina, Italy",
        },
        {
          rating: "4.1",
          added: "3 weeks ago",
          desc: "Beach and Sunset Views",
          imgSrc: [
            require("../../../../../assets/image/images/image14.webp"),
            require("../../../../../assets/image/images/image10.webp"),
            require("../../../../../assets/image/images/image11.webp"),
            require("../../../../../assets/image/images/image12.webp"),
          ],
          price: "$28,000",
          date: "15-20 May",
          title: "Mijas, Spain",
        },
        {
          rating: "3.99",
          added: "9 weeks ago",
          desc: "Beach and Sunset Views",
          imgSrc: [
            require("../../../../../assets/image/images/image15.webp"),
            require("../../../../../assets/image/images/image13.webp"),
            require("../../../../../assets/image/images/image14.webp"),
            require("../../../../../assets/image/images/image15.webp"),
          ],
          price: "$15,000",
          date: "15-20 May",
          title: "Asciano, Italy",
        },
        {
          rating: "3.8",
          added: "9 weeks ago",
          desc: "Beach and Sunset Views",
          imgSrc: [
            require("../../../../../assets/image/images/image16.webp"),
            require("../../../../../assets/image/images/image16.webp"),
            require("../../../../../assets/image/images/image1.webp"),
            require("../../../../../assets/image/images/image5.webp"),
          ],
          price: "$10,100",
          date: "15-20 May",
          title: "Crklada,Croatia",
        },
        {
          rating: "4.7",
          added: "2 weeks ago",
          desc: "Beach and Sunset Views",
          imgSrc: [
            require("../../../../../assets/image/images/image9.webp"),
            require("../../../../../assets/image/images/image6.webp"),
            require("../../../../../assets/image/images/image7.webp"),
            require("../../../../../assets/image/images/image8.webp"),
          ],
          price: "$220",
          date: "15-20 May",
          title: "Bressanone, Italy",
        },
        {
          rating: "4.1",
          added: "5 weeks ago",
          desc: "Beach and Sunset Views",
          imgSrc: [
            require("../../../../../assets/image/images/image8.webp"),
            require("../../../../../assets/image/images/image9.webp"),
            require("../../../../../assets/image/images/image10.webp"),
            require("../../../../../assets/image/images/image11.webp"),
          ],
          price: "$25,800",
          date: "15-20 May",
          title: "Kecamatan Kuta , Indonesia",
        },
      ];
      const [hoverStates, setHoverStates] = useState(Array(Imagecards.length).fill(false));
      const [liked, setLiked] = useState(Array(Imagecards.length).fill(false));
      const sliderRefs = useRef([]);
    
    
      const toggleLike = (index) => {
        const newLiked = [...liked];
        newLiked[index] = !newLiked[index];
        setLiked(newLiked);
      };
      
    
      const settings = {
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    
      useEffect(() => {
        sliderRefs.current = Array(Imagecards.length)
          .fill()
          .map((_, i) => sliderRefs.current[i] || React.createRef());
      }, [Imagecards.length]);
    
      const PrevArrow = ({ currentSlide, hoverState, onClick }) => {
        return (
          <ArrowmDivL
            className={`next-slick-arrow ${currentSlide === 0 || !hoverState ? 'hidden' : ''}`}
            onClick={onClick}
          >
            <ArrowImage
              src={require("../../../../../assets/icons/arrowhead-left-svgrepo-com.svg").default}
            />
          </ArrowmDivL>
        );
      };
      
      const NextArrow = ({ currentSlide, slideCount, hoverState, onClick }) => {
        return (
          <ArrowmDivR
            className={`next-slick-arrow ${currentSlide === slideCount - 1 || !hoverState ? 'hidden' : ''}`}
            onClick={onClick}
          >
            <ArrowImage
              src={require("../../../../../assets/icons/arrowhead-right-svgrepo-com.svg").default}
            />
          </ArrowmDivR>
        );
      };
  return (
    <Div showFilter={showFilter} openSignup={openSignup}>
    {Imagecards.map((item, i) => (
      <M key={i} initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 , scaleY: [0.1,0.2,0.3, 0.4,0.5,0.6,0.7, 0.8, 0.9, 1]}}
        transition={{ duration: 0.5, ease: "easeIn", delay: i * 0.2 }}
        onMouseEnter={() => {
          const newHoverStates = [...hoverStates];
          newHoverStates[i] = true;
          setHoverStates(newHoverStates);
        }}
        onMouseLeave={() => {
          const newHoverStates = [...hoverStates];
          newHoverStates[i] = false;
          setHoverStates(newHoverStates);
        }}>
        <SliderContainer>
          <GuestFav>
            <Fav>Guest favourite</Fav>
          </GuestFav>
          <Bottom>
            <Slider
              ref={sliderRefs.current[i]}
              {...settings}
              prevArrow={<PrevArrow currentSlide={0} hoverState={hoverStates[i]} onClick={() => sliderRefs.current[i].slickPrev()} />}
              nextArrow={<NextArrow currentSlide={0} slideCount={item.imgSrc.length} hoverState={hoverStates[i]} onClick={() => sliderRefs.current[i].slickNext()} />}
            >
              {item.imgSrc.map((image, index) => (
                <Img
                  key={index}
                  src={image}
                  alt={item.desc}
                />
              ))}
            </Slider>
          </Bottom>
          <HeartDiv onClick={() => toggleLike(i)}>
            <Heart
              src={
                liked[i]
                  ? require("../../../../../assets/icons/heart-red-svgrepo-com.svg")
                      .default
                  : require("../../../../../assets/icons/heart-svgrepo-com.svg")
                      .default
              }
              alt="Like"
            />
          </HeartDiv>
        </SliderContainer>
        <TextContainer>
          <Left>
          <BoldText>{item.title}</BoldText>
          <LightText>{item.added}</LightText>
          <LightText>{item.date}</LightText>
            <BoldText>{item.price} Night</BoldText>
          </Left>
          <Right>
            <StarC>
              <Star src={require("../../../../../assets/icons/star-svgrepo-com.svg").default} alt="starimage" />
              <Rating>{item.rating}</Rating>
            </StarC>
          </Right>
        </TextContainer>
      </M>
    ))}
  </Div>
  )
}
const Div = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: ${({ showFilter }) => (showFilter ? "58vh" : '')};
  overflow-y: ${({ showFilter }) => (showFilter ? 'hidden' : 'auto')};
  height: ${({ openSignup }) => (openSignup ? "58vh" : '')};
  overflow-y: ${({ openSignup }) => (openSignup ? 'hidden' : 'auto')};
`;
const M = styled(motion.section)`
  width: 23.5%;
  margin-bottom: 30px;
  overflow-y: hidden;
  @media all and (max-width: 1280px){
    width: 32%;
  }
  @media all and (max-width: 980px){
    width: 48%;
  }
  @media all and (max-width: 640px){
    width: 98%;
  }
  @media all and (max-width: 480px){
    /* display: none; */
  }
`;

const Bottom = styled(motion.section)``;
const HeartDiv = styled.section`
  width: 25px;
  position: absolute;
  top: 13px;
  right: 10px;
`;
const Heart = styled(motion.img)`
  width: 100%;
  display: block;
`;
const SliderContainer = styled.div`
  position: relative;
  z-index: 1;
`;
const GuestFav = styled.div`
position: absolute;
top: 15px;
left: 15px;
z-index: 2;
height: 25px;
width: 35%;
background-color: #fff;
border-radius:11px;
`;
const Fav = styled.p`
color: #000;
white-space: nowrap;
font-size: 14px;
text-align: center;
font-weight: 500;
`;


const TextContainer = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content:space-between;
`;
const BoldText = styled.h5`
  color: #000;
  font-size: 14px;
  font-weight: 600;
`;
const LightText = styled.h6`
  color: #808080;
  margin: 5px 0;
  font-size: 14px;
`;
const Left = styled.div``;
const Right = styled.div``;
const StarC = styled.div`
display:flex;

`;
const Star = styled.img`
width: 14px;
display: block;
`;
const Rating = styled.h6`
color:#000;
font-size: 14px;
font-weight: 400;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 14/13;
  border-radius: 10px;
`;

const ArrowImage = styled.img`
  width: 20px;
  display: block;
`;

const ArrowmDivL = styled.div`
  border-radius: 50%;
  border: 1px solid #000;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  z-index: 2;
  background-color: #fff;
  &.hidden{
    display: none !important;
  }
`;

const ArrowmDivR = styled.div`
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid #000;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  z-index: 2;
  &.hidden{
    display: none !important;
  }
`;
export default ImageCards