import React, { useRef , useEffect, useState} from "react";
import Main from "../Main";
import styled from "styled-components";
import Imageicon from "../../../assets/image/images/image1.webp";
import Slider from "react-slick";
import "./slick/slick.css";
import "./slick/slick-theme.css";


function Cards() {
  const Imagecards = [
    {
      rating: "4",
      desc: "Beach and Sunset Views",
      imgSrc: [
        require("../../../assets/image/images/image16.webp"),
        require("../../../assets/image/images/image5.webp"),
        require("../../../assets/image/images/image6.webp"),
        require("../../../assets/image/images/image7.webp"),
      ],
      price: "$40,000",
      date: "15-20 May",
      title: "Mariefred, Sweden",
    },
    {
      rating: "4",
      desc: "Beach and Sunset Views",
      imgSrc: [
        require("../../../assets/image/images/image8.webp"),
        require("../../../assets/image/images/image9.webp"),
        require("../../../assets/image/images/image15.webp"),
        require("../../../assets/image/images/image5.webp"),
      ],
      price: "$30,000",
      date: "25-20 May",
      title: "Marbella, Spain",
    },
    {
      rating: "4",
      desc: "Beach and Sunset Views",
      imgSrc: [
        require("../../../assets/image/images/image7.webp"),
        require("../../../assets/image/images/image12.webp"),
        require("../../../assets/image/images/image13.webp"),
        require("../../../assets/image/images/image14.webp"),
      ],
      price: "$45,000",
      date: "10-20 Oct",
      title: "Molde, Norway",
    },
    {
      rating: "4",
      desc: "Beach and Sunset Views",
      imgSrc: [
        require("../../../assets/image/images/image5.webp"),
        require("../../../assets/image/images/image15.webp"),
        require("../../../assets/image/images/image16.webp"),
        require("../../../assets/image/images/image9.webp"),
      ],
      price: "$25,000",
      date: "15-20 May",
      title: "Broken Bow, US",
    },
    {
      rating: "4",
      desc: "Beach and Sunset Views",
      imgSrc: [
        require("../../../assets/image/images/image10.webp"),
        require("../../../assets/image/images/image16.webp"),
        require("../../../assets/image/images/image12.webp"),
        require("../../../assets/image/images/image5.webp"),
      ],
      price: "$12,300",
      date: "15-20 May",
      title: "Lac-Beauport, Canada",
    },
    {
      rating: "4",
      desc: "Beach and Sunset Views",
      imgSrc: [
        require("../../../assets/image/images/image11.webp"),
        require("../../../assets/image/images/image13.webp"),
        require("../../../assets/image/images/image5.webp"),
        require("../../../assets/image/images/image7.webp"),
      ],
      price: "$100",
      date: "15-20 May",
      title: "Marrakech, Morroco",
    },
    {
      rating: "4",
      desc: "Beach and Sunset Views",
      imgSrc: [
        require('../../../assets/image/images/image12.webp'),
        require('../../../assets/image/images/image6.webp'),
        require('../../../assets/image/images/image7.webp'),
        require('../../../assets/image/images/image8.webp'),
      ],
      price: "$20,000",
      date: "15-20 May",
      title: "Breckenridge, Colorado",
    },
    {
      rating: "4",
      desc: "Beach and Sunset Views",
      imgSrc: [
        require('../../../assets/image/images/image13.webp'),
        require('../../../assets/image/images/image7.webp'),
        require('../../../assets/image/images/image8.webp'),
        require('../../../assets/image/images/image9.webp'),
      ],
      price: "$1000",
      date: "15-20 May",
      title: "Gallina, Italy",
    },
    {
      rating: "4",
      desc: "Beach and Sunset Views",
      imgSrc: [
        require('../../../assets/image/images/image14.webp'),
        require('../../../assets/image/images/image10.webp'),
        require('../../../assets/image/images/image11.webp'),
        require('../../../assets/image/images/image12.webp'),
      ],
      price: "$28,000",
      date: "15-20 May",
      title: "Mijas, Spain",
    },
    {
      rating: "4",
      desc: "Beach and Sunset Views",
      imgSrc: [
        require('../../../assets/image/images/image15.webp'),
        require('../../../assets/image/images/image13.webp'),
        require('../../../assets/image/images/image14.webp'),
        require('../../../assets/image/images/image15.webp'),
      ],
      price: "$15,000",
      date: "15-20 May",
      title: "Asciano, Italy",
    },
    {
      rating: "4",
      desc: "Beach and Sunset Views",
      imgSrc: [
        require('../../../assets/image/images/image16.webp'),
        require('../../../assets/image/images/image16.webp'),
        require('../../../assets/image/images/image1.webp'),
        require('../../../assets/image/images/image5.webp'),
      ],
      price: "$10,100",
      date: "15-20 May",
      title: "Crklada,Croatia",
    },
    {
      rating: "4",
      desc: "Beach and Sunset Views",
      imgSrc: [
        require('../../../assets/image/images/image9.webp'),
        require('../../../assets/image/images/image6.webp'),
        require('../../../assets/image/images/image7.webp'),
        require('../../../assets/image/images/image8.webp'),
      ],
      price: "$220",
      date: "15-20 May",
      title: "Bressanone, Italy",
    },
    {
      rating: "4",
      desc: "Beach and Sunset Views",
      imgSrc: [
        require('../../../assets/image/images/image8.webp'),
        require('../../../assets/image/images/image9.webp'),
        require('../../../assets/image/images/image10.webp'),
        require('../../../assets/image/images/image11.webp'),
      ],
      price: "$25,800",
      date: "15-20 May",
      title: "Kecamatan Kuta , Indonesia",
    },
  ];
  const [liked, setLiked] = useState(Array(Imagecards.length).fill(false))
  const toggleLike = (index) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };
  const sliderRefs = useRef([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(() => {
    // Initialize sliderRefs with refs for each Slider instance
    sliderRefs.current = Array(Imagecards.length)
      .fill()
      .map((_, i) => sliderRefs.current[i] || React.createRef());
  }, [Imagecards.length]);

  const nextSlide = (index) => {
    sliderRefs.current[index]?.current?.slickNext();
  };

  const prevSlide = (index) => {
    sliderRefs.current[index]?.current?.slickPrev();
    };
    const PrevArrow = (props) => (
        <ArrowmDivL {...props} className="next-slick-arrow rotate-180">
           <ArrowImage src={require("../../../assets/icons/arrowhead-left-svgrepo-com.svg").default} />
        </ArrowmDivL>
      );
      
      const NextArrow = (props) => (
        <ArrowmDivR {...props} className="next-slick-arrow">
           <ArrowImage src={require("../../../assets/icons/arrowhead-right-svgrepo-com.svg").default} />
        </ArrowmDivR>
      );
  return (
    <MainWrapper>
      <Wrapper>
        <Main />
      </Wrapper>
      <FlexWrapper>
      <Div>
          {Imagecards.map((item, i) => (
            <M key={i}>
              <SliderContainer>
                <Bottom>
                          {/* <ArrowmDivL onClick={() => prevSlide(i)} className="next-slick-arrow rotate-180">
                          <ArrowImage src={require("../../../assets/icons/arrowhead-left-svgrepo-com.svg").default} />
                
                  </ArrowmDivL> */}
                  <Slider ref={sliderRefs.current[i]} {...settings} prevArrow={<PrevArrow />} nextArrow={<NextArrow />}>
                    {item.imgSrc.map((image, index) => (
                      <Img key={index} src={image} alt={item.desc} />
                    ))}
                  </Slider>
                  {/* <ArrowmDivR onClick={() => nextSlide(i)} className="next-slick-arrow">
                  <ArrowImage src={require("../../../assets/icons/arrowhead-right-svgrepo-com.svg").default} />
                  </ArrowmDivR> */}
                </Bottom>
                <HeartDiv onClick={() => toggleLike(i)}>
                    <Heart  src={liked[i] ? require("../../../assets/icons/heart-red-svgrepo-com.svg").default : require("../../../assets/icons/heart-svgrepo-com.svg").default} alt="Like"/>
                  </HeartDiv>
              </SliderContainer>
              <p>{item.title}</p>
            </M>
          ))}
        </Div>
      </FlexWrapper>
    </MainWrapper>
  );
}
const MainWrapper = styled.section`
`;

const Wrapper = styled.section`
  /* z-index: 9; */
`;
const FlexWrapper = styled.section`
/* padding:30px 0; */
width: 90%;
margin: 0 auto;
`;
const Div = styled.section`
  /* height: 1800px; */
  /* z-index: 0; */
  /* background-color: #000; */
  /* overflow-y: hidden; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow-x: hidden;
`;
const M = styled.section`
  width: 23.5%;
`;

const Bottom = styled.section`
`;
const HeartDiv = styled.section`
width: 25px;
position: absolute;
top: 5px;
right: 10px;
`;
const Heart = styled.img`
width: 100%;
display: block;
`;
const SliderContainer = styled.div`
  position: relative;
  /* display: flex; */
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 1;
  border-radius: 10px;
`;

const ArrowImage = styled.img`
  width: 20px;
  display: block;
  margin-left: 4px;
  margin-top: 5px;
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
`;
export default Cards;
