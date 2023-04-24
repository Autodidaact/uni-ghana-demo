import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import  henry from "../images/pexels-henry-&-co-1939485.jpg"
import madison from "../images/pexels-madison-inouye-1831234.jpg"
import mudassir from "../images/pexels-mudassir-ali-2680270.jpg"
import "./styles/carousel.css"

export default function CarouselSlider({ universities }) {
  const [index, setIndex] = useState(0);


  const images = [...universities];
  images.sort(() => 0.5 - Math.random());
  const uniImages = images.slice(0, 4);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  console.log(universities)
  const sliderimgs = uniImages.map((university) => (
      <Carousel.Item id={university.id}>
        <img
          className="d-block w-100"
          src={university.image_url}
          alt={university.name}
        />
        <Carousel.Caption>
          <h3>{university.name}</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
))
  return (
    <Carousel className='carousel' activeIndex={index} onSelect={handleSelect}>
      {sliderimgs}
    </Carousel>
  );
}