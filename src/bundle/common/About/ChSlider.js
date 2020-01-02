import React from 'react'
import {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img2 from '../../.././assets/chinese-blackboard.png'
import img1 from '../../.././assets/HSK-logo.jpg'
function ChSlider() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
  
    return (
      <Carousel className="carousel " activeIndex={index} direction={direction} onSelect={handleSelect}>
        <Carousel.Item>
          <img 
            className="d-block w-100 h-50 hsk"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-black">Подготовка к HSK</h3>
            <p> Эффективная методика подготовки к HSK 
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50 ch-bb"
            src={img2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Разговорный китайский</h3>
            <p>У нас есть групповые и индивидуальные уроки общего китайского языка!</p>
          </Carousel.Caption>
        </Carousel.Item>
        
          
      </Carousel>
    );
  }
  
export default ChSlider