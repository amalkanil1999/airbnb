import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import './slick/slick.css';
import './slick/slick-theme.css';


function Vectors() {
  const vectordata = [
    {
      label: "Amazing",
      imgSrc:
        "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
    },
    {
      label: "Mountain top",
      imgSrc:
        "https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg",
    },
    {
      label: "Farms",
      imgSrc:
        "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
    },
    {
      label: "Surfing",
      imgSrc:
        "https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg",
    },
    {
      label: "Lakefront",
      imgSrc:
        "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
    },
    {
      label: "Yurts",
      imgSrc:
        "https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg",
    },
    {
      label: "Arctic",
      imgSrc:
        "https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg",
    },
    {
      label: "Rooms",
      imgSrc:
        "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
    },
    {
      label: "Tropical",
      imgSrc:
        "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
    },
    {
      label: "A-frames",
      imgSrc:
        "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
    },
    {
      label: "Earth homes",
      imgSrc:
        "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
    },
    {
      label: "Beach",
      imgSrc:
        "https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg",
    },
    {
      label: "Iconic cities",
      imgSrc:
        "https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg",
    },
    {
      label: "Islands",
      imgSrc:
        "https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg",
    },
    {
      label: "Camper vans",
      imgSrc:
        "https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg",
    },
    {
      label: "Lakefront",
      imgSrc:
        "https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg",
    },
    {
      label: "Amazing pools",
      imgSrc:
        "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
    },
    {
      label: "Design",
      imgSrc:
        "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
    },
    {
      label: "Camping",
      imgSrc:
        "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
    },
    {
      label: "Cabins",
      imgSrc:
        "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
    },
    {
      label: "Caves",
      imgSrc:
        "https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg",
    },
    {
      label: "Trending",
      imgSrc:
        "https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg",
    },
    {
      label: "Golfing",
      imgSrc:
        "https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg",
    },
  ]
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 3,
    nextArrow: (
      <div>
        <ArrowmDiv className="next-slick-arrow">
           <ArrowImage src={require("../../../assets/icons/arrowhead-right-svgrepo-com.svg").default} />
        </ArrowmDiv>
      </div>
    ),

    prevArrow: (
      <div>
        <ArrowmDiv className="next-slick-arrow rotate-180">
        <ArrowImage src={require("../../../assets/icons/arrowhead-left-svgrepo-com.svg").default} />
        </ArrowmDiv>
      </div>
    ),
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        }
       },
      {
        breakpoint: 1024,
        settings: {
         slidesToShow: 6,
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {vectordata.map((item, i) => (
        <Slide key={i}>
          <Img src={item.imgSrc} alt={item.label} />
          <Para>{item.label}</Para>
        </Slide>
      ))}
    </Slider>
  );
}

const Slide = styled.div`
&:hover{
  opacity:1 !important;
  border-bottom: 2px solid #696969;
  transition: all 0.2s;
}
text-align:center;
margin: 10px;
opacity: 0.7;
border-bottom: 2px solid #fff;
`;

const Img = styled.img`
width: 25px;
  object-fit: contain;
  margin: 0 auto;
`;

const Para = styled.h5`
  font-size: 12px;
  font-weight: 600;
  color: #000;
  white-space: nowrap;
  margin:10px 0;
`;

const ArrowImage = styled.img`
width: 20px;
display:block;
`;
const ArrowmDiv = styled.div`
border-radius: 50%;
border: 1px solid #000;
height: 30px;
width: 30px;
display: flex;
justify-content:center;
align-items:center;
`;


export default Vectors;